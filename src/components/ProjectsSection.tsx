import React, { useState } from 'react';
import {
  ExternalLink,
  Copy,
  Check,
  FolderGit2,
  Globe,
  ShoppingCart,
  Layers,
  Sparkles,
  ArrowUpRight,
  Filter,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-dev', label: 'Full-Stack & Web Apps' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'portal', label: 'Portals & Media' },
    { id: 'marketing-seo', label: 'Agency & SEO' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Works & Live Deployments</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Featured Projects & Portfolios
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Every project listed in my official CV, featuring live production URLs, e-commerce storefronts, and cloud applications.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-10">
          <div
            id="projects-filter-bar"
            className="inline-flex flex-wrap items-center justify-center gap-1 p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`project-filter-${cat.id}`}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => {
            const isCopied = copiedId === project.id;
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-lg transition-all duration-200 overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                      {project.badge}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Detailed Points */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                    {project.detailedPoints.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer URL & External Links */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between gap-2">
                  {project.liveUrl ? (
                    <>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="text-xs text-slate-500 dark:text-slate-400 truncate font-mono">
                          {project.displayUrl || project.liveUrl.replace('https://', '')}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleCopyLink(project.liveUrl!, project.id)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                          title="Copy project URL"
                        >
                          {isCopied ? (
                            <Check className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                        <a
                          id={`visit-project-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-2xs transition-colors"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="text-xs text-slate-400 italic">
                      Client Portal / Enterprise Work
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Looking for tailored web solutions or a dedicated developer?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              I bring combined expertise in frontend engineering, backend Node.js APIs, and organic digital marketing.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
