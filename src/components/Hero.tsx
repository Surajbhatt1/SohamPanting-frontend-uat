import React from 'react';
import heroImage from '../assets/images/hero_pune_home_1789142498839.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-white pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-100 overflow-hidden"
    >

  {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>
      {/* White overlay so content stays readable on top of the image */}
      {/* <div className="absolute inset-0 bg-white/90"></div> */}


      {/* Subtle architectural background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1e232a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-100/50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* PROFESSIONAL BADGE */}
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
              <span>PROFESSIONAL PAINTING CONTRACTORS IN PUNE & SOLAPUR</span>
            </div> */}

          


            {/* Main Heading */}
            {/* <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              PAINTING SERVICES <br className="hidden sm:inline" /> */}

              <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                      PAINTING SERVICES <br className="hidden sm:inline" />
              <span className="text-brand-orange relative inline-block">
                IN PUNE & SOLAPUR
                {/* Orange underline curve */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-brand-orange/60"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path d="M0 5 Q 50 10, 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
                </svg>
              </span>
            </h1>

            {/* Value proposition statement */}
            {/* <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Soham Painting Services provides professional house painting services in
                Pune and Solapur. We specialize in residential and commercial interior
                painting, exterior painting, wall painting, waterproofing, texture painting,
                wooden polish and false ceiling services with quality workmanship and
                on-time completion.
            </p> */}


            {/* <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
  Soham Painting Services provides professional house painting services in
  Pune and Solapur. We specialize in residential and commercial interior
  painting, exterior painting, wall painting, waterproofing, texture painting,
  wooden polish and false ceiling services with quality workmanship and
  on-time completion.
</p> */}

            {/* Core Service Badges Listed */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-orange-100 hover:text-brand-orange transition-colors">
                <i className="fa-solid fa-brush text-brand-orange mr-1.5"></i>Interior Painting
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-orange-100 hover:text-brand-orange transition-colors">
                <i className="fa-solid fa-house-chimney text-brand-orange mr-1.5"></i>Exterior Painting
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-orange-100 hover:text-brand-orange transition-colors">
                <i className="fa-solid fa-shield-halved text-brand-orange mr-1.5"></i>Waterproofing
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-orange-100 hover:text-brand-orange transition-colors">
                <i className="fa-solid fa-border-top-left text-brand-orange mr-1.5"></i>False Ceiling
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-orange-100 hover:text-brand-orange transition-colors">
                <i className="fa-solid fa-palette text-brand-orange mr-1.5"></i>Texture Painting
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-orange-100 hover:text-brand-orange transition-colors">
                <i className="fa-solid fa-couch text-brand-orange mr-1.5"></i>Wooden Polish
              </span>
            </div>

            {/* Hero Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                id="hero-quote-cta"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white font-bold text-sm sm:text-base shadow-orange-lg hover:shadow-orange-sm hover:-translate-y-0.5 transition-all"
                href="#quotation"
              >
                <i className="fa-solid fa-calculator"></i>
                <span>Enquiry Now</span>
              </a>
              <a
                id="hero-call-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base transition-colors shadow-sm"
                href="tel:8793600635"
              >
                <i className="fa-solid fa-phone text-brand-orange"></i>
                <span>Call Now</span>
              </a>
              <a
                id="hero-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-colors shadow-sm"
                href="https://wa.me/918793600635?text=Hello%20Soham%20Painting%20Services,%20I%20am%20looking%20for%20a%20painting%20contractor%20in%20Pune."
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            {/* <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-100 text-center sm:text-left">
              <div>
                <p className="font-extrabold text-slate-900 text-lg sm:text-2xl">100%</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Free Site Inspection</p>
              </div>
              <div>
                <p className="font-extrabold text-brand-orange text-lg sm:text-2xl">3-5 Yrs</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Warranty on Premium</p>
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-lg sm:text-2xl">4.9 / 5★</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Pune Customer Rating</p>
              </div>
            </div> */}
          </div>

         
        </div>
      </div>
    </section>
  );
};
