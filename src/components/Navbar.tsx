import React from 'react';

interface NavbarProps {
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu }) => {
  return (
    <header id="main-header" className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <a className="flex items-center gap-2.5 group" href="#hero" id="header-logo">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center shadow-orange-sm text-white group-hover:scale-105 transition-transform duration-200">
              <i className="fa-solid fa-paint-roller text-lg sm:text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-xl tracking-tight text-slate-900 leading-none group-hover:text-brand-orange transition-colors">
                SOHAM<span className="text-brand-orange">.</span>
              </span>
              <span className="text-[9.5px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                Painting Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-xs xl:text-sm font-semibold text-slate-700 whitespace-nowrap" aria-label="Main Navigation">
            <a className="hover:text-brand-orange transition-colors py-2" href="#hero">
              Home
            </a>
            <a className="hover:text-brand-orange transition-colors py-2" href="#services">
              Services
            </a>
            <a className="hover:text-brand-orange transition-colors py-2" href="#about">
              About Us
            </a>
            <a className="hover:text-brand-orange transition-colors py-2" href="#process">
              How We Work
            </a>
            <a className="hover:text-brand-orange transition-colors py-2" href="#projects">
              Projects
            </a>
            <a className="hover:text-brand-orange transition-colors py-2" href="#reviews">
              Testimonials
            </a>
            <a className="hover:text-brand-orange transition-colors py-2" href="#quotation">
              Contact
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              id="header-phone-btn"
              className="hidden xl:flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-xs font-bold hover:border-brand-orange hover:text-brand-orange transition-colors whitespace-nowrap"
              href="tel:8793600635"
            >
              <i className="fa-solid fa-phone text-brand-orange"></i>
              <span>87936 00635</span>
            </a>
            <a
              id="header-quote-btn"
              className="flex items-center gap-1.5 xl:gap-2 px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold shadow-orange-sm transition-all hover:shadow-orange-lg hover:-translate-y-0.5 whitespace-nowrap"
              href="#quotation"
            >
              <span>Enquiry Now</span>
              <i className="fa-solid fa-arrow-right text-[11px]"></i>
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              className="w-9 h-9 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center font-bold text-sm border border-orange-200"
              href="tel:8793600635"
              title="Call Now"
              aria-label="Call 87936 00635"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
            <button
              aria-label="Toggle navigation menu"
              className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-orange transition-colors"
              id="hamburger-btn"
              type="button"
              onClick={onOpenMobileMenu}
            >
              <i className="fa-solid fa-bars-staggered text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
