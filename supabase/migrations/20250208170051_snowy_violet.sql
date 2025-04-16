/*
  # Création de la table des messages de contact

  1. Nouvelle Table
    - `contact_messages`
      - `id` (uuid, clé primaire)
      - `name` (text, nom de la personne)
      - `email` (text, email de contact)
      - `phone` (text, numéro de téléphone)
      - `message` (text, contenu du message)
      - `created_at` (timestamp, date de création)
      - `status` (text, statut du message)

  2. Sécurité
    - Active RLS sur la table
    - Ajoute une politique pour permettre l'insertion publique
    - Ajoute une politique pour permettre la lecture aux administrateurs
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'nouveau'
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre l'insertion publique
CREATE POLICY "Allow public insert" ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Politique pour permettre la lecture aux administrateurs authentifiés
CREATE POLICY "Allow admin read" ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'authenticated');