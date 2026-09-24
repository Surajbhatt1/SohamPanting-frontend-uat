import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold text-lg shadow-sm">
                <i className="fa-solid fa-paint-roller"></i>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                SOHAM{' '}
                <span className="text-brand-orange font-normal text-xs uppercase tracking-widest block">
                  Painting Services
                </span>
              </span>
            </div>
            {/* <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Professional painting contractors in Pune delivering dust-free residential and commercial painting,
              waterproofing, and custom textures with Asian Paints warranty.
            </p> */}
            
<p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
  Professional <strong>painting services in Pune &amp; Solapur</strong> for
  <strong> house, interior, exterior, texture painting, waterproofing</strong>,
  and commercial projects. Trusted <strong>painters in Pune</strong> serving Pune, PCMC &amp; nearby areas.
</p>

            
            
            
            <div className="pt-2 flex items-center gap-3">
              <a
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-orange hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                href="https://facebook.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-xs"></i>
              </a>
              <a
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-orange hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
              </a>
              <a
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                href="https://wa.me/918793600635"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#services">
                  Our Services
                </a>
              </li>
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#about">
                  About Soham
                </a>
              </li>
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#process">
                  How We Work
                </a>
              </li>
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#projects">
                  Project Gallery
                </a>
              </li>
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#reviews">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Services</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#services">
                  Interior Painting
                </a>
              </li>
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#services">
                  Exterior Weatherproof
                </a>
              </li>
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#services">
                  Wall Waterproofing
                </a>
              </li>
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#services">
                  False Ceiling Paint
                </a>
              </li>
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#services">
                  Metallic Textures
                </a>
              </li>
              <li>
                <a className="hover:text-brand-orange transition-colors" href="#services">
                  PU &amp; Melamyne Polish
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Operational Hub */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Contact Us</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-phone text-brand-orange mt-0.5"></i>
                <a className="hover:text-white font-bold text-white transition-colors" href="tel:8793600635">
                  +91 87936 00635
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fa-brands fa-whatsapp text-emerald-500 mt-0.5 text-sm"></i>
                <span>+91 87936 00635 (WhatsApp)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-clock text-brand-orange mt-0.5"></i>
                {/* <span>Mon - Sun: 8:00 AM - 9:00 PM</span> */}
                <span>Open 24/7 – Available Anytime</span>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-brand-orange mt-0.5"></i>
                <span>Mundhwa - Kharadi Rd, Pune, Maharashtra 411036</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Soham Painting Services. All rights reserved. Serving Pune &amp; PCMC.</p>
          <div className="flex gap-4">
            <span>Genuine Asian Paints &amp; Berger Certified Application</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
