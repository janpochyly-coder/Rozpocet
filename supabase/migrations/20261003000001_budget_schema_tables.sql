-- Dáta rodinného rozpočtu sú v schéme `budget`, ktorá nie je vystavená cez API.
create schema budget;
revoke all on schema budget from public, anon, authenticated;

create table budget.households (
  id uuid primary key default gen_random_uuid(),
  access_code text not null unique,
  created_at timestamptz not null default now()
);

create table budget.months (
  id uuid primary key default gen_random_uuid(),
  household_id uuid not null references budget.households (id) on delete cascade,
  y int not null,
  mo int not null check (mo between 0 and 11),
  status text not null check (status in ('planned', 'active', 'closed')),
  seq int not null default 1,
  inc_j numeric(12,2) not null default 0 check (inc_j >= 0),
  inc_i numeric(12,2) not null default 0 check (inc_i >= 0),
  created_at timestamptz not null default now(),
  unique (household_id, y, mo)
);
create unique index budget_months_one_active on budget.months (household_id) where status = 'active';

create table budget.month_limits (
  month_id uuid not null references budget.months (id) on delete cascade,
  key text not null,
  amount numeric(12,2) check (amount is null or amount >= 0),
  primary key (month_id, key)
);

create table budget.planned_payments (
  id uuid primary key default gen_random_uuid(),
  month_id uuid not null references budget.months (id) on delete cascade,
  day int not null check (day between 1 and 31),
  name text not null default '',
  key text not null,
  amount numeric(12,2) check (amount is null or amount >= 0),
  sort int not null default 0
);
create index budget_planned_payments_month_idx on budget.planned_payments (month_id);

create table budget.transactions (
  id uuid primary key default gen_random_uuid(),
  household_id uuid not null references budget.households (id) on delete cascade,
  month_id uuid not null references budget.months (id) on delete cascade,
  dt date not null,
  cat text not null,
  sub text not null default '',
  amount numeric(12,2) not null check (amount > 0),
  who text not null check (who in ('J', 'I')),
  note text not null default '',
  created_at timestamptz not null default now()
);
create index budget_transactions_household_idx on budget.transactions (household_id, dt);
create index budget_transactions_month_idx on budget.transactions (month_id);

create table budget.incomes (
  id uuid primary key default gen_random_uuid(),
  household_id uuid not null references budget.households (id) on delete cascade,
  month_id uuid not null references budget.months (id) on delete cascade,
  dt date not null,
  amount numeric(12,2) not null check (amount > 0),
  who text not null check (who in ('J', 'I')),
  note text not null default '',
  created_at timestamptz not null default now()
);
create index budget_incomes_household_idx on budget.incomes (household_id, dt);
create index budget_incomes_month_idx on budget.incomes (month_id);

create table budget.debts (
  household_id uuid not null references budget.households (id) on delete cascade,
  sub text not null,
  name text not null,
  balance numeric(12,2) not null check (balance >= 0),
  as_of date not null default current_date,
  primary key (household_id, sub)
);

alter table budget.households enable row level security;
alter table budget.months enable row level security;
alter table budget.month_limits enable row level security;
alter table budget.planned_payments enable row level security;
alter table budget.transactions enable row level security;
alter table budget.incomes enable row level security;
alter table budget.debts enable row level security;
