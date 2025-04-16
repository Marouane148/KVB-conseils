import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string | null;
  }>({
    type: null,
    message: null
  });

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus({
        type: 'error',
        message: 'Veuillez entrer une adresse email'
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        // Check for duplicate email error
        if (error.code === '23505') {
          setStatus({
            type: 'error',
            message: 'Cette adresse email est déjà inscrite à notre newsletter'
          });
        } else {
          throw error;
        }
        return;
      }

      setStatus({
        type: 'success',
        message: 'Merci de votre inscription à notre newsletter !'
      });
      setEmail('');

    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error);
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-kvb-dark to-black text-white pt-20 pb-10 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="group">
            <h3 className="text-xl font-bold mb-4 text-white">
              KVB Conseil
            </h3>
            <div className="space-y-4">
              <p className="flex items-center group-hover:translate-x-2 transition-transform">
                <MapPin size={16} className="mr-2 text-indigo-400" />
                <span className="text-gray-300">23 rue de la maison rouge<br />77185 Lognes</span>
              </p>
              <p className="flex items-center group-hover:translate-x-2 transition-transform">
                <Phone size={16} className="mr-2 text-indigo-400" />
                <span className="text-gray-300">01 87 62 31 64</span>
              </p>
              <p className="flex items-center group-hover:translate-x-2 transition-transform">
                <Mail size={16} className="mr-2 text-indigo-400" />
                <span className="text-gray-300">contact@kvb-conseil.fr</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Plan du site
            </h3>
            <ul className="space-y-2">
              {[
                { path: 'notre-groupe', label: 'Notre groupe' },
                { path: 'contact', label: 'Contact' }
              ].map((item, index) => (
                <li key={index} className="transform hover:translate-x-2 transition-transform">
                  <a 
                    href={`#${item.path}`}
                    onClick={(e) => handleNavigation(e, item.path)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Suivez-nous
            </h3>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, url: 'https://linkedin.com' },
                { icon: Twitter, url: 'https://twitter.com' },
                { icon: Facebook, url: 'https://facebook.com' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary p-2 rounded-lg transform hover:scale-110 transition-transform"
                >
                  <social.icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              Newsletter
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-white placeholder-gray-400 transition-all"
                />
                {status.message && (
                  <p className={`mt-2 text-sm ${
                    status.type === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {status.message}
                  </p>
                )}
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-primary text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">© 2024 KVB Conseil. Tous droits réservés.</p>
          <p className="text-gray-400 mt-2 mb-2">Mentions légales</p>
          <div className="mt-2 space-x-4">
  {[
    { path: 'https://www.kvb-conseil.fr/_files/ugd/c2b770_92642e5a212449aeb86acc0f8fe0a086.pdf', label: 'Présentation KVB CONSEIL' },
    { path: 'https://www.kvb-conseil.fr/_files/ugd/c2b770_4ed7f812177044e382eacc12d5a104fa.pdf', label: 'R.G.P.D' },
    { path: 'https://www.kvb-conseil.fr/_files/ugd/c2b770_3407f6a7cfe142b7ab64b4b2641dda87.pdf', label: 'Services Site' },
    { path: 'https://www.kvb-conseil.fr/_files/ugd/c2b770_49fee543cae64975a203b3219d0e6289.pdf', label: 'Utilisation Cookies' },
    { path: 'https://www.kvb-conseil.fr/_files/ugd/c2b770_197dd2a579074f1f92ae33308fd5c831.pdf', label: 'Propriété Intellectuelle' }
  ].map((item, index) => (
    <React.Fragment key={item.path}>
      {index > 0 && <span className="text-gray-600">|</span>}
      <a 
        href={item.path.startsWith('http') ? item.path : `#${item.path}`}
        onClick={item.path.startsWith('http') ? undefined : (e) => handleNavigation(e, item.path)}
        target={item.path.startsWith('http') ? "_blank" : undefined}
        rel={item.path.startsWith('http') ? "noopener noreferrer" : undefined}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {item.label}
      </a>
    </React.Fragment>
  ))}
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;