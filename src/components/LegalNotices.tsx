import React from 'react';
import HomeButton from './HomeButton';
import { FileText, Shield, Download, BookOpen, Cookie, Copyright } from 'lucide-react';
import { jsPDF } from 'jspdf';

const LegalNotices = () => {
  const generatePresentationPDF = () => {
    const doc = new jsPDF();
    
    // Ajout du logo
    const logoWidth = 50;
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.addImage(
      "https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png",
      "PNG",
      (pageWidth - logoWidth) / 2,
      10,
      logoWidth,
      logoWidth * 0.75
    );

    // Titre
    doc.setFontSize(18);
    doc.text("Présentation KVB CONSEIL", pageWidth / 2, 70, { align: "center" });

    // Contenu
    doc.setFontSize(12);
    let y = 90;
    const leftMargin = 20;
    const lineHeight = 7;

    const addWrappedText = (text, y) => {
      const lines = doc.splitTextToSize(text, pageWidth - 40);
      doc.text(lines, leftMargin, y);
      return y + (lines.length * lineHeight);
    };

    y = addWrappedText("1. Présentation du site :", y);
    y = addWrappedText("Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site KVB CONSEIL les informations suivantes :", y + 5);

    y = addWrappedText("Informations légales :", y + 10);
    const infos = [
      "Statut du propriétaire : Société",
      "Préfixe : SASU",
      "Nom de la Société : KVB CONSEIL",
      "Adresse : 14 avenue Joffre 93220 GAGNY",
      "Tél : 06.10.03.10.72",
      "Au Capital de : 2 000 €",
      "SIRET : 901 364 273 00070",
      "R.C.S. : BOBIGNY 901 364 273",
      "CODE APE : 4666Z",
      "Numéro TVA intracommunautaire : FR66 901364273"
    ];

    infos.forEach(info => {
      doc.text(info, leftMargin, y);
      y += lineHeight;
    });

    y += 5;
    const contacts = [
      "Le Créateur du site est : KVB CONSEIL",
      "Le Responsable de la publication est : VAZ BECA Antony",
      "Contact : contact@kvb-conseil.fr",
      "Le responsable de la publication est une personne physique",
      "Webmaster : KVB CONSEIL",
      "Contact Webmaster : contact@kvb-conseil.fr",
      "L'hébergeur du site est : Wix Oline Platform 1 Grant's Row Dublin 2 D02HX96 Ireland"
    ];

    contacts.forEach(contact => {
      doc.text(contact, leftMargin, y);
      y += lineHeight;
    });

    doc.save("presentation-kvb-conseil.pdf");
  };

  const generateRGPDPDF = () => {
    const doc = new jsPDF();
    
    // Ajout du logo
    const logoWidth = 50;
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.addImage(
      "https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png",
      "PNG",
      (pageWidth - logoWidth) / 2,
      10,
      logoWidth,
      logoWidth * 0.75
    );

    // Titre
    doc.setFontSize(18);
    doc.text("Protection des données personnelles (RGPD)", pageWidth / 2, 70, { align: "center" });

    // Contenu
    doc.setFontSize(12);
    let y = 90;
    const leftMargin = 20;
    const lineHeight = 7;

    const addWrappedText = (text, y) => {
      const lines = doc.splitTextToSize(text, pageWidth - 40);
      doc.text(lines, leftMargin, y);
      return y + (lines.length * lineHeight);
    };

    y = addWrappedText("5. Protection des biens et des personnes – gestion des données personnelles :", y);
    
    const paragraphs = [
      "Utilisateur : Internaute se connectant, utilisant le site susnommé : kvb-conseil.fr",
      "En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.",
      "Sur le site kvb-conseil.fr, le propriétaire du site ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site kvb-conseil.fr. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site kvb-conseil.fr à l'obligation ou non de fournir ces informations.",
      "Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles le concernant. Pour l'exercer, adressez votre demande à kvb-conseil.fr par email : contact@kvb-conseil.fr ou en effectuant sa demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.",
      "Aucune information personnelle de l'utilisateur du site kvb-conseil.fr n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat du site kvb-conseil.fr à son propriétaire et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site kvb-conseil.fr",
      "Le site kvb-conseil.fr est en conformité avec le RGPD.",
      "Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données."
    ];

    paragraphs.forEach(text => {
      y = addWrappedText(text, y + 5);
    });

    doc.save("rgpd-kvb-conseil.pdf");
  };

  const generateServicesPDF = () => {
    const doc = new jsPDF();
    
    // Ajout du logo
    const logoWidth = 50;
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.addImage(
      "https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png",
      "PNG",
      (pageWidth - logoWidth) / 2,
      10,
      logoWidth,
      logoWidth * 0.75
    );

    // Titre
    doc.setFontSize(18);
    doc.text("Services du Site", pageWidth / 2, 70, { align: "center" });

    // Contenu
    doc.setFontSize(12);
    let y = 90;
    const leftMargin = 20;
    const lineHeight = 7;

    const addWrappedText = (text, y) => {
      const lines = doc.splitTextToSize(text, pageWidth - 40);
      doc.text(lines, leftMargin, y);
      return y + (lines.length * lineHeight);
    };

    y = addWrappedText("Description des services fournis :", y);
    
    const paragraphs = [
      "Le site kvb-conseil.fr a pour objet de fournir une information concernant l'ensemble des activités de la société.",
      "Le propriétaire du site s'efforce de fournir sur le site kvb-conseil.fr des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.",
      "Toutes les informations proposées sur le site kvb-conseil.fr sont données à titre indicatif, sont non exhaustives, et sont susceptibles d'évoluer. Elles sont données sous réserve de modifications ayant été apportées depuis leur mise en ligne."
    ];

    paragraphs.forEach(text => {
      y = addWrappedText(text, y + 5);
    });

    doc.save("services-kvb-conseil.pdf");
  };

  const generateCookiesPDF = () => {
    const doc = new jsPDF();
    
    // Ajout du logo
    const logoWidth = 50;
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.addImage(
      "https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png",
      "PNG",
      (pageWidth - logoWidth) / 2,
      10,
      logoWidth,
      logoWidth * 0.75
    );

    // Titre
    doc.setFontSize(18);
    doc.text("Liens hypertextes et cookies", pageWidth / 2, 70, { align: "center" });

    // Contenu
    doc.setFontSize(12);
    let y = 90;
    const leftMargin = 20;
    const lineHeight = 7;

    const addWrappedText = (text, y) => {
      const lines = doc.splitTextToSize(text, pageWidth - 40);
      doc.text(lines, leftMargin, y);
      return y + (lines.length * lineHeight);
    };

    y = addWrappedText("4. Liens hypertextes et cookies :", y);
    
    const paragraphs = [
      "L'utilisateur est informé que lors de ses visites sur le site kvb-conseil.fr, un ou des cookies sont susceptible de s'installer automatiquement sur son ordinateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.",
      "Le paramétrage du logiciel de navigation permet d'informer de la présence de cookie et éventuellement, de refuser de la manière décrite à l'adresse suivante : www.cnil.fr",
      "Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l'installation des cookies :",
      "Sous Internet Explorer : onglet outil / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.",
      "Sous Netscape : onglet édition / préférences. Cliquez sur Avancées et choisissez Désactiver les cookies. Validez sur Ok."
    ];

    paragraphs.forEach(text => {
      y = addWrappedText(text, y + 5);
    });

    doc.save("cookies-kvb-conseil.pdf");
  };

  const generateIntellectualPropertyPDF = () => {
    const doc = new jsPDF();
    
    // Ajout du logo
    const logoWidth = 50;
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.addImage(
      "https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png",
      "PNG",
      (pageWidth - logoWidth) / 2,
      10,
      logoWidth,
      logoWidth * 0.75
    );

    // Titre
    doc.setFontSize(18);
    doc.text("Propriété intellectuelle", pageWidth / 2, 70, { align: "center" });

    // Contenu
    doc.setFontSize(12);
    let y = 90;
    const leftMargin = 20;
    const lineHeight = 7;

    const addWrappedText = (text, y) => {
      const lines = doc.splitTextToSize(text, pageWidth - 40);
      doc.text(lines, leftMargin, y);
      return y + (lines.length * lineHeight);
    };

    y = addWrappedText("3. Propriété intellectuelle et contrefaçons :", y);
    
    const paragraphs = [
      "Le propriétaire du site est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels…",
      "Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable à l'email : contact@kvb-conseil.fr",
      "Toute exploitation non autorisée du site ou de l'un quelconque de ces éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle."
    ];

    paragraphs.forEach(text => {
      y = addWrappedText(text, y + 5);
    });

    doc.save("propriete-intellectuelle-kvb-conseil.pdf");
  };

  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Mentions Légales</h1>
          <p className="text-xl text-gray-200">Informations légales et réglementaires</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Présentation KVB CONSEIL */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png"
                alt="KVB Conseil Logo"
                className="h-24 w-auto mb-6"
              />
              <h2 className="text-2xl font-bold text-kvb-primary mb-4">Présentation KVB CONSEIL</h2>
              <p className="text-gray-600 mb-8">
                Informations légales et présentation de notre société
              </p>
              <button
                onClick={generatePresentationPDF}
                className="flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
              >
                <FileText size={20} />
                Télécharger la présentation
                <Download size={20} />
              </button>
            </div>
          </div>

          {/* Protection des données personnelles (RGPD) */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png"
                alt="KVB Conseil Logo"
                className="h-24 w-auto mb-6"
              />
              <h2 className="text-2xl font-bold text-kvb-primary mb-4">Protection des données personnelles (RGPD)</h2>
              <p className="text-gray-600 mb-8">
                Informations sur la protection de vos données personnelles
              </p>
              <button
                onClick={generateRGPDPDF}
                className="flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
              >
                <Shield size={20} />
                Télécharger la politique RGPD
                <Download size={20} />
              </button>
            </div>
          </div>

          {/* Services du Site */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png"
                alt="KVB Conseil Logo"
                className="h-24 w-auto mb-6"
              />
              <h2 className="text-2xl font-bold text-kvb-primary mb-4">Services du Site</h2>
              <p className="text-gray-600 mb-8">
                Description des services fournis sur notre site
              </p>
              <button
                onClick={generateServicesPDF}
                className="flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
              >
                <BookOpen size={20} />
                Télécharger la description
                <Download size={20} />
              </button>
            </div>
          </div>

          {/* Propriété Intellectuelle */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png"
                alt="KVB Conseil Logo"
                className="h-24 w-auto mb-6"
              />
              <h2 className="text-2xl font-bold text-kvb-primary mb-4">Propriété Intellectuelle</h2>
              <p className="text-gray-600 mb-8">
                Informations sur les droits de propriété intellectuelle
              </p>
              <button
                onClick={generateIntellectualPropertyPDF}
                className="flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
              >
                <Copyright size={20} />
                Télécharger la politique PI
                <Download size={20} />
              </button>
            </div>
          </div>

          {/* Cookies et Liens hypertextes */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png"
                alt="KVB Conseil Logo"
                className="h-24 w-auto mb-6"
              />
              <h2 className="text-2xl font-bold text-kvb-primary mb-4">Cookies et Liens hypertextes</h2>
              <p className="text-gray-600 mb-8">
                Informations sur l'utilisation des cookies
              </p>
              <button
                onClick={generateCookiesPDF}
                className="flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
              >
                <Cookie size={20} />
                Télécharger la politique cookies
                <Download size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <HomeButton />
    </div>
  );
};

export default LegalNotices;