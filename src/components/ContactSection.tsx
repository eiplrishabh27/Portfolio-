import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  Clock,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'Full-time Developer Opportunity',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry details.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleCopyEmail = (emailStr: string) => {
    navigator.clipboard.writeText(emailStr);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      inquiryType: 'Full-time Developer Opportunity',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Contact & Hire Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have a project in mind, an engineering role open, or want to discuss a digital campaign? Send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Reach out directly via phone, email, or WhatsApp. I am located in Amritsar, Punjab and open to full-time remote or on-site opportunities.
              </p>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 truncate block"
                    >
                      {contactInfo.email}
                    </a>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Alt: {contactInfo.secondaryEmail}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail(contactInfo.email)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                      Phone & WhatsApp
                    </div>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 truncate block"
                    >
                      {contactInfo.phone}
                    </a>
                    <a
                      href={`https://wa.me/916280097338`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>Chat directly on WhatsApp</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Address Item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
                      Location / Address
                    </div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {contactInfo.address.street}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.pincode}, {contactInfo.address.country}
                    </p>
                  </div>
                </div>

              </div>

              {/* Working Hours / Availability */}
              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/50 flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-slate-900 dark:text-white">Availability:</span> Open for immediate joining, full-time positions, and consulting projects in Web Development & Digital Growth.
                </div>
              </div>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xs">
              
              {isSubmitted ? (
                <div
                  id="contact-form-success-state"
                  className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-md mx-auto">
                    Your message regarding &ldquo;{formData.subject}&rdquo; has been received. I will review your inquiry and get back to you shortly at <span className="font-semibold">{formData.email}</span>.
                  </p>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      id="reset-contact-form-btn"
                      type="button"
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-2xs transition-colors"
                    >
                      Open in Email Client
                    </a>
                  </div>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Fill in the form below and I will respond promptly.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name-input"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-rose-400 focus:ring-rose-400'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email-input"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-400'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Inquiry Type Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-phone-input"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone-input"
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-inquiry-type"
                        className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Opportunity / Inquiry Type
                      </label>
                      <select
                        id="contact-inquiry-type"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      >
                        <option value="Full-time Developer Opportunity">Full-time Web/Software Developer</option>
                        <option value="Digital Marketing & SEO Role">Digital Marketing / SEO Role</option>
                        <option value="WordPress & E-Commerce Project">WordPress & E-Commerce Store</option>
                        <option value="Full-Stack Node.js Application">Full-Stack Node.js App</option>
                        <option value="General Technical Consultation">General Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-subject-input"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      placeholder="e.g. Opportunity for Web Developer at our company"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-500 font-medium">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message-input"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      placeholder="Share details about the role, project requirements, or timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-70 shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
