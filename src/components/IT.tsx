import React from 'react';
import { Monitor, Shield, Clock, Users, ArrowRight, CheckCircle, Server, Laptop, Wrench, Mail } from 'lucide-react';
import HomeButton from './HomeButton';

const IT = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'contact';
  };

  const features = [
    {
      icon: Monitor,
      title: "Supervision",
      description: "Surveillance proactive de votre parc"
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Protection contre les menaces"
    },
    {
      icon: Server,
      title: "Infrastructure",
      description: "Solutions serveur sur mesure"
    },
    {
      icon: Mail,
      title: "Dématérialisation du Courrier",
      description: "Gestion électronique de vos courriers"
    }
  ];

  const benefits = [
    "Continuité de service garantie",
    "Réduction des coûts informatiques",
    "Support technique réactif",
    "Solutions évolutives",
    "Sécurité renforcée",
    "Maintenance préventive",
    "Sauvegarde des données",
    "Conseil personnalisé"
  ];

  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      {/* Hero Section */}
      <div className="relative bg-kvb-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-kvb-primary/90 to-kvb-secondary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Infogérance informatique
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Des solutions informatiques complètes pour votre entreprise
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-white text-kvb-primary px-8 py-3 rounded-full text-lg flex items-center hover:bg-opacity-90 transition-colors group"
            >
              Demander un audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Services d'infogérance
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
              Les avantages de l'infogérance
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto bg-kvb-gray rounded-full flex items-center justify-center mb-6">
                <Laptop className="text-kvb-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Parc informatique</h3>
              <p className="text-gray-600">Gestion complète de votre infrastructure</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto bg-kvb-gray rounded-full flex items-center justify-center mb-6">
                <Server className="text-kvb-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Solutions Cloud</h3>
              <p className="text-gray-600">Hébergement et services cloud sécurisés</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 mx-auto bg-kvb-gray rounded-full flex items-center justify-center mb-6">
                <Shield className="text-kvb-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cybersécurité</h3>
              <p className="text-gray-600">Protection contre les cybermenaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kvb-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Besoin d'un expert informatique ?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contactez-nous pour une étude personnalisée de vos besoins
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-white text-kvb-primary px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors"
          >
            Demander un devis
          </button>
        </div>
      </section>

      <HomeButton />
    </div>
  );
};

export default IT;