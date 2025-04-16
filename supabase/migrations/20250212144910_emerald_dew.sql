/*
  # Add job applications table

  1. New Tables
    - `job_applications`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `position` (text)
      - `message` (text)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `job_applications` table
    - Add policy for public insert
    - Add policy for admin read
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  position text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'nouveau',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Permettre l'insertion publique
CREATE POLICY "Allow public insert" ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Permettre la lecture aux administrateurs authentifiés
CREATE POLICY "Allow admin read" ON job_applications
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');