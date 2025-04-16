/*
  # Create newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `status` (text, default 'active')
  
  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for public inserts
    - Add policy for authenticated users to read all subscribers
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'active'
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Permettre l'insertion publique
CREATE POLICY "Allow public insert" ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Permettre la lecture aux administrateurs authentifiés
CREATE POLICY "Allow authenticated read" ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);