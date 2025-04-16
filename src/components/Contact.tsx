import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink, Car, Train, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import HomeButton from './HomeButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({
    type: null,
    message: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const address = "23 rue de la maison rouge, 77185 Lognes";
  const coordinates = "48.837063,2.631136";

  const getDirectionsUrl = (mode: 'driving' | 'transit' | 'walking') => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}&travelmode=${mode}`;
  };

  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-kvb-gray">Nous sommes à votre écoute pour répondre à vos besoins</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 order-2 lg:order-1">
            <h2 className="text-2xl font-semibold mb-6 text-kvb-primary">Envoyez-nous un message</h2>
            
            {/* Status Messages */}
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-700 border border-green-200'
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kvb-primary focus:border-transparent outline-none transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kvb-primary focus:border-transparent outline-none transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre téléphone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kvb-primary focus:border-transparent outline-none transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kvb-primary focus:border-transparent outline-none transition-all duration-300 resize-none"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-primary text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <Send size={20} />
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6 text-kvb-primary">Nos Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-kvb-gray text-kvb-primary rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Adresse</h3>
                    <p className="text-gray-600">23 rue de la maison rouge<br />77185 Lognes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-kvb-gray text-kvb-primary rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Téléphone</h3>
                    <p className="text-gray-600">01 87 62 31 64</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-kvb-gray text-kvb-primary rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-gray-600">contact@kvb-conseil.fr</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="relative overflow-hidden rounded-lg">
                <div className="bg-kvb-gray p-6 md:p-8 rounded-lg">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-4 text-kvb-primary" />
                    <h3 className="text-xl font-semibold mb-2">Notre localisation</h3>
                    <p className="text-gray-600 mb-6">23 rue de la maison rouge, 77185 Lognes</p>
                    
                    {/* Directions Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <a
                        href={getDirectionsUrl('driving')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white text-kvb-primary border-2 border-kvb-primary px-4 py-2 rounded-lg hover:bg-kvb-gray transition-colors"
                      >
                        <Car size={20} />
                        <span>En voiture</span>
                      </a>
                      <a
                        href={getDirectionsUrl('transit')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white text-kvb-primary border-2 border-kvb-primary px-4 py-2 rounded-lg hover:bg-kvb-gray transition-colors"
                      >
                        <Train size={20} />
                        <span>En transport</span>
                      </a>
                      <a
                        href={getDirectionsUrl('walking')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white text-kvb-primary border-2 border-kvb-primary px-4 py-2 rounded-lg hover:bg-kvb-gray transition-colors"
                      >
                        <User size={20} />
                        <span>À pied</span>
                      </a>
                    </div>

                    <a
                      href={`https://www.google.com/maps/place/${encodeURIComponent(address)}/@${coordinates},17z`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Voir sur Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeButton />
    </div>
  );
};

export default Contact;