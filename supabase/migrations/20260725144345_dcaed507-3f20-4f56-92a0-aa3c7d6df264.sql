-- Revoke anon SELECT on user-scoped tables (they should not be discoverable pre sign-in)
REVOKE SELECT ON public.profiles FROM anon;
REVOKE SELECT ON public.daily_checkins FROM anon;

-- Also revoke authenticated table-wide SELECT so GraphQL schema doesn't expose these
-- (RLS + auth.uid() policies still allow row access via PostgREST for owners)
REVOKE SELECT ON public.profiles FROM authenticated;
REVOKE SELECT ON public.daily_checkins FROM authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.daily_checkins TO authenticated;

-- Actually the linter flags GraphQL exposure specifically. Re-grant needed privileges but
-- revoke EXECUTE on SECURITY DEFINER functions from public roles.
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;