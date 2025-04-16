/*
  # Configuration des accès administrateur

  1. Nouvelles Politiques
    - Ajout de politiques pour permettre aux administrateurs de lire les données
    - Configuration des rôles administrateur

  2. Sécurité
    - Maintien de la sécurité des données
    - Accès limité aux administrateurs authentifiés
*/

-- Création d'un rôle administrateur personnalisé
CREATE TYPE user_role AS ENUM ('admin', 'user');

-- Ajout d'une colonne role à la table auth.users
ALTER TABLE auth.users ADD COLUMN IF NOT EXISTS role user_role DEFAULT 'user';

-- Mise à jour des politiques pour les messages de contact
DROP POLICY IF EXISTS "Allow admin read contact_messages" ON contact_messages;
CREATE POLICY "Allow admin read contact_messages" ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Mise à jour des politiques pour les abonnés newsletter
DROP POLICY IF EXISTS "Allow admin read newsletter_subscribers" ON newsletter_subscribers;
CREATE POLICY "Allow admin read newsletter_subscribers" ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Fonction pour promouvoir un utilisateur en admin
CREATE OR REPLACE FUNCTION promote_to_admin(user_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE auth.users
  SET role = 'admin'
  WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;