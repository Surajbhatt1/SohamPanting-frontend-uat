import React from 'react';
import { STATS_DATA } from '../data/content';
import aboutImage from '../assets/images/about_painter_work_1789142513863.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAFAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Image with Floating Experience Card */}
          <div className="lg:col-span-6 relative max-w-md sm:max-w-xl mx-auto lg:max-w-none w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 flex items-center justify-center">
              <img
                alt="Professional painting contractor in Pune applying smooth wall coating with clean masking protection - Soham Painting Services"
                className="w-full h-80 sm:h-96 object-cover"
                src={aboutImage}
                width={800}
                height={600}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none"></div>
              <div className="absolute top-4 left-4 sm:top-auto sm:bottom-6 sm:left-6 max-w-[260px] sm:max-w-xs text-white z-10 pointer-events-none">
                <span className="bg-brand-orange text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded inline-block shadow-sm">
                  Our Promise
                </span>
                <h4 className="text-sm sm:text-base lg:text-lg font-bold mt-1.5 drop-shadow-md leading-snug">
                  No Mess. No Hidden Charges. Clean Finishing.
                </h4>
              </div>
            </div>

            {/* Floating Stat Badge */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:-bottom-6 lg:right-6 bg-white p-3.5 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 sm:gap-4 z-20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center text-xl sm:text-2xl font-bold shrink-0">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 leading-none">12+ Years</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-1">Excellence in Pune</p>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Guarantees */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block">
              About Soham Painting Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pune&apos;s Most Trusted Local Painting Contractors
            </h2>
            {/* <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded with a commitment to elevate Indian home painting standards,{' '}
              <strong>Soham Painting Services</strong> combines master craftsmanship with modern masking and painting
              equipment. We eliminate the frustration of paint drops on furniture, delayed timelines, and inflated quotes.
            </p>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Soham Painting Services provides professional house painting services in
                Pune and Solapur. We specialize in residential and commercial interior
                painting, exterior painting, wall painting, waterproofing, texture painting,
                wooden polish and false ceiling services with quality workmanship and
                on-time completion.
            </p> */}

{/* 
               <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Soham Painting Services provides professional <strong>painting services in Pune</strong> for homes, apartments, offices, and commercial spaces. Our experienced <strong>professional painters in Pune</strong> specialize in <strong>interior painting, exterior painting, wall painting, texture painting, waterproofing, wooden polish, and residential painting services</strong>. We focus on clean finishing, quality materials, transparent pricing, and on-time completion, making us a reliable choice for <strong>house painting services in Pune</strong>. We proudly serve <strong>Kharadi, Mundhwa, Hadapsar, Magarpatta, Viman Nagar, Wagholi, Keshav Nagar, Kothrud, Wakad, Baner, Hinjewadi</strong>, and nearby areas.
            </p> */}


            {/* SEO Content */} <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"> Soham Painting Services offers professional painting services in Pune and Solapur, including house painting, interior and exterior painting, wall painting, texture painting, waterproofing, and commercial painting. Our experienced painters focus on quality workmanship, clean finishing, transparent pricing, and timely completion. We serve Kharadi, Hadapsar, Mundhwa, Viman Nagar, Wagholi, Kothrud, Wakad, Baner, Hinjewadi and nearby areas. </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                <i className="fa-solid fa-circle-check text-brand-orange mt-1"></i>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Experienced Painters</h4>
                  <p className="text-[11px] text-slate-500">Trained &amp; verified professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                <i className="fa-solid fa-circle-check text-brand-orange mt-1"></i>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Quality Materials</h4>
                  <p className="text-[11px] text-slate-500">100% original sealed paint cans</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                <i className="fa-solid fa-circle-check text-brand-orange mt-1"></i>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Clean Finishing</h4>
                  <p className="text-[11px] text-slate-500">Complete furniture &amp; floor masking</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                <i className="fa-solid fa-circle-check text-brand-orange mt-1"></i>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Transparent Pricing</h4>
                  <p className="text-[11px] text-slate-500">Itemized quotes with zero surprises</p>
                </div>
              </div>
            </div>

            {/* Pune Service Coverage Highlight */}
            <div className="p-4 bg-orange-50/70 rounded-xl border border-orange-200 text-xs text-slate-700">
              <span className="font-bold text-brand-orange flex items-center gap-1.5 mb-1">
                <i className="fa-solid fa-map-location-dot"></i> Wide Pune Service Coverage:
              </span>
              Kharadi, Mundhwa, Hadapsar, Viman Nagar, Magarpatta, Wagholi, Keshav Nagar, Kothrud, Wakad, Baner, Hinjewadi, and surrounding areas.
            </div>
          </div>
        </div>

        {/* Professional Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-orange transition-colors"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-orange">{stat.number}</div>
              <p className="text-xs sm:text-sm font-bold text-slate-800 mt-2">{stat.label}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
