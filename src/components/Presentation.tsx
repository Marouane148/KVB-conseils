import React from 'react';
import HomeButton from './HomeButton';

const Presentation = () => {
  return (
    <div className="min-h-screen pt-20 bg-kvb-gray">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://static.wixstatic.com/media/c2b770_a01e356b45f94df19ff1919256a6b2fa~mv2.png"
              alt="KVB Conseil Logo"
              className="h-16 w-16 object-contain"
            />
          </div>

          {/* Titre */}
          <h1 className="text-2xl font-bold text-kvb-primary mb-6">
            1. Présentation du site :
          </h1>

          {/* Introduction */}
          <p className="text-gray-700 mb-8">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 
            juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons 
            à la connaissance des utilisateurs et visiteurs du site KVB CONSEIL les informations 
            suivantes :
          </p>

          {/* Informations légales */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-kvb-primary mb-4">
              Informations légales :
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Statut du propriétaire : Société</li>
              <li>Préfixe : SASU</li>
              <li>Nom de la Société : KVB CONSEIL</li>
              <li>Adresse : 14 avenue Joffre 93220 GAGNY</li>
              <li>Tél : 06.10.03.10.72</li>
              <li>Au Capital de : 2 000 €</li>
              <li>SIRET : 901 364 273 00070</li>
              <li>R.C.S. : BOBIGNY 901 364 273</li>
              <li>CODE APE : 4666Z</li>
              <li>Numéro TVA intracommunautaire : FR66 901364273</li>
              <li>Adresse de courrier électronique : contact@kvb-conseil.fr</li>
            </ul>
          </div>

          {/* Informations de contact */}
          <div>
            <ul className="space-y-2 text-gray-700">
              <li>Le Créateur du site est : KVB CONSEIL</li>
              <li>Le Responsable de la publication est : VAZ BECA Antony</li>
              <li>Pour contacter le responsable de la publication : contact@kvb-conseil.fr</li>
              <li>Le responsable de la publication est une personne physique</li>
              <li>Le Webmaster est : KVB CONSEIL</li>
              <li>Contactez le Webmaster : contact@kvb-conseil.fr</li>
              <li>L'hébergeur du site est : Wix Oline Platform 1 Grant's Row Dublin 2 D02HX96 Ireland</li>
            </ul>
          </div>
        </div>
      </div>
      <HomeButton />
    </div>
  );
};

export default Presentation;