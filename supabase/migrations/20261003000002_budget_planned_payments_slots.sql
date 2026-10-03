alter table budget.planned_payments add column active boolean not null default true;
alter table budget.planned_payments add constraint budget_planned_payments_slot unique (month_id, sort);
