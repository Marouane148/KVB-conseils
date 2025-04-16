import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const handleDiscoverClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'notre-groupe';
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-float"
        style={{
          backgroundImage: 'url("https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png")',
          backgroundPosition: 'center 30%'
        }}
      >
        {/* Overlay gris foncé plus léger */}
        <div className="absolute inset-0 bg-gray-800/60" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20">
        <div className="max-w-4xl mx-auto">
          {/* Titre et sous-titre */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 drop-shadow-lg">
              KVB Conseil
            </h1>
            <p className="text-xl md:text-3xl text-gray-100 leading-relaxed drop-shadow-lg font-medium">
            Votre partenaire de confiance en toutes transparence
            </p>
          </div>

          {/* Bouton */}
          <button 
            onClick={handleDiscoverClick}
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-primary rounded-full transform hover:scale-105 transition-all duration-300 animate-pulse-shadow"
          >
            Découvrez notre groupe
            <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </button>
        </div>
      </div>

      {/* Effet de vague en bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="rgb(139, 92, 246)" 
            fillOpacity="0.02"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path 
            fill="rgb(139, 92, 246)" 
            fillOpacity="0.05"
            d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,208C672,213,768,171,864,149.3C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;