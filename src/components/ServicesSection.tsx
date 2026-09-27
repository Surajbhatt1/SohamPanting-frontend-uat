// import React from 'react';
// import { SERVICES_DATA } from '../data/content';

// export const ServicesSection: React.FC = () => {
//   return (
//     <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
//           <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
//             Our Specializations
//           </span>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//             Complete Professional Painting Services in Pune
//           </h2>
//           <p className="mt-3 text-sm sm:text-base text-slate-600">
//             Tailored coatings and finishes designed to withstand Maharashtra&apos;s weather with superior aesthetics.
//           </p>
//         </div>

//         {/* Service Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {SERVICES_DATA.map((service) => (
//             <div
//               key={service.id}
//               id={`service-card-${service.id}`}
//               className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-orange/50 hover:shadow-elevated transition-all duration-300 relative flex flex-col justify-between cursor-pointer"
//               onClick={() => {
//                 const quoteSec = document.getElementById('quotation');
//                 if (quoteSec) quoteSec.scrollIntoView({ behavior: 'smooth' });
//               }}
//             >
//               <div>
//                 <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center text-xl group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200 mb-5">
//                   <i className={service.icon}></i>
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//               <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-orange">
//                 <span>{service.actionText}</span>
//                 <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Quick CTA bar below services */}
//         <div className="mt-12 p-6 sm:p-8 bg-brand-charcoal rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="space-y-1 text-center md:text-left">
//             <h4 className="text-lg sm:text-xl font-bold">Unsure about what paint or finish fits your home?</h4>
//             <p className="text-xs sm:text-sm text-slate-300">
//               Book our senior painting technician for a free on-site wall moisture check and quote.
//             </p>
//           </div>
//           <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
//             <a
//               id="services-book-btn"
//               className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-white text-xs font-bold transition-colors shadow-sm text-center whitespace-nowrap"
//               href="#quotation"
//             >
//               Book Free Site Visit
//             </a>
//             <a
//               id="services-phone-btn"
//               className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors text-center flex items-center justify-center gap-1.5 whitespace-nowrap"
//               href="tel:8793600635"
//             >
//               <i className="fa-solid fa-phone text-brand-orange"></i>
//               <span>87936 00635</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };





import React from 'react';
import { SERVICES_DATA } from '../data/content';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="border-b border-slate-100 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-3 inline-block rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-orange">
            Our Specializations
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Complete Professional Painting Services
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Professional painting solutions for homes, flats, bungalows,
            offices and commercial properties across Pune and Solapur.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="
                group
                relative
                flex
                cursor-pointer
                flex-col
                justify-between
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-brand-orange/50
                hover:shadow-elevated
              "
              onClick={() => {
                const quoteSec =
                  document.getElementById('quotation');

                if (quoteSec) {
                  quoteSec.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            >
              <div>
                {/* Icon */}
                <div
                  className="
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-50
                    text-xl
                    text-brand-orange
                    transition-all
                    duration-300
                    group-hover:bg-brand-orange
                    group-hover:text-white
                  "
                >
                  <i className={service.icon}></i>
                </div>

                {/* Title */}
                <h3
                  className="
                    text-lg
                    font-bold
                    text-slate-900
                    transition-colors
                    duration-300
                    group-hover:text-brand-orange
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {service.description}
                </p>
              </div>

              {/* Card Footer */}
              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  border-t
                  border-slate-100
                  pt-4
                  text-xs
                  font-bold
                  text-brand-orange
                "
              >
                <span>{service.actionText}</span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-50
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:bg-orange-100
                  "
                >
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            SERVICE AREAS
        ====================================================== */}
        <div className="mt-16 md:mt-20">

          {/* Area Header */}
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-orange">
              Service Areas
            </span>

            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Now Serving Pune &amp; Solapur
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Soham Painting Services is now providing professional
              painting services in Solapur along with Pune and nearby
              areas.
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Pune */}
            <div
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-brand-orange/50
                hover:bg-white
                hover:shadow-elevated
                sm:p-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-50
                    text-lg
                    text-brand-orange
                    transition-colors
                    group-hover:bg-brand-orange
                    group-hover:text-white
                  "
                >
                  <i className="fa-solid fa-location-dot"></i>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Service Area
                  </span>

                  <h4 className="mt-1 text-xl font-extrabold text-slate-900">
                    Pune
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Professional painting services for homes, flats,
                    bungalows, offices and commercial properties across
                    Pune and nearby areas.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Interior Painting',
                  'Exterior Painting',
                  'Flat Painting',
                  'Bungalow Painting',
                  'Commercial Painting',
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-1.5
                      text-[11px]
                      font-semibold
                      text-slate-600
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Solapur */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-brand-orange/30
                bg-orange-50
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-elevated
                sm:p-8
              "
            >
              {/* New Badge */}
              <div className="absolute right-5 top-5">
                <span className="rounded-full bg-brand-orange px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                  Now Available
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-brand-orange
                    text-lg
                    text-white
                    shadow-sm
                  "
                >
                  <i className="fa-solid fa-location-dot"></i>
                </div>

                <div className="pr-20">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    New Service Area
                  </span>

                  <h4 className="mt-1 text-xl font-extrabold text-slate-900">
                    Solapur
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Soham Painting Services now offers professional
                    interior and exterior painting services for homes,
                    flats, bungalows, offices and commercial properties
                    in Solapur.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Interior Painting',
                  'Exterior Painting',
                  'Flat Painting',
                  'Bungalow Painting',
                  'Commercial Painting',
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-orange-200
                      bg-white/80
                      px-3
                      py-1.5
                      text-[11px]
                      font-semibold
                      text-slate-600
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Solapur SEO Content */}
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center sm:p-8">
            <h4 className="text-lg font-bold text-slate-900">
              Looking for Painting Services in Solapur?
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Whether you need house painting, flat painting, bungalow
              painting, interior painting, exterior painting or
              commercial painting in Solapur, our team provides
              professional painting solutions with a focus on clean
              finishing, proper surface preparation and quality
              workmanship.
            </p>

            <a
              href="#quotation"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-brand-orange
                px-5
                py-3
                text-xs
                font-bold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-brand-orangeHover
              "
            >
              Get Solapur Painting Quote
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        {/* Quick CTA */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-6
            rounded-2xl
            bg-brand-charcoal
            p-6
            text-white
            sm:p-8
            md:flex-row
          "
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold sm:text-xl">
              Unsure about what paint or finish fits your home?
            </h4>

            <p className="text-xs text-slate-300 sm:text-sm">
              Book our senior painting technician for a free
              on-site wall moisture check and quote.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
            <a
              id="services-book-btn"
              className="
                rounded-xl
                bg-brand-orange
                px-5
                py-3
                text-center
                text-xs
                font-bold
                text-white
                shadow-sm
                transition-colors
                hover:bg-brand-orangeHover
                sm:whitespace-nowrap
              "
              href="#quotation"
            >
              Book Free Site Visit
            </a>

            <a
              id="services-phone-btn"
              className="
                flex
                items-center
                justify-center
                gap-1.5
                rounded-xl
                bg-slate-800
                px-4
                py-3
                text-center
                text-xs
                font-bold
                text-white
                transition-colors
                hover:bg-slate-700
                sm:whitespace-nowrap
              "
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


