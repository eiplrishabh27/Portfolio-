import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Building2,
  ShieldCheck,
  Globe2,
} from 'lucide-react';
import { experiences, educationList } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('edge-infoways');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History & Roles</span>
          </div>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Proven track record in web development, database administration, networking solutions, and digital marketing.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto mb-20">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                id={`experience-card-${exp.id}`}
                className="relative rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all overflow-hidden"
              >
                {/* Header ribbon */}
                <div className="p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                          {exp.type}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-rose-500" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-base font-semibold text-blue-600 dark:text-blue-400">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Collapse' : 'Expand Details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Collapsible Detailed Responsibilities */}
                {isExpanded && (
                  <div className="px-6 pb-7 sm:px-7 pt-2 border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-900/30">
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Key Responsibilities & Project Deliverables (From CV)
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-normal"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                          <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                            Key Accomplishments
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            {exp.achievements.map((ach, i) => (
                              <div
                                key={i}
                                className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2"
                              >
                                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Education Section Header */}
        <div id="education" className="max-w-3xl mx-auto text-center space-y-3 mb-10 pt-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Formal degrees and foundational academic institutions listed on CV.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              id={`education-card-${edu.id}`}
              className="rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 p-6 sm:p-7 shadow-xs space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  {edu.period}
                </span>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h4>
                <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {edu.institution}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {edu.description}
              </p>

              {edu.details && (
                <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700">
                  {edu.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
