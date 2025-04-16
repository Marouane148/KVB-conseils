import React from 'react';

const Partners = () => {
  const partners = [
    {
      id: 1,
      imageUrl: "https://logos-world.net/wp-content/uploads/2023/03/Toshiba-Logo-500x281.png",
      name: "Toshiba"
    },
    {
      id: 2,
      imageUrl: "https://static.wixstatic.com/media/e14f68_32b46e3a810b4b989075853fc0e46812~mv2.jpg/v1/fill/w_532,h_154,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot_20220202-185919_Samsung%20Internet.jpg",
      name: "Resoposte"
    },
    {
      id: 3,
      imageUrl: "https://static.wixstatic.com/media/c2b770_5e7a2951efae49fe83ea9f98a4ed386c~mv2.png/v1/fill/w_478,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Capture%20d%E2%80%99%C3%A9cran%202022-01-19%20170734.png",
      name: "Grenke"
    },
    {
      id: 4,
      imageUrl: "https://static.wixstatic.com/media/c2b770_f26f3daecf464afa9f4f1feef3c27dab~mv2.png/v1/crop/x_0,y_9,w_517,h_155/fill/w_452,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bis.png",
      name: "Canon"
    },
    {
      id: 5,
      imageUrl: "https://static.wixstatic.com/media/e14f68_92e5c712f8aa4220a1e3ef0dfe881909~mv2.png/v1/fill/w_457,h_210,al_c,q_85,enc_avif,quality_auto/Capture%20d%E2%80%99%C3%A9cran%202022-02-03%20164436.png",
      name: "Eukles"
    },
    {
      id: 6,
      imageUrl: "https://logos-marques.com/wp-content/uploads/2022/04/Sharp-logo.png",
      name: "Sharp"
    },
    {
      id: 7,
      imageUrl: "https://www.voicecarrier.com/wp-content/uploads/2021/03/yealink-logo-450x125.png",
      name: "Yealink"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Partenaires</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map(partner => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-8 bg-white border border-gray-100 rounded-lg hover:shadow-xl transition-all duration-300"
              style={{
                height: '200px',
                width: '100%',
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center bg-white">
                <img
                  src={partner.imageUrl}
                  alt={`Logo ${partner.name}`}
                  className="max-h-[160px] max-w-[200px] w-auto h-auto object-contain transform hover:scale-105 transition-transform duration-300"
                  style={{
                    imageRendering: 'high-quality',
                  }}
                  onError={(e) => {
                    console.error(`Error loading image for ${partner.name}:`, e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;