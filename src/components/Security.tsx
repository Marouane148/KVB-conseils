import React from 'react';
import { Shield, Camera, Bell, Clock, Lock, Eye, FileCheck, Banknote, ArrowRight, CheckCircle } from 'lucide-react';
import HomeButton from './HomeButton';

const Security = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'contact';
  };

  const features = [
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: "Systèmes de surveillance HD"
    },
    {
      icon: Bell,
      title: "Alarme",
      description: "Solutions d'alarme connectées"
    },
    {
      icon: Lock,
      title: "Contrôle d'accès",
      description: "Gestion des accès sécurisée"
    },
    {
      icon: Eye,
      title: "Télésurveillance",
      description: "Surveillance 24/7"
    }
  ];

  const benefits = [
    "Protection optimale de vos locaux",
    "Surveillance à distance",
    "Alertes en temps réel",
    "Installation professionnelle",
    "Maintenance préventive",
    "Support technique dédié",
    "Solutions évolutives",
    "Conformité RGPD"
  ];

  const services = [
    {
      icon: FileCheck,
      title: "Audit de sécurité",
      description: "Évaluation complète de vos besoins"
    },
    {
      icon: Shield,
      title: "Installation",
      description: "Mise en place par des experts"
    },
    {
      icon: Clock,
      title: "Maintenance",
      description: "Suivi et entretien régulier"
    },
    {
      icon: Banknote,
      title: "Financement",
      description: "Solutions adaptées à votre budget"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      {/* Hero Section */}
      <div className="relative bg-kvb-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-kvb-primary/90 to-kvb-secondary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions de Sécurité
            </h1>
            <p className="text-xl mb-8 text-kvb-gray">
              Protection complète pour votre entreprise
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Solutions de Sécurité
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-kvb-gray p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Les avantages de nos solutions
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Notre Accompagnement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-kvb-gray rounded-xl">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-kvb-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kvb-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Sécurisez votre entreprise
          </h2>
          <p className="text-xl mb-8 text-kvb-gray">
            Contactez-nous pour un audit personnalisé de vos besoins
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-white text-kvb-primary px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors"
          >
            Demander un audit
          </button>
        </div>
      </section>

      <HomeButton />
    </div>
  );
};

export default Security;