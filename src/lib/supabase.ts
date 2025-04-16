import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase credentials are missing');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fonction pour obtenir l'URL publique d'un CV
export const getCvUrl = async (cvPath: string) => {
  try {
    const { data } = await supabase.storage
      .from('recruitment')
      .getPublicUrl(cvPath);
    
    if (!data.publicUrl) {
      throw new Error('Unable to get public URL');
    }
    
    return data.publicUrl;
  } catch (error) {
    console.error('Error getting CV URL:', error);
    throw error;
  }
};