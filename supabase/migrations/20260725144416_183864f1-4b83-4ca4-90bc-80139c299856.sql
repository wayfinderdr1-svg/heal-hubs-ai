-- Revoke table-wide SELECT from authenticated to hide from GraphQL schema,
-- then re-grant SELECT at the column level (PostgREST still works via column grants).
REVOKE SELECT ON public.profiles FROM authenticated;
GRANT SELECT (id, user_id, display_name, avatar_url, bio, created_at, updated_at)
  ON public.profiles TO authenticated;

REVOKE SELECT ON public.daily_checkins FROM authenticated;
GRANT SELECT (id, user_id, checkin_date, mood_rating, energy_level, stress_level,
              sleep_hours, exercise_minutes, notes, recovery_goals, gratitude_notes,
              created_at, updated_at)
  ON public.daily_checkins TO authenticated;