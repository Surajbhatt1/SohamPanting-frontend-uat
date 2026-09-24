import React from 'react';
import { SERVICES_DATA } from '../data/content';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
            Our Specializations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Professional Painting Services in Pune
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tailored coatings and finishes designed to withstand Maharashtra&apos;s weather with superior aesthetics.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-orange/50 hover:shadow-elevated transition-all duration-300 relative flex flex-col justify-between cursor-pointer"
              onClick={() => {
                const quoteSec = document.getElementById('quotation');
                if (quoteSec) quoteSec.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center text-xl group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200 mb-5">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-orange">
                <span>{service.actionText}</span>
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA bar below services */}
        <div className="mt-12 p-6 sm:p-8 bg-brand-charcoal rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold">Unsure about what paint or finish fits your home?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Book our senior painting technician for a free on-site wall moisture check and quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <a
              id="services-book-btn"
              className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold transition-colors shadow-sm text-center whitespace-nowrap"
              href="#quotation"
            >
              Book Free Site Visit
            </a>
            <a
              id="services-phone-btn"
              className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors text-center flex items-center justify-center gap-1.5 whitespace-nowrap"
              href="tel:8793600635"
            >
              <i className="fa-solid fa-phone text-brand-orange"></i>
              <span>87936 00635</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
