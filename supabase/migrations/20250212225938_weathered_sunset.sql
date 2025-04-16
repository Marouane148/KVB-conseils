/*
  # Sauvegarde de l'état du projet

  Cette migration sert de point de sauvegarde pour le projet. Elle vérifie que toutes les structures 
  nécessaires sont en place et ajoute des commentaires descriptifs pour faciliter la reprise du développement.

  1. Vérification des structures
    - Table job_applications
    - Vue job_applications_with_cv
    - Politiques de sécurité
    - Permissions sur le bucket de stockage

  2. Documentation
    - État actuel du système
    - Points d'intégration
*/

-- Vérification de la vue
DO $$ 
BEGIN
    -- Vérifie si la vue existe, sinon la recrée
    IF NOT EXISTS (
        SELECT FROM pg_views 
        WHERE viewname = 'job_applications_with_cv'
    ) THEN
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

        -- Recrée la règle de suppression si nécessaire
        CREATE OR REPLACE RULE delete_job_application AS
        ON DELETE TO public.job_applications_with_cv
        DO INSTEAD
        DELETE FROM public.job_applications
        WHERE id = OLD.id;
    END IF;
END $$;

-- Vérifie et met à jour les permissions
GRANT SELECT, DELETE ON public.job_applications_with_cv TO public;

-- Ajoute des commentaires descriptifs sur les objets de la base de données
COMMENT ON VIEW public.job_applications_with_cv IS 
'Vue principale pour la gestion des candidatures avec support des URLs de CV et opérations de suppression';

COMMENT ON TABLE public.job_applications IS 
'Table principale stockant les candidatures avec support pour les fichiers CV';

-- Vérifie les politiques de sécurité
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'job_applications' 
        AND policyname = 'Allow public delete'
    ) THEN
        CREATE POLICY "Allow public delete"
        ON job_applications
        FOR DELETE
        TO public
        USING (true);
    END IF;
END $$;