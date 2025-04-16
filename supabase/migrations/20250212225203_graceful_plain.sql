/*
  # Fix CV view implementation

  1. Changes
    - Create view for job applications with CV URLs
    - Grant necessary permissions
*/

-- Drop existing view if it exists
DROP VIEW IF EXISTS public.job_applications_with_cv;

-- Create view with hardcoded storage URL
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

-- Grant permissions on the view
GRANT SELECT ON public.job_applications_with_cv TO public;