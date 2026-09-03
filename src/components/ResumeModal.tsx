import React, { useEffect } from 'react';
import { X, Printer, Download, MapPin, Phone, Mail, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';
import defaultPhoto from '../assets/images/1782225327503.png';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profilePhoto?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profilePhoto = defaultPhoto,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Action Bar */}
        <div className="px-6 py-4 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-2 text-sm font-bold text-slate-800 dark:text-slate-100">
              Rishabh Mehra — Curriculum Vitae (CV)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-2xs transition-colors cursor-pointer"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body matching CV Layout */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6">
          <div
            id="printable-cv-document"
            className="bg-white text-slate-800 rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[900px]"
          >
            {/* Left Column (Dark Navy Blue Sidebar matching the CV) */}
            <div className="md:col-span-4 bg-[#0a192f] text-slate-100 p-6 space-y-6">
              
              {/* Photo */}
              <div className="flex justify-center">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-400/80 shadow-md">
                  <img
                    src={profilePhoto}
                    alt="Rishabh Mehra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* CONTACT SECTION */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold tracking-wider uppercase text-blue-400 border-b border-blue-900 pb-1.5">
                  Contact
                </h4>
                <div className="space-y-3 text-xs text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-white">Address:</span>
                      <span>6, Maqbool Road near PNB, Asr, Punjab 143001</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-white">Phone:</span>
                      <a href="tel:+916280097338" className="hover:underline">
                        +91-6280097338
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-white">E-mail:</span>
                      <a href="mailto:eipl.rishabh@gmail.com" className="hover:underline break-all">
                        eipl.rishabh@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WEBSITES, PORTFOLIOS, PROFILES */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold tracking-wider uppercase text-blue-400 border-b border-blue-900 pb-1.5 flex items-center gap-1.5">
                  <Globe className="w-4 h-4" />
                  <span>Websites & Profiles</span>
                </h4>
                <ul className="space-y-2 text-[11px] text-slate-300">
                  <li className="break-all flex items-start gap-1.5">
                    <span className="text-blue-400">•</span>
                    <a href="https://allgovernmentjobs.in" target="_blank" rel="noreferrer" className="hover:underline text-blue-300">
                      https://allgovernmentjobs.in
                    </a>
                  </li>
                  <li className="break-all flex items-start gap-1.5">
                    <span className="text-blue-400">•</span>
                    <a href="https://www.edgeinfoways.com" target="_blank" rel="noreferrer" className="hover:underline text-blue-300">
                      https://www.edgeinfoways.com
                    </a>
                  </li>
                  <li className="break-all flex items-start gap-1.5">
                    <span className="text-blue-400">•</span>
                    <a href="https://shubhamfabrics.blogspot.com" target="_blank" rel="noreferrer" className="hover:underline text-blue-300">
                      https://shubhamfabrics.blogspot.com
                    </a>
                  </li>
                  <li className="break-all flex items-start gap-1.5">
                    <span className="text-blue-400">•</span>
                    <a href="https://loop-ai-customer-feedback-a8hk.onrender.com" target="_blank" rel="noreferrer" className="hover:underline text-blue-300">
                      https://loop-ai-customer-feedback-a8hk.onrender.com
                    </a>
                  </li>
                  <li className="break-all flex items-start gap-1.5">
                    <span className="text-blue-400">•</span>
                    <a href="https://shubham-punjabi-house.store.shoopy.in" target="_blank" rel="noreferrer" className="hover:underline text-blue-300">
                      https://shubham-punjabi-house.store.shoopy.in
                    </a>
                  </li>
                </ul>
              </div>

              {/* KEY SKILLS */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold tracking-wider uppercase text-blue-400 border-b border-blue-900 pb-1.5 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Key Skills</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>C++, J2SE</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>HTML, CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>React</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Node.js, Express.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Bootstrap</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Javascript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>WordPress</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Paid Ads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Oracle SQL</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column (White Main Details) */}
            <div className="md:col-span-8 p-6 sm:p-8 space-y-6">
              
              {/* Header */}
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl font-extrabold text-[#0a192f] uppercase tracking-wide">
                  Rishabh Mehra
                </h2>
                <div className="inline-block mt-1 px-3 py-1 bg-[#0a192f] text-white text-xs font-bold uppercase tracking-wider rounded">
                  Digital Marketing Executive
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  An independent and self-motivated graduate looking for opportunity in Web or Software application development department where I can utilise my extensive knowledge I have gained during my course & my professional experience over the years.
                </p>
              </div>

              {/* WORK EXPERIENCE */}
              <div className="space-y-5">
                <h3 className="text-sm font-extrabold tracking-wider uppercase text-[#0a192f] flex items-center gap-2 border-b pb-1.5 border-slate-200">
                  <Briefcase className="w-4 h-4 text-blue-700" />
                  <span>Work Experience</span>
                </h3>

                {/* Job 1 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">
                      Technical Support Officer
                    </h4>
                  </div>
                  <div className="text-xs font-semibold text-slate-600 italic">
                    Kochar Infotech Pvt Ltd.
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                    <li>Databases Administration: Backed up files used for official directories in Oracle Database using SQL.</li>
                    <li>Responded to email enquiries from clients regarding the progress of their orders.</li>
                    <li>Done Inbound Calling in INDIAMART.</li>
                    <li>Worked as mentor for streamlined ad-serving platforms as an affiliate marketer.</li>
                    <li>Served as TSO For networking problems like modems, wifi etc.</li>
                    <li>Responding to customer enquiries & resolving technical issues at front desk also.</li>
                    <li>Adjusting network settings to optimize performance & security for team members.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">
                      Digital Marketing Executive
                    </h4>
                  </div>
                  <div className="text-xs font-semibold text-slate-600 italic">
                    Edge Infoways Pvt Ltd
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                    <li>Created physical & prototype design functions for websites. Worked on the Back-end of WORDPRESS. Worked on blog- https://allgovernmentjobs.in. They also have app on Playstore.</li>
                    <li>Also Dealt with websites like PropertyBazar.com & Rishtey.com.</li>
                    <li>Created high-quality content for various platforms such as Blogs, articles, Social media posts, email campaigns etc.</li>
                    <li>Identifying relevant keywords to improve SE Rankings.</li>
                    <li>Proofreading and editing content for clarity, accuracy & consistency.</li>
                    <li>Worked on Grammarly & other Translation scripts.</li>
                    <li>Maintained the facebook & Instagram page of https://www.edgeinfoways.com.</li>
                    <li>Made a fully functional website whose URL is https://shubhamfabrics.blogspot.com.</li>
                    <li>Visit my wordpress E-COMMERCE Website Shubham Punjabi House built by elementor URL- https://shubham-punjabi-house.store.shoopy.in.</li>
                    <li>Made a Project Loop AI Intelligence Feedback with Node.js Web app having URL- https://loop-ai-customer-feedback-a8hk.onrender.com.</li>
                  </ul>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-extrabold tracking-wider uppercase text-[#0a192f] flex items-center gap-2 border-b pb-1.5 border-slate-200">
                  <GraduationCap className="w-4 h-4 text-blue-700" />
                  <span>Education</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="font-bold text-slate-900">
                      Bachelor of Computer Applications
                    </div>
                    <div className="text-slate-600 italic">
                      Guru Nanak Dev University
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      DAV International School
                    </div>
                    <div className="text-slate-600 italic">
                      From 1-12th
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
