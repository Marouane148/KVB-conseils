import React from 'react';

const ToshibaLogo = () => {
  return (
    <div className="toshiba-logo-container">
      {/* Logo container with relative positioning */}
      <div 
        className="relative h-[120px] w-[400px]"
        style={{
          /* Custom properties for the Toshiba red color */
          '--toshiba-red': '#FF0000',
        }}
      >
        {/* Each letter is positioned absolutely for precise control */}
        <div 
          className="absolute inset-0 flex items-center justify-center tracking-[0.12em] text-[90px] font-extrabold" 
          style={{ 
            color: 'var(--toshiba-red)',
            fontFamily: 'Arial Black, Arial Bold, Arial, sans-serif',
            fontStretch: 'expanded',
            letterSpacing: '0.02em',
            transform: 'scaleX(1.1)',
          }}
        >
          TOSHIBA
        </div>
      </div>
    </div>
  );
};

export default ToshibaLogo;