import React, { useState } from 'react';
import { Briefcase, Send, Upload, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import HomeButton from './HomeButton';

const Recruitment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });
  const [cv, setCv] = useState<File | null>(null);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({
    type: null,
    message: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf') {
        setCv(file);
        setStatus({ type: null, message: null });
      } else {
        setStatus({
          type: 'error',
          message: 'Veuillez sélectionner un fichier PDF'
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: null });

    try {
      let cvPath = null;

      if (cv) {
        const fileName = `cv/${Date.now()}-${cv.name}`;
        const { error: uploadError } = await supabase.storage
          .from('recruitment')
          .upload(fileName, cv);

        if (uploadError) throw uploadError;
        cvPath = fileName;
      }

      const { error } = await supabase
        .from('job_applications')
        .insert([{
          ...formData,
          cv_path: cvPath
        }]);

      if (error) throw error;

      setStatus({
        type: 'success',
        message: 'Votre candidature a été envoyée avec succès !'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
      });
      setCv(null);
      if (document.getElementById('cv-input')) {
        (document.getElementById('cv-input') as HTMLInputElement).value = '';
      }

    } catch (error) {
      console.error('Error submitting application:', error);
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi de votre candidature. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      {/* Hero Section */}
      <div className="relative bg-kvb-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-kvb-primary/90 to-kvb-secondary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez notre équipe
            </h1>
            <p className="text-xl text-gray-200">
              Découvrez nos opportunités de carrière et participez à notre croissance
            </p>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Formulaire de candidature</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kvb-primary focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kvb-primary focus:border-transparent"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kvb-primary focus:border-transparent"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Poste souhaité
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kvb-primary focus:border-transparent"
                >
                  <option value="">Sélectionnez un poste</option>
                  <option value="commercial">Commercial(e)</option>
                  <option value="technicien">Technicien(ne)</option>
                  <option value="developpeur">Développeur(se)</option>
                  <option value="support">Support client</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message de motivation
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kvb-primary focus:border-transparent"
                  placeholder="Présentez-vous et expliquez votre motivation"
                />
              </div>

              <div>
                <label htmlFor="cv-input" className="block text-sm font-medium text-gray-700 mb-1">
                  CV (PDF uniquement)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-kvb-primary transition-colors">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="cv-input"
                        className="relative cursor-pointer rounded-md font-medium text-kvb-primary hover:text-kvb-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-kvb-primary focus-within:ring-offset-2"
                      >
                        <span>Télécharger un fichier</span>
                        <input
                          id="cv-input"
                          name="cv"
                          type="file"
                          accept=".pdf"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">ou glisser-déposer</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF jusqu'à 10MB
                    </p>
                  </div>
                </div>
                {cv && (
                  <p className="mt-2 text-sm text-gray-600 flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {cv.name}
                  </p>
                )}
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-kvb-primary hover:bg-kvb-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kvb-primary ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Envoyer ma candidature
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <HomeButton />
    </div>
  );
};

export default Recruitment;