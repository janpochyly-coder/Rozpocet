-- Staré objekty z verzie s prihlasovaním cez účty sa už nepoužívajú, tak sa uzamknú.
revoke all on all tables in schema public from anon, authenticated;
revoke execute on function public.bootstrap_household(text) from anon, authenticated;
revoke execute on function public.join_household(text) from anon, authenticated;
revoke execute on function public.activate_month(uuid) from anon, authenticated;
revoke execute on function public.current_household() from anon, authenticated;
