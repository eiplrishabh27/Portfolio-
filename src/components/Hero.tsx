import React, { useRef, useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowDown,
  FileText,
  Send,
  ExternalLink,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Camera,
  RotateCcw,
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import defaultProfilePhoto from '../assets/images/1782225327503.png';

interface HeroProps {
  onOpenResume: () => void;
  profilePhoto?: string;
  onPhotoChange?: (newPhoto: string) => void;
  onResetPhoto?: () => void;
  isCustomPhoto?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  profilePhoto = defaultProfilePhoto,
  onPhotoChange,
  onResetPhoto,
  isCustomPhoto = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file?: File) => {
    if (!file || !onPhotoChange) return;
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        onPhotoChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  return (
    <section
      id="about"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-200 dark:border-slate-800/80"
    >
      {/* Decorative background grid and soft glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 dark:opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 right-5 w-96 h-96 -z-10 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 -z-10 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full Stack Developer & Digital Marketing Roles</span>
            </div>

            {/* Name and Designation */}
            <div className="space-y-2">
              <h1
                id="hero-developer-name"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  {contactInfo.name}
                </span>
              </h1>
              <p
                id="hero-developer-title"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300"
              >
                Digital Marketing Executive & Web Application Developer
              </p>
            </div>

            {/* Objective statement from CV */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-left">
              <p className="flex items-start gap-2.5">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>
                  &ldquo;An independent and self-motivated graduate looking for opportunity in Web or Software application development department where I can utilise my extensive knowledge I have gained during my course & my professional experience over the years.&rdquo;
                </span>
              </p>
            </div>

            {/* Contact Pills from CV */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Amritsar, Punjab 143001</span>
              </span>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-2xs"
                title="Call phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-2xs"
                title="Send email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{contactInfo.email}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                id="hero-preview-cv-btn"
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-2xs transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>View / Print CV</span>
              </button>

              <a
                id="hero-contact-me-btn"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Contact Form</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">BCA</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">GNDU Graduate</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">6+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Live Portals & Apps</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">2+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Tech Companies</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Full-Stack</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">React, Node, SQL</div>
              </div>
            </div>

          </div>

          {/* Profile Card / Visual Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 opacity-30 blur-lg" />
              
              <div className="relative rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 p-6 shadow-xl space-y-6">
                
                {/* Hidden file input for direct upload */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                  className="hidden"
                />

                {/* Profile Photo with Verified Badge & Drag/Drop Upload */}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-lg transition-all ring-4 ${
                    isDragging
                      ? 'ring-blue-500 scale-105 bg-blue-50/20'
                      : 'ring-slate-100 dark:ring-slate-700'
                  } group`}
                >
                  <img
                    id="profile-headshot-image"
                    src={profilePhoto}
                    alt="Rishabh Mehra"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Verified status badge */}
                  <div className="absolute bottom-2.5 right-2.5 bg-emerald-500 text-white p-1.5 rounded-full shadow-md z-10 ring-2 ring-white dark:ring-slate-800">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>

                  {/* Direct upload hover trigger */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white cursor-pointer z-20 backdrop-blur-xs px-4 text-center"
                    title="Click or drop 1782225327503.png here"
                  >
                    <div className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-transform transform group-hover:scale-110">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-black/50">
                      Upload Exact Photo
                    </span>
                    <span className="text-[10px] text-slate-300">
                      Drop 1782225327503.png or click to browse
                    </span>
                  </button>
                </div>

                {isCustomPhoto && (
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 className="w-3 h-3" /> Exact Photo Active
                    </span>
                    {onResetPhoto && (
                      <button
                        onClick={onResetPhoto}
                        className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                        title="Reset to default"
                      >
                        <RotateCcw className="w-3 h-3" /> Reset
                      </button>
                    )}
                  </div>
                )}

                {/* Identity summary */}
                <div className="text-center space-y-1">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Rishabh Mehra
                  </h2>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Full Stack Developer & Digital Marketing Executive
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Guru Nanak Dev University (BCA)
                  </p>
                </div>

                {/* Quick key skills badges */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                    Core Competencies
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {['React', 'Node.js', 'Express.js', 'WordPress', 'Oracle SQL', 'SEO', 'Paid Ads', 'C++ / Java'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live project highlights preview button */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/80">
                  <a
                    href="https://loop-ai-customer-feedback-a8hk.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-blue-50/70 hover:bg-blue-100/70 dark:bg-blue-950/40 dark:hover:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-semibold transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Project: Loop AI Feedback App</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
