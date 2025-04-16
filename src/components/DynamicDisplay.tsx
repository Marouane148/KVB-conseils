import React from 'react';
import { Monitor, Layout, Palette, ArrowRight, CheckCircle, Presentation, Settings, Video } from 'lucide-react';
import HomeButton from './HomeButton';

const DynamicDisplay = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'contact';
  };

  const features = [
    {
      icon: Monitor,
      title: "Écrans professionnels",
      description: "Solutions d'affichage haute performance"
    },
    {
      icon: Layout,
      title: "Gestion de contenu",
      description: "Interface intuitive de pilotage"
    },
    {
      icon: Video,
      title: "Diffusion multimédia",
      description: "Support de tous types de contenus"
    },
    {
      icon: Settings,
      title: "Personnalisation",
      description: "Solutions sur mesure adaptées"
    }
  ];

  const benefits = [
    "Communication dynamique et attractive",
    "Mise à jour en temps réel",
    "Gestion centralisée du contenu",
    "Planification des diffusions",
    "Intégration multimédia",
    "Support technique dédié",
    "Installation professionnelle",
    "Formation incluse"
  ];

  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      {/* Hero Section */}
      <div className="relative bg-kvb-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-kvb-primary/90 to-kvb-secondary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Écran Interactif et Affichage Dynamique
            </h1>
            <p className="text-xl mb-8 text-kvb-gray">
              Digitaliser votre communication
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-white text-kvb-primary px-8 py-3 rounded-full text-lg flex items-center hover:bg-opacity-90 transition-colors group"
            >
              Demander une démo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Solutions d'Affichage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-kvb-gray rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="text-kvb-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Les avantages de l'affichage dynamique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-kvb-primary flex-shrink-0" size={24} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kvb-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à moderniser votre communication ?
          </h2>
          <p className="text-xl mb-8 text-kvb-gray">
            Contactez-nous pour une démonstration personnalisée
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-white text-kvb-primary px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors"
          >
            Demander une démo
          </button>
        </div>
      </section>

      <HomeButton />
    </div>
  );
};

export default DynamicDisplay;