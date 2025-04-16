import React from 'react';
import { Printer, Leaf, Shield, Clock, Users, ArrowRight, CheckCircle, Settings, FileText } from 'lucide-react';
import HomeButton from './HomeButton';

const OfficeEquipment = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'contact';
  };

  const features = [
    {
      icon: Printer,
      title: "Solutions d'impression",
      description: "Imprimantes et multifonctions adaptées à vos besoins"
    },
    {
      icon: Leaf,
      title: "Éco-responsable",
      description: "Solutions respectueuses de l'environnement"
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Service technique dédié et réactif"
    },
    {
      icon: FileText,
      title: "Gestion documentaire",
      description: "Optimisation de vos flux documentaires"
    }
  ];

  const benefits = [
    "Réduction des coûts d'impression",
    "Maintenance préventive incluse",
    "Support technique dédié",
    "Solutions écologiques",
    "Gestion optimisée des consommables",
    "Sécurité des documents",
    "Suivi des impressions",
    "Évolutivité des solutions"
  ];

  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      {/* Hero Section */}
      <div className="relative bg-kvb-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-kvb-primary/90 to-kvb-secondary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions d'Impression
            </h1>
            <p className="text-xl mb-8 text-kvb-gray">
              Des solutions d'impression professionnelles adaptées à vos besoins
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-white text-kvb-primary px-8 py-3 rounded-full text-lg flex items-center hover:bg-opacity-90 transition-colors group"
            >
              Demander un devis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Solutions d'Impression
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-kvb-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-kvb-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
              <p className="text-gray-600">Protection de vos documents sensibles</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-kvb-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-kvb-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Réactivité</h3>
              <p className="text-gray-600">Support technique rapide et efficace</p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-kvb-gray rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-kvb-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accompagnement</h3>
              <p className="text-gray-600">Formation et suivi personnalisés</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kvb-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Optimisez votre environnement d'impression
          </h2>
          <p className="text-xl mb-8 text-kvb-gray">
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

export default OfficeEquipment;