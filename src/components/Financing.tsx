import React from 'react';
import { Calculator, FileText, Clock, Shield, ArrowRight, CheckCircle, Banknote, Briefcase } from 'lucide-react';
import HomeButton from './HomeButton';

const Financing = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'contact';
  };

  const solutions = [
    {
      icon: Calculator,
      title: "Location financière",
      description: "Solutions de financement flexibles"
    },
    {
      icon: Clock,
      title: "Crédit-bail",
      description: "Options d'achat avantageuses"
    },
    {
      icon: Banknote,
      title: "Location évolutive",
      description: "Adaptez votre matériel à vos besoins"
    },
    {
      icon: Shield,
      title: "Protection totale",
      description: "Garanties et assurances incluses"
    }
  ];

  const benefits = [
    "Préservation de votre trésorerie",
    "Déductions fiscales avantageuses",
    "Renouvellement régulier du matériel",
    "Budgets maîtrisés",
    "Solutions personnalisées",
    "Processus simplifié",
    "Accompagnement dédié",
    "Flexibilité maximale"
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-kvb-primary text-white py-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-kvb-primary/90 to-kvb-secondary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions de Financement
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Des options flexibles pour tous vos projets d'équipement
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-white text-kvb-primary px-8 py-3 rounded-full text-lg flex items-center hover:bg-opacity-90 transition-colors group"
            >
              Étudier vos options
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
                  Notre Partenaire Financier
                </h2>
                <p className="text-gray-600 mb-6">
                  En partenariat avec GRENKE, leader européen de la location financière, nous vous proposons des solutions de financement adaptées à vos besoins. Cette collaboration nous permet de vous offrir :
                </p>
                <ul className="space-y-4">
                  {[
                    "Des solutions de financement sur mesure",
                    "Une expertise reconnue dans le secteur",
                    "Des processus simplifiés et rapides",
                    "Une présence internationale",
                    "Des conditions avantageuses"
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
                    src="https://static.wixstatic.com/media/c2b770_5e7a2951efae49fe83ea9f98a4ed386c~mv2.png/v1/fill/w_478,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Capture%20d%E2%80%99%C3%A9cran%202022-01-19%20170734.png"
                    alt="GRENKE Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Solutions de Financement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <solution.icon className="text-kvb-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-kvb-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Besoin de financer vos projets ?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contactez-nous pour étudier les meilleures options
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

export default Financing;