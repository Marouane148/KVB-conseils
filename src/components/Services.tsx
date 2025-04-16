import React, { useState } from 'react';
import { Lightbulb, Calculator, Wrench, Search, FileText, Settings, Clock, Shield, Users, PenTool as Tool, AlertCircle } from 'lucide-react';

interface SubMenuItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServiceMenuItem {
  icon: React.ElementType;
  title: string;
  description: string;
  subItems: SubMenuItem[];
}

const ServiceNavigation = ({ services, activeService, setActiveService }) => {
  return (
    <nav className="bg-white rounded-lg shadow-lg p-4 mb-8 overflow-x-auto">
      <ul className="flex flex-nowrap md:flex-wrap gap-4 min-w-max md:min-w-0">
        {services.map((service, index) => (
          <li key={index} className="flex-none md:flex-1">
            <button
              onClick={() => setActiveService(index)}
              className={`w-full p-4 rounded-lg transition-all duration-300 flex items-center gap-3 whitespace-nowrap
                ${activeService === index 
                  ? 'bg-gradient-primary text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              <service.icon size={24} className="flex-shrink-0" />
              <span className="font-semibold">{service.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SubMenu = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden p-6"
        >
          <div className="relative w-12 h-12 mb-4">
            <div className="absolute inset-0 bg-blue-100 rounded-xl transform rotate-6 transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute inset-0 bg-gradient-primary rounded-xl transform group-hover:rotate-6 transition-transform duration-300" />
            <div className="absolute inset-0 flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110">
              <item.icon size={24} />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-kvb-primary transition-colors duration-300">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services: ServiceMenuItem[] = [
    {
      icon: Lightbulb,
      title: "AUDIT & CONSEILS",
      description: "Des solutions personnalisées pour optimiser vos performances",
      subItems: [
        {
          icon: Search,
          title: "Analyse détaillée de vos besoins",
          description: "Étude approfondie de votre infrastructure et de vos objectifs"
        },
        {
          icon: FileText,
          title: "Recommandations personnalisées",
          description: "Solutions sur mesure adaptées à votre contexte"
        },
        {
          icon: Settings,
          title: "Optimisation des solutions",
          description: "Amélioration continue de vos performances"
        }
      ]
    },
    {
      icon: Calculator,
      title: "FINANCEMENT",
      description: "Des solutions flexibles pour tous vos projets",
      subItems: [
        {
          icon: FileText,
          title: "Options de financement disponibles",
          description: "Large gamme de solutions financières adaptées"
        },
        {
          icon: Clock,
          title: "Plans de paiement flexibles",
          description: "Échéanciers personnalisés selon vos capacités"
        },
        {
          icon: Shield,
          title: "Solutions adaptées à votre budget",
          description: "Optimisation financière de vos investissements"
        }
      ]
    },
    {
      icon: Wrench,
      title: "SAV & MAINTENANCE",
      description: "Un support complet pour votre tranquillité",
      subItems: [
        {
          icon: Users,
          title: "Support technique dédié",
          description: "Équipe experte à votre service"
        },
        {
          icon: Tool,
          title: "Programmes de maintenance préventive",
          description: "Anticipation et prévention des incidents"
        },
        {
          icon: AlertCircle,
          title: "Interventions rapides",
          description: "Réactivité maximale en cas de besoin"
        },
        {
          icon: Shield,
          title: "Garantie et suivi",
          description: "Accompagnement complet et protection optimale"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-kvb-primary mb-4">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes et personnalisées pour répondre à tous vos besoins
          </p>
        </div>

        <ServiceNavigation 
          services={services} 
          activeService={activeService} 
          setActiveService={setActiveService} 
        />

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-kvb-primary mb-2">{services[activeService].title}</h3>
            <p className="text-gray-600">{services[activeService].description}</p>
          </div>

          <SubMenu 
            items={services[activeService].subItems} 
          />
        </div>
      </div>
    </section>
  );
};

export default Services;