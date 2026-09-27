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



// import React, { useState } from 'react';
// import { PROJECTS_DATA } from '../data/content';

// export const ProjectsSection: React.FC = () => {
//   const [activeFilter, setActiveFilter] = useState('All');

//   const filters = ['All', 'Commercial', 'Bungalow', 'Flats'];

//   const filteredProjects =
//     activeFilter === 'All'
//       ? PROJECTS_DATA
//       : PROJECTS_DATA.filter(
//           (project) =>
//             project.tag.toLowerCase() === activeFilter.toLowerCase()
//         );

//   return (
//     <section id="projects" className="py-16 md:py-24 bg-[#FAFAFB]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
//           <div>
//             <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
//               Our Work Portfolio
//             </span>

//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Recent Painting Projects in Pune
//             </h2>

//             <p className="mt-2 text-sm text-slate-600">
//               Explore our residential, commercial, bungalow, flat and interior
//               painting projects across Pune and nearby areas.
//             </p>
//           </div>

//           <div className="flex items-center gap-2">
//             <a
//               className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1"
//               href="#quotation"
//             >
//               Get estimate for your project
//               <i className="fa-solid fa-arrow-right text-[10px]"></i>
//             </a>
//           </div>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">

//           {filters.map((filter) => (
//             <button
//               key={filter}
//               type="button"
//               onClick={() => setActiveFilter(filter)}
//               className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-300 ${
//                 activeFilter === filter
//                   ? 'bg-brand-orange text-white border-brand-orange shadow-md'
//                   : 'bg-white text-slate-600 border-slate-200 hover:border-brand-orange hover:text-brand-orange'
//               }`}
//             >
//               {filter}
//             </button>
//           ))}

//         </div>

//         {/* Project Cards Grid */}
//         {filteredProjects.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//             {filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 id={`project-card-${project.id}`}
//                 className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-orange shadow-sm hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
//               >

//                 {/* Image */}
//                 <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900 flex items-center justify-center">

//                   <img
//                     alt={`${project.title} - ${project.tag} painting project in ${project.location} by Soham Painting Services`}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     src={project.imageUrl}
//                     width={600}
//                     height={400}
//                     referrerPolicy="no-referrer"
//                     loading="lazy"
//                     onError={(e) => {
//                       const target = e.target as HTMLImageElement;
//                       target.src =
//                         'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
//                     }}
//                   />

//                   {/* Category */}
//                   <div className="absolute top-3 left-3 bg-brand-charcoal text-white text-[10px] font-bold px-2.5 py-1 rounded z-10">
//                     {project.tag}
//                   </div>

//                   {/* Location */}
//                   <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm z-10 flex items-center gap-1">
//                     <i className="fa-solid fa-location-dot text-brand-orange mr-1"></i>
//                     {project.location}
//                   </div>

//                 </div>

//                 {/* Content */}
//                 <div className="p-5">

//                   <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-orange transition-colors">
//                     {project.title}
//                   </h3>

//                   <p className="text-xs text-slate-500 mt-1 leading-relaxed">
//                     {project.description}
//                   </p>

//                 </div>

//               </div>
//             ))}

//           </div>
//         ) : (
//           /* No Projects */
//           <div className="text-center py-16">
//             <i className="fa-solid fa-images text-3xl text-slate-300 mb-3"></i>

//             <p className="text-sm text-slate-500">
//               No projects available in this category yet.
//             </p>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };



import React, { useMemo, useState } from 'react';
import { PROJECTS_DATA } from '../data/content';

type Filter = 'All' | 'Commercial' | 'Bungalow' | 'Flats';

const FILTERS: Filter[] = [
  'All',
  'Commercial',
  'Bungalow',
  'Flats',
];

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] =
    useState<Filter>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return PROJECTS_DATA;
    }

    return PROJECTS_DATA.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="bg-[#FAFAFB] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-3 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-orange">
              Our Work Portfolio
            </span>

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Recent Painting Projects in Pune
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Explore our residential, commercial, bungalow,
              flat and interior painting projects across Pune
              and nearby areas.
            </p>
          </div>

          <a
            href="#quotation"
            className="inline-flex w-fit items-center gap-2 text-xs font-bold text-brand-orange transition-all duration-300 hover:gap-3 hover:underline sm:text-sm"
          >
            Get estimate for your project
            <i className="fa-solid fa-arrow-right text-[10px]" />
          </a>
        </div>

        {/* Filters */}
        <div
          className="mb-8 flex flex-wrap items-center justify-center gap-2.5 md:justify-start"
          role="tablist"
          aria-label="Project categories"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  transition-all
                  duration-300
                  sm:text-sm

                  ${
                    isActive
                      ? `
                        border-brand-orange
                        bg-brand-orange
                        text-white
                        shadow-md
                        shadow-orange-200
                      `
                      : `
                        border-slate-200
                        bg-white
                        text-slate-600
                        hover:-translate-y-0.5
                        hover:border-brand-orange
                        hover:text-brand-orange
                        hover:shadow-sm
                      `
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project Count */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs text-slate-500 sm:text-sm">
            <span className="font-bold text-slate-800">
              {filteredProjects.length}
            </span>{' '}
            {filteredProjects.length === 1 ? 'Project' : 'Projects'}

            {activeFilter !== 'All' && (
              <>
                {' '}in{' '}
                <span className="font-bold text-brand-orange">
                  {activeFilter}
                </span>
              </>
            )}
          </p>
        </div>

        {/* Projects */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <EmptyProjects
            onReset={() => setActiveFilter('All')}
          />
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof PROJECTS_DATA)[number];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}) => {
  return (
    <article
      id={`project-card-${project.id}`}
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-brand-orange
        hover:shadow-elevated
      "
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-slate-900 sm:h-56">
        <img
          src={project.imageUrl}
          alt={`${project.title} - ${project.tag} in ${project.location}`}
          width={600}
          height={400}
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
          onError={(event) => {
            const image = event.currentTarget;

            image.onerror = null;
            image.src =
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Tag */}
        <span className="absolute left-3 top-3 rounded-md bg-brand-charcoal px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
          {project.tag}
        </span>

        {/* Location */}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <i className="fa-solid fa-location-dot text-brand-orange" />
          {project.location}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-brand-orange">
          {project.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
          {project.description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {project.category}
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-brand-orange transition-all duration-300 group-hover:translate-x-1">
            <i className="fa-solid fa-arrow-right text-[10px]" />
          </span>
        </div>
      </div>
    </article>
  );
};

interface EmptyProjectsProps {
  onReset: () => void;
}

const EmptyProjects: React.FC<EmptyProjectsProps> = ({
  onReset,
}) => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-5 py-16 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50">
        <i className="fa-solid fa-images text-2xl text-brand-orange" />
      </div>

      <h3 className="text-base font-bold text-slate-800">
        No projects found
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        No projects are available in this category yet.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="
          mt-5
          rounded-full
          bg-brand-orange
          px-5
          py-2.5
          text-xs
          font-bold
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:opacity-90
        "
      >
        View All Projects
      </button>
    </div>
  );
};
