import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import HomeButton from './HomeButton';

const AboutUs = () => {
  const menuItems = [
    { id: 'quiSommesNous', label: 'Qui sommes-nous ?' },
    { id: 'nosEngagements', label: 'Nos engagements' },
    { id: 'nosValeurs', label: 'Nos valeurs' },
    { id: 'nosPiliers', label: 'Nos piliers' },
    { id: 'nosPartenaires', label: 'Nos partenaires' }
  ];

  const sectionRefs = {
    quiSommesNous: useRef(null),
    nosEngagements: useRef(null),
    nosValeurs: useRef(null),
    nosPiliers: useRef(null),
    nosPartenaires: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const partners = [
    {
      imageUrl: "https://static.wixstatic.com/media/e14f68_32b46e3a810b4b989075853fc0e46812~mv2.jpg/v1/fill/w_532,h_154,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_20220202-185919_Samsung%20Internet.jpg",
      name: "Resoposte"
    },
    {
      imageUrl: "https://static.wixstatic.com/media/c2b770_5e7a2951efae49fe83ea9f98a4ed386c~mv2.png/v1/fill/w_478,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Capture%20d%E2%80%99%C3%A9cran%202022-01-19%20170734.png",
      name: "Grenke"
    },
    {
      imageUrl: "https://static.wixstatic.com/media/c2b770_f26f3daecf464afa9f4f1feef3c27dab~mv2.png/v1/crop/x_0,y_9,w_517,h_155/fill/w_452,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bis.png",
      name: "Canon"
    },
    {
      imageUrl: "https://static.wixstatic.com/media/e14f68_92e5c712f8aa4220a1e3ef0dfe881909~mv2.png/v1/fill/w_457,h_210,al_c,q_85,enc_avif,quality_auto/Capture%20d%E2%80%99%C3%A9cran%202022-02-03%20164436.png",
      name: "Eukles"
    },
    {
      imageUrl: "https://logos-marques.com/wp-content/uploads/2022/04/Sharp-logo.png",
      name: "Sharp"
    },
    {
      imageUrl: "https://logos-world.net/wp-content/uploads/2023/03/Toshiba-Logo-500x281.png",
      name: "Toshiba"
    },
    {
      imageUrl: "https://www.voicecarrier.com/wp-content/uploads/2021/03/yealink-logo-450x125.png",
      name: "Yealink"
    }
  ];

  return (
    <div className="min-h-screen bg-kvb-gray pt-20">
      {/* Breadcrumb */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <a href="/" className="text-gray-600 hover:text-kvb-primary transition-colors">Accueil</a>
            <ChevronRight size={16} className="mx-2 text-gray-600" />
            <span className="text-kvb-primary font-semibold">Notre Groupe</span>
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      <div className="container mx-auto py-8 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="sticky top-24">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="block px-4 py-2 rounded hover:bg-white text-gray-700 hover:text-kvb-primary transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-16">
          {/* Qui sommes-nous */}
          <section 
            ref={sectionRefs.quiSommesNous}
            id="quiSommesNous" 
            className="opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                    alt="KVB Conseil équipe" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4 text-kvb-primary">Qui sommes-nous ?</h2>
                  <p className="text-gray-600 leading-relaxed">
                    KVB Conseil entreprise spécialisée dans le domaine de la bureautique est composée
                    d'une équipe d'experts, d'ingénieurs et de techniciens informatique qui sont sans
                    cesse formés et certifiés pour vous garantir une entière satisfaction et un service
                    performant.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Avec KVB Conseil, c'est l'assurance d'avoir du matériel et un service sur-mesure
                    adapté à chacun de vos besoins.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Nos Engagements */}
          <section 
            ref={sectionRefs.nosEngagements}
            id="nosEngagements"
            className="opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-8 text-kvb-primary">NOS ENGAGEMENTS</h2>
              <div className="space-y-4">
                {[
                  "Un engagement 100% qualité basé sur la satisfaction client.",
                  "Une démarche éco-responsable.",
                  "Une transparence totale dans nos méthodes de travail.",
                  "Des process définis avec vous, adaptés à vos contraintes et vos spécialités.",
                  "Des équipes qualifiées et expérimentées, en support et en intervention."
                ].map((engagement, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-6 h-6 bg-kvb-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{engagement}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Nos Valeurs */}
          <section 
            ref={sectionRefs.nosValeurs}
            id="nosValeurs"
            className="opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                    alt="Équipe KVB Conseil" 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4 text-kvb-primary">NOS VALEURS</h2>
                  <p className="text-gray-600 mb-6">
                    KVB Conseil a pour but d'accompagner ses clients au quotidien et met à leur disposition une équipe de techniciens et de conseillers expérimentés afin d'apporter une réponse personnalisée au besoin et un service de proximité.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Une offre adaptée",
                      "Une politique d'innovation",
                      "Une amélioration constante de nos services",
                      "La proximité et l'expertise de nos collaborateurs",
                      "Le maintien du meilleur niveau de compétitivité"
                    ].map((value, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-kvb-primary" />
                        <span className="text-gray-700">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Nos Piliers */}
          <section 
            ref={sectionRefs.nosPiliers}
            id="nosPiliers"
            className="opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-8 text-kvb-primary">Nos Piliers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Pilier Économique",
                    description: "Notre engagement économique repose sur la qualité du service, l'équité des tarifs et la transparence envers nos clients, partenaires et investisseurs.",
                    details: [
                      "Satisfaire et fidéliser les clients",
                      "Assurer la qualité du service",
                      "Mettre en place une tarification équitable",
                      "Soutenir les fournisseurs locaux",
                      "Payer ses factures dans les délais",
                      "Faire preuve de transparence auprès des investisseurs"
                    ]
                  },
                  {
                    title: "Pilier Social",
                    description: "KVB Conseil : un lieu de vie, de respect et d'épanouissement pour tous ses membres.",
                    details: [
                      "Code de conduite basé sur l'intégrité",
                      "Bien-être au travail",
                      "Environnement respectueux et sécurisé",
                      "Épanouissement des collaborateurs",
                      "Bienveillance des managers",
                      "Intégrité de l'entreprise"
                    ]
                  },
                  {
                    title: "Pilier Environnemental",
                    description: "L'économie circulaire pour la protection de l'environnement.",
                    details: [
                      "Recyclage des consommables usagés",
                      "Limitation de la consommation de papier",
                      "Dématérialisation des documents",
                      "Gestion des déchets",
                      "Tri sélectif",
                      "Politique environnementale"
                    ]
                  }
                ].map((pilier, index) => (
                  <div key={index} className="group relative h-72 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                    <div className="absolute inset-0 p-6 flex flex-col justify-between transform transition-transform duration-500 group-hover:-translate-y-full">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-kvb-primary">{pilier.title}</h3>
                        <p className="text-gray-600">{pilier.description}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 bg-gradient-primary text-white transform transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                      <h3 className="text-xl font-semibold mb-4">{pilier.title}</h3>
                      <ul className="space-y-2">
                        {pilier.details.slice(0, 4).map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <ChevronRight size={16} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Nos Partenaires */}
          <section 
            ref={sectionRefs.nosPartenaires}
            id="nosPartenaires"
            className="opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-8 text-kvb-primary">Nos Partenaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {partners.map((partner, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center p-8 bg-white border border-gray-100 rounded-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      height: '200px',
                      width: '100%',
                    }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center bg-white">
                      <img
                        src={partner.imageUrl}
                        alt={partner.name}
                        className="max-h-[160px] max-w-[200px] w-auto h-auto object-contain transform hover:scale-105 transition-transform duration-300"
                        style={{
                          imageRendering: 'high-quality',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <HomeButton />

      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;