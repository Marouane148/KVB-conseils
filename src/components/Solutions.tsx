import React from 'react';
import { FileDigit, Phone, Monitor, Printer, Building2, ChevronRight } from 'lucide-react';

const SolutionCard = ({ icon: Icon, title, description, link, image }) => (
  <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6">
      <div className="relative w-16 h-16 -mt-16 mb-4">
        <div className="absolute inset-0 bg-blue-100 rounded-xl transform rotate-6 transition-transform duration-300 group-hover:rotate-12" />
        <div className="absolute inset-0 bg-gradient-primary rounded-xl transform group-hover:rotate-6 transition-transform duration-300" />
        <div className="absolute inset-0 flex items-center justify-center text-white transform transition-all duration-300 group-hover:scale-110">
          <Icon size={32} />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link} 
        className="inline-flex items-center text-kvb-primary hover:text-kvb-secondary font-medium transition-colors duration-300 group-hover:translate-x-2"
      >
        En savoir plus
        <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

const Solutions = () => {
  const solutions = [
    {
      icon: Printer,
      title: "Solutions d'Impression",
      description: "Solutions d'impression sur mesure",
      link: "#bureautique",
      image: "https://th.bing.com/th/id/R.c51157ba4d350f2df8901aec6253c58e?rik=8nrU8CAKJEBApg&pid=ImgRaw&r=0"
    },
    {
      icon: Phone,
      title: "Téléphonie IP",
      description: "Solutions de communication professionnelle",
      link: "#telephonie",
      image: "https://www.flexcom.ca/ressources/images/e67e6c276c34.jpg"
    },
    {
      icon: Building2,
      title: "Infogérance",
      description: "L'infogérance consiste à confier la gestion de tout ou partie de votre infrastructure informatique à un prestataire spécialisé",
      link: "#informatique",
      image: "https://th.bing.com/th/id/OIP.-ETIkfTtQ9bYNiN4G770lgHaEK?rs=1&pid=ImgDetMain"
    },
    {
      icon: FileDigit,
      title: "Gestion Electronique des Documents",
      description: "Solutions de gestion électronique des documents",
      link: "#ged",
      image: "https://www.bsv.fr/wp-content/uploads/2021/11/la-GED.jpg"
    },
    {
      icon: Monitor,
      title: "Écran Interactif et Affichage Dynamique",
      description: "Digitaliser votre communication",
      link: "#affichage-dynamique",
      image: "https://th.bing.com/th/id/R.0a17538796e94c2aedd1db0cfc829dbe?rik=hn7XUEFrVWf4%2bA&riu=http%3a%2f%2fwww.themeetingmagazines.com%2fwp-content%2fuploads%2f2020%2f02%2fCIT-2020-03March-Feat3-Meeting-Room-Future-860x418.jpg&ehk=1tGlQQvfWQKEg4%2fWUNTmJh9%2fbd80qPA7dpSPOcolVQY%3d&risl=&pid=ImgRaw&r=0"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-kvb-primary mb-12">Nos Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;