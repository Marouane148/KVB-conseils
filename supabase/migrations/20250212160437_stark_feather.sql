/*
  # Add CV storage support for recruitment

  1. Changes
    - Create job_applications table with CV support
    - Create storage bucket for CV files
    - Add storage policies for CV uploads

  2. Security
    - Enable RLS for job_applications table
    - Enable RLS for storage bucket
    - Add policies for CV upload and access
*/

-- Create job_applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  position text NOT NULL,
  message text NOT NULL,
  cv_path text,
  status text DEFAULT 'nouveau',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on job_applications
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow public insert
CREATE POLICY "Allow public insert" ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow admin read
CREATE POLICY "Allow admin read" ON job_applications
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Create storage bucket for CVs if it doesn't exist
DO $$
BEGIN
  INSERT INTO storage.buckets (id, name, public)
  VALUES ('recruitment', 'recruitment', false)
  ON CONFLICT (id) DO NOTHING;
END $$;

-- Allow anonymous users to upload CVs
CREATE POLICY "Allow anonymous CV upload"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (
  bucket_id = 'recruitment' AND 
  (LOWER(name) LIKE 'cv/%.pdf')
);

-- Allow authenticated users to read CVs
CREATE POLICY "Allow authenticated users to read CVs"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'recruitment');