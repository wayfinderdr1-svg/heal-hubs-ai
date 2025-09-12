-- Drop the overly permissive profile viewing policy
DROP POLICY "Profiles are viewable by everyone" ON public.profiles;

-- Create a more secure policy that only allows users to view their own profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Optional: Allow authenticated users to view basic public profile info if needed
-- (Uncomment the policy below if the app needs users to see each other's display names)
-- CREATE POLICY "Authenticated users can view basic profile info" 
-- ON public.profiles 
-- FOR SELECT 
-- TO authenticated
-- USING (true);