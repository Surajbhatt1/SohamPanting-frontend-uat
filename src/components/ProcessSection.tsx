import React from 'react';
import { WORKFLOW_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-orange text-xs font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
            Seamless Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Work — 4 Simple Steps
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            From first call to spotless clean handover, experience zero stress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 relative">
          {WORKFLOW_STEPS.map((stepItem) => (
            <div
              key={stepItem.step}
              className="relative bg-[#FAFAFB] p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-brand-orange transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white font-extrabold text-sm flex items-center justify-center mb-5 shadow-sm">
                  {stepItem.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{stepItem.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{stepItem.description}</p>
              </div>
              <div className="mt-4 text-xs font-semibold text-brand-orange flex items-center gap-1 pt-2">
                <i className={stepItem.badgeIcon}></i> {stepItem.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
