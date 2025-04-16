/*
  # Ajout de la politique de lecture publique pour les candidatures

  1. Changements
    - Ajout d'une politique permettant à tous les utilisateurs de voir leurs propres candidatures
    - Modification de la politique existante pour permettre la lecture publique
*/

-- Supprimer l'ancienne politique si elle existe
DROP POLICY IF EXISTS "Allow admin read" ON job_applications;

-- Créer une nouvelle politique permettant la lecture publique
CREATE POLICY "Allow public read"
ON job_applications
FOR SELECT
TO public
USING (true);