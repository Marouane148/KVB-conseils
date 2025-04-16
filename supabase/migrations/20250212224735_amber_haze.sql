/*
  # Fix job applications table permissions

  1. Changes
    - Add public read access to job_applications table
    - Ensure proper RLS policies are in place
*/

-- Ensure RLS is enabled
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow public read" ON job_applications;
DROP POLICY IF EXISTS "Allow public insert" ON job_applications;

-- Create new policies
CREATE POLICY "Allow public read"
ON job_applications
FOR SELECT
TO public
USING (true);

CREATE POLICY "Allow public insert"
ON job_applications
FOR INSERT
TO public
WITH CHECK (true);