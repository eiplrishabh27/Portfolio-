import React, { useState } from 'react';
import {
  Code,
  Server,
  Database,
  TrendingUp,
  Search,
  CheckCircle,
  Layers,
  Cpu,
  Globe,
  Award,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', title: 'All Skills', icon: Layers },
    { id: 'web-development', title: 'Frontend & UI', icon: Code },
    { id: 'backend-systems', title: 'Backend & Systems', icon: Server },
    { id: 'database-networking', title: 'Databases & Networks', icon: Database },
    { id: 'marketing-cms', title: 'SEO, Ads & CMS', icon: TrendingUp },
  ];

  // Filter skills based on category and search
  const filteredCategories = skillCategories
    .filter((cat) => activeCategory === 'all' || cat.id === activeCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          skill.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (skill.highlight && skill.highlight.toLowerCase().includes(searchTerm.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
            <Award className="w-3.5 h-3.5" />
            <span>Technical & Domain Expertise</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Skills & Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Directly derived from hands-on work at Kochar Infotech, Edge Infoways, and academic training at Guru Nanak Dev University.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div
            id="skills-category-tabs"
            className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs w-full sm:w-auto"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`skill-filter-${cat.id}`}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="skills-search-input"
              type="text"
              placeholder="Search skills (e.g., React, SQL)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="text-slate-500 dark:text-slate-400 text-base">
                No skills matching &quot;{searchTerm}&quot;. Try another search keyword.
              </p>
            </div>
          ) : (
            filteredCategories.map((group) => (
              <div
                key={group.id}
                id={`skill-group-${group.id}`}
                className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/90 p-6 sm:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700/60">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/60">
                    {getCategoryIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      id={`skill-item-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500 transition-all"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white text-base">
                            {skill.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {skill.experience}
                          </div>
                        </div>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mb-2.5">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {skill.highlight && (
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Key Focus: {skill.highlight}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* CV Skills Summary Checklist Card */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <h3 className="text-xl font-bold tracking-tight">
                Full-Spectrum Technical & Digital Capability
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rishabh bridges the gap between software development (React, Node.js, Oracle SQL, C++, Java) and growth marketing (SEO keyword ranking, Paid ads, WordPress, and affiliate platforms).
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              >
                <span>View Applied Projects</span>
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              >
                <span>Discuss Opportunities</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
