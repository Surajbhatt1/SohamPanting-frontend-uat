// import React from 'react';
// import { REVIEWS_DATA } from '../data/content';

// export const ReviewsSection: React.FC = () => {
//   return (
//     <section id="reviews" className="py-16 md:py-24 bg-white border-b border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-2xl mx-auto mb-14">
//           <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
//             Verified Customer Feedback
//           </span>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//             What Pune Homeowners Say About Soham
//           </h2>
//           <div className="flex items-center justify-center gap-1 text-amber-400 mt-3 text-sm">
//             <i className="fa-solid fa-star"></i>
//             <i className="fa-solid fa-star"></i>
//             <i className="fa-solid fa-star"></i>
//             <i className="fa-solid fa-star"></i>
//             <i className="fa-solid fa-star"></i>
//             <span className="text-slate-700 font-bold ml-1.5 text-xs">4.9/5 based on 280+ Pune reviews</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {REVIEWS_DATA.map((review, idx) => (
//             <div
//               key={review.id}
//               className={`bg-[#FAFAFB] p-5 sm:p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-brand-orange transition-colors ${
//                 idx === 2 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:max-w-none w-full' : ''
//               }`}
//             >
//               <div>
//                 <div className="flex text-amber-400 text-xs mb-3">
//                   {Array.from({ length: review.rating }).map((_, i) => (
//                     <i key={i} className="fa-solid fa-star mr-0.5"></i>
//                   ))}
//                 </div>
//                 <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
//                   {review.review}
//                 </p>
//               </div>
//               <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-orange-100 text-brand-orange font-extrabold text-sm flex items-center justify-center shrink-0">
//                   {review.initials}
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-bold text-slate-900">{review.name}</h4>
//                   <p className="text-[11px] text-slate-500">{review.location}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };




import React from 'react';
import { REVIEWS_DATA } from '../data/content';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-white border-b border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
            Verified Customer Feedback
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Pune Homeowners Say About Soham
          </h2>

          {/* RATING */}
          <div className="flex items-center justify-center gap-1 text-amber-400 mt-3 text-sm">

            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>

            <span className="text-slate-700 font-bold ml-1.5 text-xs">
              4.9/5 based on 280+ Pune reviews
            </span>

          </div>
        </div>


        {/* REVIEWS MARQUEE */}
        <div className="relative w-full overflow-hidden">

          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>


          {/* MOVING CONTAINER */}
          <div className="flex w-max animate-review-marquee">

            {/* FIRST SET */}
            {REVIEWS_DATA.map((review) => (
              <div
                key={`first-${review.id}`}
                className="w-[300px] sm:w-[360px] lg:w-[400px] mx-3"
              >

                <div className="bg-[#FAFAFB] p-5 sm:p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between hover:border-brand-orange transition-colors">

                  {/* REVIEW CONTENT */}
                  <div>

                    {/* STARS */}
                    <div className="flex text-amber-400 text-xs mb-3">

                      {Array.from({ length: review.rating }).map((_, i) => (
                        <i
                          key={i}
                          className="fa-solid fa-star mr-0.5"
                        ></i>
                      ))}

                    </div>

                    {/* REVIEW TEXT */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      {review.review}
                    </p>

                  </div>


                  {/* CUSTOMER DETAILS */}
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3">

                    {/* INITIAL */}
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-brand-orange font-extrabold text-sm flex items-center justify-center shrink-0">
                      {review.initials}
                    </div>

                    {/* NAME + LOCATION */}
                    <div>

                      <h4 className="text-xs font-bold text-slate-900">
                        {review.name}
                      </h4>

                      <p className="text-[11px] text-slate-500">
                        {review.location}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            ))}


            {/* DUPLICATE SET FOR SEAMLESS LOOP */}
            {REVIEWS_DATA.map((review) => (
              <div
                key={`second-${review.id}`}
                className="w-[300px] sm:w-[360px] lg:w-[400px] mx-3"
              >

                <div className="bg-[#FAFAFB] p-5 sm:p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between hover:border-brand-orange transition-colors">

                  {/* REVIEW CONTENT */}
                  <div>

                    {/* STARS */}
                    <div className="flex text-amber-400 text-xs mb-3">

                      {Array.from({ length: review.rating }).map((_, i) => (
                        <i
                          key={i}
                          className="fa-solid fa-star mr-0.5"
                        ></i>
                      ))}

                    </div>

                    {/* REVIEW TEXT */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      {review.review}
                    </p>

                  </div>


                  {/* CUSTOMER DETAILS */}
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3">

                    {/* INITIAL */}
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-brand-orange font-extrabold text-sm flex items-center justify-center shrink-0">
                      {review.initials}
                    </div>

                    {/* NAME + LOCATION */}
                    <div>

                      <h4 className="text-xs font-bold text-slate-900">
                        {review.name}
                      </h4>

                      <p className="text-[11px] text-slate-500">
                        {review.location}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>


      {/* MARQUEE CSS */}
      <style>{`

        @keyframes review-marquee {

          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }

        }

        .animate-review-marquee {

          animation: review-marquee 35s linear infinite;

        }

        .animate-review-marquee:hover {

          animation-play-state: paused;

        }

      `}</style>

    </section>
  );
};