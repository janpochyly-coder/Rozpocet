-- Prístup bez účtov: každá funkcia vyžaduje tajný kód domácnosti.

create function budget._need_household(p_code text)
returns uuid
language plpgsql
stable
security definer
set search_path = budget
as $$
declare hid uuid;
begin
  select id into hid from households where access_code = lower(trim(coalesce(p_code, '')));
  if hid is null then raise exception 'invalid code'; end if;
  return hid;
end;
$$;

create function budget._need_month(p_hid uuid, p_month uuid)
returns void
language plpgsql
stable
security definer
set search_path = budget
as $$
begin
  if not exists (select 1 from months where id = p_month and household_id = p_hid) then
    raise exception 'invalid month';
  end if;
end;
$$;
revoke all on function budget._need_household(text) from public, anon, authenticated;
revoke all on function budget._need_month(uuid, uuid) from public, anon, authenticated;

create function public.create_household()
returns text
language plpgsql
security definer
set search_path = budget, extensions
as $$
declare
  hid uuid;
  code text := encode(gen_random_bytes(16), 'hex');
begin
  insert into households (access_code) values (code) returning id into hid;
  -- Počiatočné dlhy (mená a sumy) sú osobné údaje, preto nie sú v tomto súbore.
  -- V nasadenej databáze ich vkladá táto funkcia; pri vlastnej inštalácii ich doplňte sem.
  return code;
end;
$$;

create function public.get_state(p_code text)
returns jsonb
language plpgsql
stable
security definer
set search_path = budget
as $$
declare hid uuid := budget._need_household(p_code);
begin
  return jsonb_build_object(
    'months', coalesce((select jsonb_agg(jsonb_build_object('id', m.id, 'y', m.y, 'mo', m.mo, 'status', m.status, 'seq', m.seq, 'inc_j', m.inc_j, 'inc_i', m.inc_i) order by m.y, m.mo) from months m where m.household_id = hid), '[]'::jsonb),
    'limits', coalesce((select jsonb_agg(jsonb_build_object('month_id', l.month_id, 'key', l.key, 'amount', l.amount)) from month_limits l join months m on m.id = l.month_id where m.household_id = hid), '[]'::jsonb),
    'plans', coalesce((select jsonb_agg(jsonb_build_object('month_id', p.month_id, 'day', p.day, 'name', p.name, 'key', p.key, 'amount', p.amount, 'sort', p.sort) order by p.sort) from planned_payments p join months m on m.id = p.month_id where m.household_id = hid and p.active), '[]'::jsonb),
    'transactions', coalesce((select jsonb_agg(jsonb_build_object('id', t.id, 'month_id', t.month_id, 'dt', t.dt, 'cat', t.cat, 'sub', t.sub, 'amount', t.amount, 'who', t.who, 'note', t.note) order by t.dt, t.created_at) from transactions t where t.household_id = hid), '[]'::jsonb),
    'incomes', coalesce((select jsonb_agg(jsonb_build_object('id', i.id, 'month_id', i.month_id, 'dt', i.dt, 'amount', i.amount, 'who', i.who, 'note', i.note) order by i.dt, i.created_at) from incomes i where i.household_id = hid), '[]'::jsonb),
    'debts', coalesce((select jsonb_agg(jsonb_build_object('sub', d.sub, 'name', d.name, 'balance', d.balance, 'as_of', d.as_of) order by d.sub) from debts d where d.household_id = hid), '[]'::jsonb)
  );
end;
$$;

create function public.add_transaction(p_code text, p_month uuid, p_dt date, p_cat text, p_sub text, p_amount numeric, p_who text, p_note text)
returns jsonb
language plpgsql
security definer
set search_path = budget
as $$
declare
  hid uuid := budget._need_household(p_code);
  r budget.transactions;
begin
  perform budget._need_month(hid, p_month);
  insert into transactions (household_id, month_id, dt, cat, sub, amount, who, note)
  values (hid, p_month, p_dt, p_cat, coalesce(p_sub, ''), p_amount, p_who, coalesce(p_note, ''))
  returning * into r;
  return jsonb_build_object('id', r.id, 'month_id', r.month_id, 'dt', r.dt, 'cat', r.cat, 'sub', r.sub, 'amount', r.amount, 'who', r.who, 'note', r.note);
end;
$$;

create function public.add_income(p_code text, p_month uuid, p_dt date, p_amount numeric, p_who text, p_note text)
returns jsonb
language plpgsql
security definer
set search_path = budget
as $$
declare
  hid uuid := budget._need_household(p_code);
  r budget.incomes;
begin
  perform budget._need_month(hid, p_month);
  insert into incomes (household_id, month_id, dt, amount, who, note)
  values (hid, p_month, p_dt, p_amount, p_who, coalesce(p_note, ''))
  returning * into r;
  return jsonb_build_object('id', r.id, 'month_id', r.month_id, 'dt', r.dt, 'amount', r.amount, 'who', r.who, 'note', r.note);
end;
$$;

create function public.set_limit(p_code text, p_month uuid, p_key text, p_amount numeric)
returns void
language plpgsql
security definer
set search_path = budget
as $$
declare hid uuid := budget._need_household(p_code);
begin
  perform budget._need_month(hid, p_month);
  insert into month_limits (month_id, key, amount) values (p_month, p_key, p_amount)
  on conflict (month_id, key) do update set amount = excluded.amount;
end;
$$;

-- Vytvorí alebo upraví mesiac vrátane limitov a plánovaných platieb.
-- p_month: {id?, y, mo, inc_j, inc_i, limits: {kľúč: suma|null}, plan: [{d, name, key, amt}]}
-- Plánované platby sa ukladajú do pozícií (sort); nepoužité pozície sa vypnú (active = false).
create function public.save_month(p_code text, p_month jsonb)
returns uuid
language plpgsql
security definer
set search_path = budget
as $$
declare
  hid uuid := budget._need_household(p_code);
  mid uuid := nullif(p_month ->> 'id', '')::uuid;
  st text;
  n int := jsonb_array_length(coalesce(p_month -> 'plan', '[]'::jsonb));
begin
  if mid is null then
    st := case when exists (select 1 from months where household_id = hid and status = 'active') then 'planned' else 'active' end;
    insert into months (household_id, y, mo, status, seq, inc_j, inc_i)
    values (hid, (p_month ->> 'y')::int, (p_month ->> 'mo')::int, st,
            coalesce((select max(seq) from months where household_id = hid), 0) + 1,
            coalesce((p_month ->> 'inc_j')::numeric, 0), coalesce((p_month ->> 'inc_i')::numeric, 0))
    returning id into mid;
  else
    perform budget._need_month(hid, mid);
    update months set inc_j = coalesce((p_month ->> 'inc_j')::numeric, 0), inc_i = coalesce((p_month ->> 'inc_i')::numeric, 0) where id = mid;
  end if;
  insert into month_limits (month_id, key, amount)
  select mid, e.key, case when jsonb_typeof(e.value) = 'null' then null else (e.value #>> '{}')::numeric end
  from jsonb_each(coalesce(p_month -> 'limits', '{}'::jsonb)) e
  on conflict (month_id, key) do update set amount = excluded.amount;
  insert into planned_payments (month_id, day, name, key, amount, sort, active)
  select mid, (x.value ->> 'd')::int, coalesce(x.value ->> 'name', ''), x.value ->> 'key',
         case when jsonb_typeof(x.value -> 'amt') = 'null' or (x.value -> 'amt') is null then null else (x.value ->> 'amt')::numeric end,
         (x.ord - 1)::int, true
  from jsonb_array_elements(coalesce(p_month -> 'plan', '[]'::jsonb)) with ordinality as x(value, ord)
  on conflict (month_id, sort) do update set day = excluded.day, name = excluded.name, key = excluded.key, amount = excluded.amount, active = true;
  update planned_payments set active = false where month_id = mid and sort >= n;
  return mid;
end;
$$;

create function public.switch_month(p_code text, p_month uuid)
returns void
language plpgsql
security definer
set search_path = budget
as $$
declare hid uuid := budget._need_household(p_code);
begin
  if not exists (select 1 from months where id = p_month and household_id = hid and status = 'planned') then
    raise exception 'month is not planned';
  end if;
  update months set status = 'closed' where household_id = hid and status = 'active';
  update months set status = 'active' where id = p_month;
end;
$$;

revoke all on function public.create_household() from public;
revoke all on function public.get_state(text) from public;
revoke all on function public.add_transaction(text, uuid, date, text, text, numeric, text, text) from public;
revoke all on function public.add_income(text, uuid, date, numeric, text, text) from public;
revoke all on function public.set_limit(text, uuid, text, numeric) from public;
revoke all on function public.save_month(text, jsonb) from public;
revoke all on function public.switch_month(text, uuid) from public;
grant execute on function public.create_household() to anon, authenticated;
grant execute on function public.get_state(text) to anon, authenticated;
grant execute on function public.add_transaction(text, uuid, date, text, text, numeric, text, text) to anon, authenticated;
grant execute on function public.add_income(text, uuid, date, numeric, text, text) to anon, authenticated;
grant execute on function public.set_limit(text, uuid, text, numeric) to anon, authenticated;
grant execute on function public.save_month(text, jsonb) to anon, authenticated;
grant execute on function public.switch_month(text, uuid) to anon, authenticated;
