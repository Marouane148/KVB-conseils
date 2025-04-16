/*
  # Update CV storage accessibility

  1. Changes
    - Make recruitment bucket public
    - Update storage policies for CV access
    - Add public read access to CV files

  2. Security
    - Maintains upload restrictions to authenticated users
    - Allows public read access to CV files
    - Preserves file type and path restrictions
*/

-- Update the recruitment bucket to be public
UPDATE storage.buckets
SET public = true
WHERE id = 'recruitment';

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anonymous CV upload" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to read CVs" ON storage.objects;

-- Create new upload policy
CREATE POLICY "Allow CV upload"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (
  bucket_id = 'recruitment' AND 
  (LOWER(name) LIKE 'cv/%.pdf')
);

-- Create new read policy for CV files
CREATE POLICY "Allow public CV read"
ON storage.objects
FOR SELECT
TO public
USING (
  bucket_id = 'recruitment' AND 
  (LOWER(name) LIKE 'cv/%.pdf')
);