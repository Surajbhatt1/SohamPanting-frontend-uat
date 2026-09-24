import React, { useEffect } from 'react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        id="mobile-menu-backdrop"
        onClick={onClose}
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        id="mobile-menu-drawer"
        className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-xs sm:max-w-sm bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation Menu"
      >
        {/* Header of Drawer */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-brand-orange text-white flex items-center justify-center font-bold shadow-sm">
              <i className="fa-solid fa-paint-roller text-sm"></i>
            </div>
            <div>
              <span className="font-extrabold text-base text-slate-900 block leading-tight">SOHAM</span>
              <span className="text-[10px] uppercase font-bold text-brand-orange tracking-wider">
                Painting Services
              </span>
            </div>
          </div>
          {/* Close Cross Button */}
          <button
            aria-label="Close menu"
            className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors"
            id="close-drawer-btn"
            type="button"
            onClick={onClose}
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        {/* Navigation links */}
        <div className="p-5 space-y-1.5 flex-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Navigation</p>
          <a
            className="drawer-link flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-orange-50 hover:text-brand-orange transition-colors"
            href="#hero"
            onClick={onClose}
          >
            <span className="flex items-center gap-3">
              <i className="fa-solid fa-house text-slate-400 text-sm"></i> Home
            </span>
            <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
          </a>
          <a
            className="drawer-link flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-orange-50 hover:text-brand-orange transition-colors"
            href="#services"
            onClick={onClose}
          >
            <span className="flex items-center gap-3">
              <i className="fa-solid fa-spray-can text-slate-400 text-sm"></i> Services
            </span>
            <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
          </a>
          <a
            className="drawer-link flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-orange-50 hover:text-brand-orange transition-colors"
            href="#about"
            onClick={onClose}
          >
            <span className="flex items-center gap-3">
              <i className="fa-solid fa-user-shield text-slate-400 text-sm"></i> About Us
            </span>
            <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
          </a>
          <a
            className="drawer-link flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-orange-50 hover:text-brand-orange transition-colors"
            href="#process"
            onClick={onClose}
          >
            <span className="flex items-center gap-3">
              <i className="fa-solid fa-clipboard-check text-slate-400 text-sm"></i> How We Work
            </span>
            <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
          </a>
          <a
            className="drawer-link flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-orange-50 hover:text-brand-orange transition-colors"
            href="#projects"
            onClick={onClose}
          >
            <span className="flex items-center gap-3">
              <i className="fa-solid fa-images text-slate-400 text-sm"></i> Project Gallery
            </span>
            <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
          </a>
          <a
            className="drawer-link flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-orange-50 hover:text-brand-orange transition-colors"
            href="#reviews"
            onClick={onClose}
          >
            <span className="flex items-center gap-3">
              <i className="fa-solid fa-star text-slate-400 text-sm"></i> Testimonials
            </span>
            <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
          </a>
          <a
            className="drawer-link flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-orange-50 hover:text-brand-orange transition-colors"
            href="#quotation"
            onClick={onClose}
          >
            <span className="flex items-center gap-3">
              <i className="fa-solid fa-file-invoice-dollar text-slate-400 text-sm"></i> Free Quotation
            </span>
            <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
          </a>
        </div>

        {/* Quick Footer Actions Inside Drawer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
          <a
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
            href="tel:8793600635"
          >
            <i className="fa-solid fa-phone-volume text-brand-orange"></i>
            <span>Call: 87936 00635</span>
          </a>
          <a
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
            href="https://wa.me/918793600635?text=Hi%20Soham%20Painting%20Services,%20I%20would%20like%20a%20free%20site%20visit"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Chat on WhatsApp</span>
          </a>
          <div className="pt-2 flex justify-center items-center gap-4 text-slate-500 text-xs">
            <span>Pune &amp; PCMC, Maharashtra</span>
          </div>
        </div>
      </aside>
    </>
  );
};
