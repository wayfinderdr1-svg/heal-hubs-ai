REVOKE ALL ON public.profiles FROM anon, authenticated;
REVOKE ALL ON public.daily_checkins FROM anon, authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.daily_checkins TO authenticated;
GRANT ALL ON public.profiles TO service_role;
GRANT ALL ON public.daily_checkins TO service_role;

COMMENT ON TABLE public.profiles IS '@graphql({"skip_table": true})';
COMMENT ON TABLE public.daily_checkins IS '@graphql({"skip_table": true})';