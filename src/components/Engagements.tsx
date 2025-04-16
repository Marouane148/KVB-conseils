import React from 'react';
import { Shield, Users, Clock } from 'lucide-react';

const EngagementCard = ({ icon: Icon, title, description, image }) => (
  <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 bg-blue-100 rounded-xl transform rotate-6 transition-transform duration-300 group-hover:rotate-12" />
          <div className="absolute inset-0 bg-gradient-primary rounded-xl transform group-hover:rotate-6 transition-transform duration-300" />
          <div className="absolute inset-0 flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110">
            <Icon size={32} />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-kvb-primary transition-colors duration-300">{title}</h3>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Engagements = () => {
  const engagements = [
    {
      icon: Shield,
      title: "Nos Engagements",
      description: "Nous nous engageons à vous fournir des solutions fiables et performantes, avec un suivi rigoureux et des garanties étendues sur l'ensemble de nos services.",
      image: "https://img.freepik.com/photos-gratuite/assortiment-bureau-plat-tablette-ecran-vide_23-2148707960.jpg?t=st=1744807147~exp=1744810747~hmac=2fd6ba3c0bebd3dfeb2eaec36cb1005e061456fd101cd10367b1466f1662a733&w=1380"
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Une relation client privilégiée avec un accompagnement personnalisé. Nos équipes sont là pour vous et prêtes à répondre à vos besoins spécifiques.",
      image: "https://media.licdn.com/dms/image/v2/C4D12AQFrQzBm-vW5IQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1640119247175?e=1750291200&v=beta&t=15F6aGMXpiJHhdX9I3VND8AKdB9MKbx5bp6D0lotmGk"
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Une équipe spécialisée dans le traitement rapide de vos demandes, avec des délais d'intervention optimisés et un soutien technique disponible en permanence.",
      image: "https://cdn.create.vista.com/api/media/small/129939098/stock-photo-businessman-stressed-by-too-many-tasks"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-kvb-primary mb-4">Nos Engagements</h2>
          <p className="text-xl text-gray-600">Des valeurs fortes pour une relation de confiance</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {engagements.map((engagement, index) => (
            <EngagementCard key={index} {...engagement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;