import React from 'react';
import { Wrench, Shield, Clock, Users, ArrowRight, CheckCircle, Settings, Laptop, Phone, Printer } from 'lucide-react';
import HomeButton from './HomeButton';

const Maintenance: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'contact';
  };

  const features = [
    {
      icon: Settings,
      title: "Maintenance préventive",
      description: "Interventions régulières pour prévenir les pannes"
    },
    {
      icon: Shield,
      title: "Support technique",
      description: "Assistance rapide et efficace"
    },
    {
      icon: Users,
      title: "Équipe dédiée",
      description: "Techniciens experts à votre service"
    }
  ];

  const expertise = [
    {
      icon: Laptop,
      title: "Informatique",
      description: "Maintenance des postes et serveurs"
    },
    {
      icon: Phone,
      title: "Téléphonie",
      description: "Support des systèmes de communication"
    },
    {
      icon: Printer,
      title: "Impression",
      description: "Entretien des équipements d'impression"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      {/* Hero Section */}
      <div className="relative bg-kvb-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-kvb-primary/90 to-kvb-secondary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service de Maintenance Intégré
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Une équipe technique dédiée pour assurer la fiabilité de vos équipements
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

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-kvb-primary">
              Service de Maintenance Intégré
            </h2>
            <p className="text-gray-600 mb-6">
              Nous vous offrons un service de maintenance intégré pour assurer la fiabilité et le bon fonctionnement de vos équipements. Notre équipe technique prend en charge l'entretien préventif et curatif de vos matériels, garantissant ainsi une utilisation optimale de vos machines.
            </p>
            <div className="border-l-4 border-kvb-primary pl-4 mb-6">
              <h3 className="text-xl font-semibold mb-2">Équipe Technique Dédiée</h3>
              <p className="text-gray-600">
                Nos équipes interviennent sur l'ensemble du territoire français. Nos techniciens, intégrés au sein de KVB Conseil, sont des experts dans leurs domaines respectifs (GED, informatique, impression, téléphonie). Ils suivent régulièrement des formations pour être à la pointe des dernières technologies et vous offrir un service toujours plus performant.
              </p>
            </div>
            <p className="text-gray-600 font-medium">
              Pour une maintenance efficace et un support technique de qualité, faites confiance à KVB Conseil.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-kvb-gray rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="text-kvb-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Expertise Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-center text-kvb-primary">
              Notre expertise technique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-kvb-gray rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-kvb-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
            Vous souhaitez mettre en place un contrat de maintenance ?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contactez-nous pour une étude personnalisée de vos besoins
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-white text-kvb-primary px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-colors"
          >
            Nous contacter
          </button>
        </div>
      </section>

      <HomeButton />
    </div>
  );
};

export default Maintenance;