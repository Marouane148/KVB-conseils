import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Engagements from './components/Engagements';
import Solutions from './components/Solutions';
import Services from './components/Services';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import GED from './components/GED';
import Telephony from './components/Telephony';
import EligibilityTest from './components/EligibilityTest';
import IT from './components/IT';
import OfficeEquipment from './components/OfficeEquipment';
import DynamicDisplay from './components/DynamicDisplay';
import AuditConsulting from './components/AuditConsulting';
import Financing from './components/Financing';
import Maintenance from './components/Maintenance';
import Recruitment from './components/Recruitment';
import Presentation from './components/Presentation';

function App() {
  const [currentHash, setCurrentHash] = React.useState(window.location.hash.slice(1));

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      setCurrentHash(newHash);
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentHash) {
      case 'notre-groupe':
        return <AboutUs />;
      case 'contact':
        return <Contact />;
      case 'recrutement':
        return <Recruitment />;
      case 'ged':
        return <GED />;
      case 'telephonie':
        return <Telephony />;
      case 'eligibilite':
        return <EligibilityTest />;
      case 'informatique':
        return <IT />;
      case 'bureautique':
        return <OfficeEquipment />;
      case 'affichage-dynamique':
        return <DynamicDisplay />;
      case 'audit-conseils':
        return <AuditConsulting />;
      case 'financement':
        return <Financing />;
      case 'sav-maintenance':
        return <Maintenance />;
      case 'presentation':
        return <Presentation />;
      default:
        return (
          <main>
            <Hero />
            <Engagements />
            <Solutions />
            <Services />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;