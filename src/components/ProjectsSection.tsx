  // import React from 'react';
  // import { PROJECTS_DATA } from '../data/content';

  // export const ProjectsSection: React.FC = () => {
  //   return (
  //     <section id="projects" className="py-16 md:py-24 bg-[#FAFAFB]">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
  //           <div>
  //             <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
  //               Our Work Portfolio
  //             </span>
  //             <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
  //               Recent Painting Projects in Pune
  //             </h2>
  //             <p className="mt-2 text-sm text-slate-600">
  //               Real snapshots from homes, apartments, and corporate offices transformed by our Pune crew.
  //             </p>
  //           </div>
  //           <div className="flex items-center gap-2">
  //             <a className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1" href="#quotation">
  //               Get estimate for your project <i className="fa-solid fa-arrow-right text-[10px]"></i>
  //             </a>
  //           </div>
  //         </div>

  //         {/* Project Cards Grid */}
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {PROJECTS_DATA.map((project) => (
  //             <div
  //               key={project.id}
  //               id={`project-card-${project.id}`}
  //               className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-orange shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
  //             >
  //               <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900 flex items-center justify-center">
  //                 <img
  //                   alt={`${project.title} - ${project.tag} in ${project.location} by Soham Painting Services`}
  //                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  //                   src={project.imageUrl}
  //                   width={600}
  //                   height={400}
  //                   referrerPolicy="no-referrer"
  //                   loading="lazy"
  //                   onError={(e) => {
  //                     const target = e.target as HTMLImageElement;
  //                     target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
  //                   }}
  //                 />
  //                 <div className="absolute top-3 left-3 bg-brand-charcoal text-white text-[10px] font-bold px-2.5 py-1 rounded z-10">
  //                   {project.tag}
  //                 </div>
  //                 <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm z-10 flex items-center gap-1">
  //                   <i className="fa-solid fa-location-dot text-brand-orange mr-1"></i> {project.location}
  //                 </div>
  //               </div>
  //               <div className="p-5">
  //                 <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-orange transition-colors">
  //                   {project.title}
  //                 </h3>
  //                 <p className="text-xs text-slate-500 mt-1 leading-relaxed">{project.description}</p>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };



import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/content';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Commercial', 'Banglow', 'Flats', 'Interior'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(
          (project) =>
            project.tag.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#FAFAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
              Our Work Portfolio
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Recent Painting Projects in Pune
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Explore our residential, commercial, bungalow, flat and interior
              painting projects across Pune and nearby areas.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1"
              href="#quotation"
            >
              Get estimate for your project
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">

          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-brand-orange text-white border-brand-orange shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-brand-orange hover:text-brand-orange'
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-orange shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >

                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900 flex items-center justify-center">

                  <img
                    alt={`${project.title} - ${project.tag} painting project in ${project.location} by Soham Painting Services`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={project.imageUrl}
                    width={600}
                    height={400}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />

                  {/* Category */}
                  <div className="absolute top-3 left-3 bg-brand-charcoal text-white text-[10px] font-bold px-2.5 py-1 rounded z-10">
                    {project.tag}
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm z-10 flex items-center gap-1">
                    <i className="fa-solid fa-location-dot text-brand-orange mr-1"></i>
                    {project.location}
                  </div>

                </div>

                {/* Content */}
                <div className="p-5">

                  <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {project.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        ) : (
          /* No Projects */
          <div className="text-center py-16">
            <i className="fa-solid fa-images text-3xl text-slate-300 mb-3"></i>

            <p className="text-sm text-slate-500">
              No projects available in this category yet.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
