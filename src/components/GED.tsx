import React from 'react';
import { FileText, Shield, Clock, Users, ArrowRight, CheckCircle, Database, Cloud, Search } from 'lucide-react';
import HomeButton from './HomeButton';

const GED = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'contact';
  };

  const features = [
    {
      icon: FileText,
      title: "Dématérialisation",
      description: "Transformez vos documents papier en ressources numériques"
    },
    {
      icon: Database,
      title: "Archivage sécurisé",
      description: "Conservation longue durée de vos documents"
    },
    {
      icon: Search,
      title: "Recherche avancée",
      description: "Retrouvez vos documents en quelques clics"
    },
    {
      icon: Cloud,
      title: "Accès cloud",
      description: "Consultez vos documents où que vous soyez"
    }
  ];

  const benefits = [
    "Gain de temps et d'efficacité",
    "Réduction des coûts de gestion",
    "Sécurisation des données",
    "Amélioration de la collaboration",
    "Impact environnemental positif",
    "Conformité réglementaire",
    "Traçabilité complète",
    "Accès instantané aux documents"
  ];

  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      {/* Hero Section */}
      <div className="relative bg-gradient-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-kvb-primary/90 to-kvb-secondary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gestion Electronique des Documents
            </h1>
            <p className="text-xl mb-8 text-kvb-gray">
              Transformez votre gestion documentaire avec notre solution GED complète
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

      {/* Partner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-kvb-primary">
                  Notre Partenaire GED
                </h2>
                <p className="text-gray-600 mb-6">
                  En partenariat avec EUKLES, leader français des solutions de gestion électronique de documents, nous vous proposons des solutions GED innovantes et performantes. Cette collaboration nous permet de vous offrir :
                </p>
                <ul className="space-y-4">
                  {[
                    "Une plateforme GED cloud de dernière génération",
                    "Une solution 100% française et sécurisée",
                    "Un accompagnement sur mesure",
                    "Une conformité RGPD garantie",
                    "Une intégration avec vos outils existants"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-kvb-primary flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                  <img
                    src="https://static.wixstatic.com/media/e14f68_92e5c712f8aa4220a1e3ef0dfe881909~mv2.png/v1/fill/w_457,h_210,al_c,q_85,enc_avif,quality_auto/Capture%20d%E2%80%99%C3%A9cran%202022-02-03%20164436.png"
                    alt="EUKLES Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Fonctionnalités principales
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
              Les avantages de la GED
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
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à digitaliser votre entreprise ?
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

export default GED;