import React from 'react';
import { Phone, Headphones, Settings, Users, ArrowRight, CheckCircle, PhoneCall, Network, Server } from 'lucide-react';
import HomeButton from './HomeButton';

const Telephony = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'contact';
  };

  const handleEligibilityClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'eligibilite';
  };

  const features = [
    {
      icon: Phone,
      title: "Téléphonie IP",
      description: "Réaliser des appels téléphoniques directement depuis un ordinateur, un téléphone IP dédié, ou même un smartphone équipé d'une application spécifique"
    },
    {
      icon: Network,
      title: "Réduction des coûts",
      description: "La téléphonie IP permet généralement de substantielles économies par rapport aux systèmes de téléphonie traditionnels"
    },
    {
      icon: Server,
      title: "Flexibilité et Mobilité",
      description: "Avec la téléphonie IP, vos collaborateurs ne sont plus liés à un poste de travail fixe. Ils peuvent recevoir ou passer des appels professionnels où qu'ils soient,pourvu qu'une connexion internet soit disponible. Cette flexibilité est un atout majeur pour soutenir les pratiques de travail modernes comme le télétravail"
    },
    {
      icon: Headphones,
      title: "Fonctionnalités Avancées",
      description: "La richesse des fonctionnalités est un autre facteur distinctif de la téléphonie IP.Des services comme la messagerie vocale, le transfert d'appel, la conférence téléphonique, ou encore l'affichage du numéro, sont souvent inclus par défaut"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      {/* Hero Section */}
      <div className="relative bg-kvb-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Téléphonie Voice over Internet Protocol
            </h1>
            <p className="text-xl mb-8 text-kvb-gray">
              Des solutions de communication modernes pour votre entreprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleEligibilityClick}
                className="bg-white text-kvb-primary px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors"
              >
                Tester votre éligibilité
              </button>
              <button 
                onClick={handleContactClick}
                className="border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-kvb-primary transition-colors"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Téléphonie Voice over Internet Protocol
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
              Pourquoi choisir nos solutions ?
            </h2>
            <div className="space-y-6">
              {[
                "Communication unifiée pour plus d'efficacité",
                "Solutions évolutives selon vos besoins",
                "Support technique dédié",
                "Installation et configuration professionnelles",
                "Formation des utilisateurs incluse"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
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
            Prêt à moderniser votre téléphonie ?
          </h2>
          <p className="text-xl mb-8 text-kvb-gray">
            Contactez-nous pour une étude personnalisée de vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleEligibilityClick}
              className="bg-white text-kvb-primary px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors"
            >
              Tester votre éligibilité
            </button>
            <button 
              onClick={handleContactClick}
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-kvb-primary transition-colors"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      <HomeButton />
    </div>
  );
};

export default Telephony;