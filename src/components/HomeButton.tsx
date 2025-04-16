import React from 'react';
import { Home } from 'lucide-react';

const HomeButton = () => {
  const handleHomeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  return (
    <button
      onClick={handleHomeClick}
      className="fixed bottom-8 right-8 z-50 bg-gradient-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
      aria-label="Retour à l'accueil"
    >
      <Home size={24} />
      <span className="hidden md:inline">Accueil</span>
    </button>
  );
};

export default HomeButton;