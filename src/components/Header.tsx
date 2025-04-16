{/* Contenu précédent du fichier avec la correction de "INFOGERANCE" en "INFOGÉRANCE" */}
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, FileDigit, Phone, Monitor, Printer, Building2, Lightbulb, Calculator, Wrench } from 'lucide-react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const handleContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = 'contact';
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const solutions = [
    {
      icon: Printer,
      title: "Solutions d'Impression",
      description: "Solutions d'impression sur mesure",
      path: "bureautique"
    },
    {
      icon: Phone,
      title: "Téléphonie IP",
      description: "Solutions de communication professionnelle",
      path: "telephonie"
    },
    {
      icon: Building2,
      title: "INFOGÉRANCE",
      description: "L'infogérance consiste à confier la gestion de tout ou partie de votre infrastructure informatique à un prestataire spécialisé",
      path: "informatique"
    },
    {
      icon: FileDigit,
      title: "Gestion Electronique des Documents",
      description: "Solutions de gestion électronique des documents",
      path: "ged"
    },
    {
      icon: Monitor,
      title: "Écran Interactif et Affichage Dynamique",
      description: "Digitaliser votre communication",
      path: "affichage-dynamique"
    }
  ];

  const services = [
    {
      icon: Lightbulb,
      title: "Audit & Conseils",
      description: "Solutions personnalisées pour optimiser vos performances",
      path: "audit-conseils"
    },
    {
      icon: Calculator,
      title: "Financement",
      description: "Options flexibles pour tous vos projets",
      path: "financement"
    },
    {
      icon: Wrench,
      title: "SAV & Maintenance",
      description: "Support technique et maintenance préventive",
      path: "sav-maintenance"
    }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isSticky ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.location.reload();
            }}
            className="h-12 transform hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png"
              alt="KVB Conseil Logo"
              className="h-full w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#notre-groupe" 
              onClick={(e) => handleNavigation(e, 'notre-groupe')}
              className={`text-${isSticky ? 'gray-800' : 'white'} hover:text-kvb-primary transition-all duration-300 relative group py-2`}
            >
              Notre groupe
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-kvb-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center text-${isSticky ? 'gray-800' : 'white'} hover:text-kvb-primary transition-all duration-300 py-2`}
                onMouseEnter={() => setActiveSubmenu('solutions')}
                onClick={() => setActiveSubmenu(activeSubmenu === 'solutions' ? null : 'solutions')}
              >
                Nos solutions
                <ChevronDown size={16} className={`ml-1 transform transition-transform duration-300 ${
                  activeSubmenu === 'solutions' ? 'rotate-180' : ''
                }`} />
              </button>

              <div 
                className={`absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl transition-all duration-300 ${
                  activeSubmenu === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <div className="p-4 grid gap-2">
                  {solutions.map((solution, index) => (
                    <a
                      key={index}
                      href={`#${solution.path}`}
                      onClick={(e) => handleNavigation(e, solution.path)}
                      className="flex items-start gap-3 p-3 rounded-lg group transition-all duration-300 hover:bg-kvb-primary/5"
                    >
                      <div className="p-2 bg-gray-100 text-kvb-primary rounded-lg transition-all duration-300 group-hover:bg-kvb-primary group-hover:text-white">
                        <solution.icon size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{solution.title}</div>
                        <div className="text-sm text-gray-500">{solution.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center text-${isSticky ? 'gray-800' : 'white'} hover:text-kvb-primary transition-all duration-300 py-2`}
                onMouseEnter={() => setActiveSubmenu('services')}
                onClick={() => setActiveSubmenu(activeSubmenu === 'services' ? null : 'services')}
              >
                Nos services
                <ChevronDown size={16} className={`ml-1 transform transition-transform duration-300 ${
                  activeSubmenu === 'services' ? 'rotate-180' : ''
                }`} />
              </button>

              <div 
                className={`absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl transition-all duration-300 ${
                  activeSubmenu === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <div className="p-4 grid gap-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#${service.path}`}
                      onClick={(e) => handleNavigation(e, service.path)}
                      className="flex items-start gap-3 p-3 rounded-lg group transition-all duration-300 hover:bg-kvb-primary/5"
                    >
                      <div className="p-2 bg-gray-100 text-kvb-primary rounded-lg transition-all duration-300 group-hover:bg-kvb-primary group-hover:text-white">
                        <service.icon size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{service.title}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a 
              href="#recrutement" 
              onClick={(e) => handleNavigation(e, 'recrutement')}
              className={`text-${isSticky ? 'gray-800' : 'white'} hover:text-kvb-primary transition-all duration-300 relative group py-2`}
            >
              Recrutement
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-kvb-primary transition-all duration-300 group-hover:w-full"></span>
            </a>

            <button 
              onClick={handleContact}
              className="bg-gradient-primary text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contactez-nous
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className={isSticky ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isSticky ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="h-full overflow-y-auto pt-20">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Title */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-kvb-primary">KVB Conseil</h1>
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-6">
              <a 
                href="#notre-groupe" 
                onClick={(e) => handleNavigation(e, 'notre-groupe')}
                className="block text-lg font-medium text-gray-800 hover:text-kvb-primary transition-all duration-300 transform hover:translate-x-2"
              >
                Notre groupe
              </a>

              {/* Solutions Mobile Accordion */}
              <div className="space-y-3">
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === 'solutions-mobile' ? null : 'solutions-mobile')}
                  className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-800 hover:text-kvb-primary transition-all duration-300"
                >
                  <span>Nos solutions</span>
                  <ChevronDown 
                    size={20} 
                    className={`transform transition-transform duration-300 ${
                      activeSubmenu === 'solutions-mobile' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div className={`pl-4 space-y-4 transition-all duration-300 ${
                  activeSubmenu === 'solutions-mobile' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {solutions.map((solution, index) => (
                    <a
                      key={index}
                      href={`#${solution.path}`}
                      onClick={(e) => handleNavigation(e, solution.path)}
                      className="flex items-start gap-4 py-2 text-gray-600 hover:text-kvb-primary transition-all duration-300 transform hover:translate-x-2"
                    >
                      <solution.icon size={24} className="flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-base">{solution.title}</div>
                        <div className="text-sm text-gray-500">{solution.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Services Mobile Accordion */}
              <div className="space-y-3">
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === 'services-mobile' ? null : 'services-mobile')}
                  className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-800 hover:text-kvb-primary transition-all duration-300"
                >
                  <span>Nos services</span>
                  <ChevronDown 
                    size={20} 
                    className={`transform transition-transform duration-300 ${
                      activeSubmenu === 'services-mobile' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div className={`pl-4 space-y-4 transition-all duration-300 ${
                  activeSubmenu === 'services-mobile' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#${service.path}`}
                      onClick={(e) => handleNavigation(e, service.path)}
                      className="flex items-start gap-4 py-2 text-gray-600 hover:text-kvb-primary transition-all duration-300 transform hover:translate-x-2"
                    >
                      <service.icon size={24} className="flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-base">{service.title}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <a 
                href="#recrutement" 
                onClick={(e) => handleNavigation(e, 'recrutement')}
                className="block text-lg font-medium text-gray-800 hover:text-kvb-primary transition-all duration-300 transform hover:translate-x-2"
              >
                Recrutement
              </a>

              <button 
                onClick={handleContact}
                className="w-full bg-gradient-primary text-white px-6 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Contactez-nous
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;