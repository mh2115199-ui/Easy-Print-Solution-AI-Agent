-- Secure ingestion staging table for future backend automation. Not publicly readable.
create table if not exists public.meta_events (
 id bigint generated always as identity primary key,
 external_id text not null unique,
 channel text not null check (channel in ('whatsapp','instagram','messenger')),
 payload jsonb not null,
 received_at timestamptz not null default now(),
 processed_at timestamptz
);
alter table public.meta_events enable row level security;
-- No policies: anonymous and authenticated clients have no row access.
-- Netlify function uses service role key on the server only.
create index if not exists meta_events_unprocessed_idx on public.meta_events(received_at) where processed_at is null;
