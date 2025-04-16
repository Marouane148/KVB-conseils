/*
  # Update storage permissions for recruitment bucket

  1. Changes
    - Ensure recruitment bucket exists and is public
    - Update storage policies for CV access
    - Add explicit download policy
  
  2. Security
    - Allow public access to CV files
    - Maintain file type restrictions
    - Enable direct file downloads
*/

-- Ensure the recruitment bucket exists and is public
INSERT INTO storage.buckets (id, name, public)
VALUES ('recruitment', 'recruitment', true)
ON CONFLICT (id) DO UPDATE
SET public = true;

DO $$ 
BEGIN
    -- Drop existing policies if they exist
    DROP POLICY IF EXISTS "Allow CV upload" ON storage.objects;
    DROP POLICY IF EXISTS "Allow public CV read" ON storage.objects;
    DROP POLICY IF EXISTS "Allow CV download" ON storage.objects;

    -- Create new policies with updated permissions
    CREATE POLICY "Allow CV upload"
    ON storage.objects
    FOR INSERT
    TO anon
    WITH CHECK (
        bucket_id = 'recruitment' AND 
        (LOWER(name) LIKE 'cv/%.pdf')
    );

    CREATE POLICY "Allow public CV read"
    ON storage.objects
    FOR SELECT
    TO public
    USING (
        bucket_id = 'recruitment' AND 
        (LOWER(name) LIKE 'cv/%.pdf')
    );

    -- Add explicit download policy
    CREATE POLICY "Allow CV download"
    ON storage.objects
    FOR SELECT
    TO public
    USING (
        bucket_id = 'recruitment' AND 
        (LOWER(name) LIKE 'cv/%.pdf')
    );
END $$;