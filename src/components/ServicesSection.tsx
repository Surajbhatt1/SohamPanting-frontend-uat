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



// Updated code

// import React from 'react';
// import { SERVICES_DATA } from '../data/content';

// export const ServicesSection: React.FC = () => {
//   return (
//     <section
//       id="services"
//       className="border-b border-slate-100 bg-white py-16 md:py-24"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
//           <span className="mb-3 inline-block rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-orange">
//             Our Specializations
//           </span>

//           <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
//             Complete Professional Painting Services
//           </h2>

//           <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
//             Professional painting solutions for homes, flats, bungalows,
//             offices and commercial properties across Pune and Solapur.
//           </p>
//         </div>

//         {/* Service Cards */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {SERVICES_DATA.map((service) => (
//             <div
//               key={service.id}
//               id={`service-card-${service.id}`}
//               className="
//                 group
//                 relative
//                 flex
//                 cursor-pointer
//                 flex-col
//                 justify-between
//                 rounded-2xl
//                 border
//                 border-slate-200
//                 bg-white
//                 p-6
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-brand-orange/50
//                 hover:shadow-elevated
//               "
//               onClick={() => {
//                 const quoteSec =
//                   document.getElementById('quotation');

//                 if (quoteSec) {
//                   quoteSec.scrollIntoView({
//                     behavior: 'smooth',
//                   });
//                 }
//               }}
//             >
//               <div>
//                 {/* Icon */}
//                 <div
//                   className="
//                     mb-5
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-orange-50
//                     text-xl
//                     text-brand-orange
//                     transition-all
//                     duration-300
//                     group-hover:bg-brand-orange
//                     group-hover:text-white
//                   "
//                 >
//                   <i className={service.icon}></i>
//                 </div>

//                 {/* Title */}
//                 <h3
//                   className="
//                     text-lg
//                     font-bold
//                     text-slate-900
//                     transition-colors
//                     duration-300
//                     group-hover:text-brand-orange
//                   "
//                 >
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
//                   {service.description}
//                 </p>
//               </div>

//               {/* Card Footer */}
//               <div
//                 className="
//                   mt-5
//                   flex
//                   items-center
//                   justify-between
//                   border-t
//                   border-slate-100
//                   pt-4
//                   text-xs
//                   font-bold
//                   text-brand-orange
//                 "
//               >
//                 <span>{service.actionText}</span>

//                 <span
//                   className="
//                     flex
//                     h-7
//                     w-7
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-orange-50
//                     transition-all
//                     duration-300
//                     group-hover:translate-x-1
//                     group-hover:bg-orange-100
//                   "
//                 >
//                   <i className="fa-solid fa-arrow-right text-[10px]"></i>
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* =====================================================
//             SERVICE AREAS
//         ====================================================== */}
//         <div className="mt-16 md:mt-20">

//           {/* Area Header */}
//           <div className="mx-auto mb-8 max-w-2xl text-center">
//             <span className="mb-3 inline-block rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-orange">
//               Service Areas
//             </span>

//             <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
//               Now Serving Pune &amp; Solapur
//             </h3>

//             <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
//               Soham Painting Services is now providing professional
//               painting services in Solapur along with Pune and nearby
//               areas.
//             </p>
//           </div>

//           {/* Location Cards */}
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

//             {/* Pune */}
//             <div
//               className="
//                 group
//                 rounded-2xl
//                 border
//                 border-slate-200
//                 bg-slate-50
//                 p-6
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:border-brand-orange/50
//                 hover:bg-white
//                 hover:shadow-elevated
//                 sm:p-8
//               "
//             >
//               <div className="flex items-start gap-4">
//                 <div
//                   className="
//                     flex
//                     h-12
//                     w-12
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-orange-50
//                     text-lg
//                     text-brand-orange
//                     transition-colors
//                     group-hover:bg-brand-orange
//                     group-hover:text-white
//                   "
//                 >
//                   <i className="fa-solid fa-location-dot"></i>
//                 </div>

//                 <div>
//                   <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
//                     Service Area
//                   </span>

//                   <h4 className="mt-1 text-xl font-extrabold text-slate-900">
//                     Pune
//                   </h4>

//                   <p className="mt-2 text-sm leading-relaxed text-slate-600">
//                     Professional painting services for homes, flats,
//                     bungalows, offices and commercial properties across
//                     Pune and nearby areas.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6 flex flex-wrap gap-2">
//                 {[
//                   'Interior Painting',
//                   'Exterior Painting',
//                   'Flat Painting',
//                   'Bungalow Painting',
//                   'Commercial Painting',
//                 ].map((item) => (
//                   <span
//                     key={item}
//                     className="
//                       rounded-full
//                       border
//                       border-slate-200
//                       bg-white
//                       px-3
//                       py-1.5
//                       text-[11px]
//                       font-semibold
//                       text-slate-600
//                     "
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Solapur */}
//             <div
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-2xl
//                 border
//                 border-brand-orange/30
//                 bg-orange-50
//                 p-6
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:shadow-elevated
//                 sm:p-8
//               "
//             >
//               {/* New Badge */}
//               <div className="absolute right-5 top-5">
//                 <span className="rounded-full bg-brand-orange px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
//                   Now Available
//                 </span>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div
//                   className="
//                     flex
//                     h-12
//                     w-12
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-brand-orange
//                     text-lg
//                     text-white
//                     shadow-sm
//                   "
//                 >
//                   <i className="fa-solid fa-location-dot"></i>
//                 </div>

//                 <div className="pr-20">
//                   <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
//                     New Service Area
//                   </span>

//                   <h4 className="mt-1 text-xl font-extrabold text-slate-900">
//                     Solapur
//                   </h4>

//                   <p className="mt-2 text-sm leading-relaxed text-slate-600">
//                     Soham Painting Services now offers professional
//                     interior and exterior painting services for homes,
//                     flats, bungalows, offices and commercial properties
//                     in Solapur.
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6 flex flex-wrap gap-2">
//                 {[
//                   'Interior Painting',
//                   'Exterior Painting',
//                   'Flat Painting',
//                   'Bungalow Painting',
//                   'Commercial Painting',
//                 ].map((item) => (
//                   <span
//                     key={item}
//                     className="
//                       rounded-full
//                       border
//                       border-orange-200
//                       bg-white/80
//                       px-3
//                       py-1.5
//                       text-[11px]
//                       font-semibold
//                       text-slate-600
//                     "
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Solapur SEO Content */}
//           <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center sm:p-8">
//             <h4 className="text-lg font-bold text-slate-900">
//               Looking for Painting Services in Solapur?
//             </h4>

//             <p className="mt-2 text-sm leading-relaxed text-slate-600">
//               Whether you need house painting, flat painting, bungalow
//               painting, interior painting, exterior painting or
//               commercial painting in Solapur, our team provides
//               professional painting solutions with a focus on clean
//               finishing, proper surface preparation and quality
//               workmanship.
//             </p>

//             <a
//               href="#quotation"
//               className="
//                 mt-5
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-xl
//                 bg-brand-orange
//                 px-5
//                 py-3
//                 text-xs
//                 font-bold
//                 text-white
//                 shadow-sm
//                 transition-all
//                 duration-300
//                 hover:-translate-y-0.5
//                 hover:bg-brand-orangeHover
//               "
//             >
//               Get Solapur Painting Quote
//               <i className="fa-solid fa-arrow-right text-[10px]"></i>
//             </a>
//           </div>
//         </div>

//         {/* Quick CTA */}
//         <div
//           className="
//             mt-12
//             flex
//             flex-col
//             items-center
//             justify-between
//             gap-6
//             rounded-2xl
//             bg-brand-charcoal
//             p-6
//             text-white
//             sm:p-8
//             md:flex-row
//           "
//         >
//           <div className="space-y-1 text-center md:text-left">
//             <h4 className="text-lg font-bold sm:text-xl">
//               Unsure about what paint or finish fits your home?
//             </h4>

//             <p className="text-xs text-slate-300 sm:text-sm">
//               Book our senior painting technician for a free
//               on-site wall moisture check and quote.
//             </p>
//           </div>

//           <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
//             <a
//               id="services-book-btn"
//               className="
//                 rounded-xl
//                 bg-brand-orange
//                 px-5
//                 py-3
//                 text-center
//                 text-xs
//                 font-bold
//                 text-white
//                 shadow-sm
//                 transition-colors
//                 hover:bg-brand-orangeHover
//                 sm:whitespace-nowrap
//               "
//               href="#quotation"
//             >
//               Book Free Site Visit
//             </a>

//             <a
//               id="services-phone-btn"
//               className="
//                 flex
//                 items-center
//                 justify-center
//                 gap-1.5
//                 rounded-xl
//                 bg-slate-800
//                 px-4
//                 py-3
//                 text-center
//                 text-xs
//                 font-bold
//                 text-white
//                 transition-colors
//                 hover:bg-slate-700
//                 sm:whitespace-nowrap
//               "
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


//   Updated code with model windows



import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/content';

  const bgColors: Record<string, string> = {
    interior: 'bg-orange-50',
    exterior: 'bg-blue-50',
    waterproofing: 'bg-cyan-50',
    'false-ceiling': 'bg-purple-50',
    texture: 'bg-pink-50',
    'wooden-polish': 'bg-yellow-50',
    commercial: 'bg-indigo-50',
  };
export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] =
    useState<ServiceItem | null>(null);

  const openServiceModal = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const openWhatsApp = () => {
    if (!selectedService) return;

    const phoneNumber = '918793600635';

    const message = encodeURIComponent(
      `Hi Soham Painting Services, I am interested in your ${selectedService.title} service. Please share more details and provide a quotation.`
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      '_blank'
    );
  };

  return (
    <>
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
          
          {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
    ${bgColors[service.id] || 'bg-white'}
    p-6
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-elevated

                "
                onClick={() => openServiceModal(service)}
              > */}



              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {SERVICES_DATA.map((service) => (
    <div
      key={service.id}
      id={`service-card-${service.id}`}
      className={`
        group
        relative
        flex
        cursor-pointer
        flex-col
        justify-between
        rounded-2xl
        border
        border-slate-200
        ${bgColors[service.id] || 'bg-white'}
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-elevated
      `}
      onClick={() => openServiceModal(service)}
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

      {/* =====================================================
          SERVICE DETAILS MODAL
      ====================================================== */}

      {selectedService && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/60
            p-4
            backdrop-blur-sm
          "
          onClick={closeServiceModal}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-2xl
              overflow-y-auto
              rounded-2xl
              bg-white
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={closeServiceModal}
              className="
                absolute
                right-4
                top-4
                z-10
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-slate-700
                shadow-md
                transition-all
                hover:bg-brand-orange
                hover:text-white
              "
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Service Image */}
            {/* <div className="h-80 w-full overflow-hidden sm:h-72">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="h-full w-full object-cover"
              />
            </div> */}



            <div className="h-80 w-full overflow-hidden bg-slate-100 sm:h-96">
  <img
    src={selectedService.image}
    alt={selectedService.title}
    className="h-full w-full object-contain"
  />
</div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">

              {/* Service Icon */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-50
                    text-lg
                    text-brand-orange
                  "
                >
                  <i className={selectedService.icon}></i>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    Our Service
                  </span>

                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                {selectedService.detailedDescription}
              </p>

              {/* Benefits */}
              <div className="mt-6">
                <h4 className="text-base font-bold text-slate-900">
                  What You Get
                </h4>

                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {selectedService.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="
                        flex
                        items-start
                        gap-2
                        rounded-lg
                        bg-slate-50
                        px-3
                        py-2.5
                        text-sm
                        text-slate-600
                      "
                    >
                      <i className="fa-solid fa-circle-check mt-0.5 text-brand-orange"></i>

                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              {selectedService.areas &&
                selectedService.areas.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-base font-bold text-slate-900">
                      Available Areas
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedService.areas.map((area) => (
                        <span
                          key={area}
                          className="
                            rounded-full
                            border
                            border-orange-200
                            bg-orange-50
                            px-3
                            py-1.5
                            text-xs
                            font-semibold
                            text-brand-orange
                          "
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={openWhatsApp}
                className="
                  mt-7
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-green-600
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-green-700
                "
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>

                Get Quote on WhatsApp
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};