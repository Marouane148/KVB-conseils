import React from 'react';
import { Search, FileText, Calculator, Users, ArrowRight, CheckCircle, Briefcase, LineChart } from 'lucide-react';
import HomeButton from './HomeButton';

const AuditConsulting = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'contact';
  };

  const services = [
    {
      icon: Search,
      title: "Audit technique",
      description: "Analyse approfondie de votre infrastructure"
    },
    {
      icon: Calculator,
      title: "Optimisation des coûts",
      description: "Solutions pour réduire vos dépenses"
    },
    {
      icon: LineChart,
      title: "Stratégie digitale",
      description: "Plan de transformation numérique"
    },
    {
      icon: Briefcase,
      title: "Accompagnement projet",
      description: "Suivi personnalisé de vos projets"
    }
  ];

  const benefits = [
    "Vision claire de votre situation actuelle",
    "Identification des axes d'amélioration",
    "Recommandations personnalisées",
    "Optimisation des processus",
    "Réduction des coûts",
    "Amélioration de la productivité",
    "Accompagnement sur mesure",
    "Expertise métier"
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-kvb-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-kvb-primary/90 to-kvb-secondary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Audit & Conseils
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Des solutions personnalisées pour optimiser vos performances
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Services de Conseil
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-kvb-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
              Les bénéfices de notre accompagnement
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
            Prêt à optimiser votre entreprise ?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contactez-nous pour un audit personnalisé
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

export default AuditConsulting;