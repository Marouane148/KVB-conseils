/*
  # Add delete capability to job applications

  1. Changes
    - Add delete policy for job applications table
    - Update view to include delete capability
*/

-- Drop existing view
DROP VIEW IF EXISTS public.job_applications_with_cv;

-- Create view with delete capability
CREATE OR REPLACE VIEW public.job_applications_with_cv AS
SELECT 
  id,
  name,
  email,
  phone,
  position,
  message,
  cv_path,
  status,
  created_at,
  CASE 
    WHEN cv_path IS NOT NULL THEN 
      'https://lrymawmmstuxjaofplie.supabase.co/storage/v1/object/public/recruitment/' || cv_path
    ELSE NULL
  END as cv_url
FROM 
  public.job_applications;

-- Make the view updatable for delete operations
CREATE OR REPLACE RULE delete_job_application AS
ON DELETE TO public.job_applications_with_cv
DO INSTEAD
DELETE FROM public.job_applications
WHERE id = OLD.id;

-- Add delete policy to the base table
DROP POLICY IF EXISTS "Allow public delete" ON job_applications;
CREATE POLICY "Allow public delete"
ON job_applications
FOR DELETE
TO public
USING (true);

-- Grant delete permission on the view
GRANT DELETE ON public.job_applications_with_cv TO public;