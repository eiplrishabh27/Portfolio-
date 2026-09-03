/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import defaultProfilePhoto from './assets/images/1782225327503.png';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rishabh_portfolio_theme');
      if (saved !== null) {
        return saved === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Exact profile photo state
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('rishabh_exact_profile_photo');
    }
    return null;
  });

  const handlePhotoChange = (newPhoto: string) => {
    setCustomPhoto(newPhoto);
    if (typeof window !== 'undefined') {
      localStorage.setItem('rishabh_exact_profile_photo', newPhoto);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('rishabh_exact_profile_photo');
    }
  };

  const currentPhoto = customPhoto || defaultProfilePhoto;

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('rishabh_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('rishabh_portfolio_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-200">
      {/* Sticky Top Navigation Bar with Dark Mode Switch */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content-flow">
        {/* Hero / Overview Section */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          profilePhoto={currentPhoto}
          onPhotoChange={handlePhotoChange}
          onResetPhoto={handleResetPhoto}
          isCustomPhoto={!!customPhoto}
        />

        {/* Technical & Marketing Skills */}
        <SkillsSection />

        {/* Experience Timeline & Education */}
        <ExperienceSection />

        {/* Projects & Live Portals Showcase */}
        <ProjectsSection />

        {/* Contact Form & Direct Reaching Channels */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive CV Modal with Print & Download Options */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        profilePhoto={currentPhoto}
      />
    </div>
  );
}
