import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div id="top-bar" className="bg-brand-orange text-white text-[11px] sm:text-xs font-semibold py-2 px-3 sm:px-6 relative z-50 border-b border-orange-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-center">
        {/* Left */}
        <div className="flex items-center gap-1.5 shrink-0">
          <i className="fa-solid fa-location-dot text-white/90"></i>
          <span>Pune, Maharashtra</span>
          <span className="hidden sm:inline opacity-70">|</span>
          <a className="hidden sm:inline hover:underline font-bold tracking-wide" href="tel:8793600635">
            <i className="fa-solid fa-phone-volume mr-1"></i>+91 87936 00635
          </a>
        </div>
        {/* Center */}
        <div className="text-white/95 font-medium tracking-wide text-center truncate max-w-md hidden md:block">
          <span className="inline-block w-2 h-2 rounded-full bg-white/80 mr-1.5 animate-pulse"></span>
          Transforming Spaces with Premium Painting Solutions
        </div>
        {/* Right Social Logos */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="text-white/80 text-[11px] hidden lg:inline">Connect with us:</span>
          <a
            className="w-6 h-6 rounded-full bg-white/20 hover:bg-white hover:text-brand-orange flex items-center justify-center transition-all duration-200"
            href="https://facebook.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Facebook"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook-f text-[11px]"></i>
          </a>
          <a
            className="w-6 h-6 rounded-full bg-white/20 hover:bg-white hover:text-brand-orange flex items-center justify-center transition-all duration-200"
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Instagram"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram text-[12px]"></i>
          </a>
          <a
            className="w-6 h-6 rounded-full bg-white/20 hover:bg-white hover:text-brand-orange flex items-center justify-center transition-all duration-200"
            href="https://wa.me/918793600635?text=Hi%20Soham%20Painting%20Services,%20I%20need%20a%20painting%20quote%20in%20Pune"
            rel="noopener noreferrer"
            target="_blank"
            title="WhatsApp"
            aria-label="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp text-[13px]"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
