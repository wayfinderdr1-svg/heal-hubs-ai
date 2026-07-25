comment on table public.profiles is e'@graphql({"totalCount": {"enabled": false}, "primary_key_columns": ["id"]})\n\nExcluded from GraphQL schema for privacy.';
-- Use pg_graphql directive to exclude tables from schema
comment on table public.profiles is e'@graphql({"skip_table": true})';
comment on table public.daily_checkins is e'@graphql({"skip_table": true})';