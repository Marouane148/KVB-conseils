/*
  # Update storage policies for CV access

  1. Changes
    - Make recruitment bucket public
    - Update storage policies for CV upload and access
    
  2. Security
    - Allow public read access to CVs
    - Maintain upload restrictions to PDF files only
*/

-- Update the recruitment bucket to be public
UPDATE storage.buckets
SET public = true
WHERE id = 'recruitment';

DO $$ 
BEGIN
    -- Drop policies if they exist
    IF EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE schemaname = 'storage' 
        AND tablename = 'objects' 
        AND policyname = 'Allow CV upload'
    ) THEN
        DROP POLICY "Allow CV upload" ON storage.objects;
    END IF;

    IF EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE schemaname = 'storage' 
        AND tablename = 'objects' 
        AND policyname = 'Allow public CV read'
    ) THEN
        DROP POLICY "Allow public CV read" ON storage.objects;
    END IF;

    -- Create new policies
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE schemaname = 'storage' 
        AND tablename = 'objects' 
        AND policyname = 'Allow CV upload'
    ) THEN
        CREATE POLICY "Allow CV upload"
        ON storage.objects
        FOR INSERT
        TO anon
        WITH CHECK (
            bucket_id = 'recruitment' AND 
            (LOWER(name) LIKE 'cv/%.pdf')
        );
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE schemaname = 'storage' 
        AND tablename = 'objects' 
        AND policyname = 'Allow public CV read'
    ) THEN
        CREATE POLICY "Allow public CV read"
        ON storage.objects
        FOR SELECT
        TO public
        USING (
            bucket_id = 'recruitment' AND 
            (LOWER(name) LIKE 'cv/%.pdf')
        );
    END IF;
END $$;