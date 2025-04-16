/*
  # Ajout d'une fonction pour générer l'URL du CV

  1. Changements
    - Ajout d'une fonction SQL qui génère l'URL publique du CV
    - Cette fonction peut être utilisée dans les requêtes SQL pour afficher l'URL directement dans la table
*/

-- Fonction pour générer l'URL publique d'un CV
CREATE OR REPLACE FUNCTION public.get_cv_url(cv_path text)
RETURNS text
LANGUAGE plpgsql
AS $$
BEGIN
  -- Construire l'URL complète en utilisant l'URL de stockage Supabase
  RETURN CASE 
    WHEN cv_path IS NOT NULL THEN 
      current_setting('app.settings.storage_public_url') || '/recruitment/' || cv_path
    ELSE NULL
  END;
END;
$$;

-- Ajouter l'URL de stockage aux paramètres de l'application
SELECT set_config(
  'app.settings.storage_public_url',
  'https://lrymawmmstuxjaofplie.supabase.co/storage/v1/object/public',
  false
);

-- Créer une vue pour afficher les candidatures avec l'URL du CV
CREATE OR REPLACE VIEW public.job_applications_with_cv AS
SELECT 
  ja.*,
  get_cv_url(cv_path) as cv_url
FROM 
  public.job_applications ja;

-- Accorder les permissions nécessaires sur la vue
GRANT SELECT ON public.job_applications_with_cv TO anon, authenticated;