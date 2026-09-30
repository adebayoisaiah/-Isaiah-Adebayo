import React, { useState } from 'react';
import { Send, Calendar, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, RefreshCw, Phone, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  onBookConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBookConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    serviceNeeded: 'AI Agent Development',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceOptions = [
    'AI Agent Development',
    'Lead Capture Automation',
    'Lead Qualification',
    'Conversational AI',
    'Follow-Up Automation',
    'Appointment Booking',
    'Other',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please specify your company or business name.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your process or inquiry.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission with clean state transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      businessName: '',
      serviceNeeded: 'AI Agent Development',
      message: '',
    });
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-black text-white relative border-b border-neutral-900"
    >
      {/* Hairline subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E50914]">
              <span className="w-2 h-0.5 bg-[#E50914]" />
              <span>Direct Inquiries</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Let's Automate Your Business
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Have a repetitive process, lead management problem, or AI idea? Let's discuss how
              automation can help.
            </p>

            <div className="p-6 bg-neutral-950 rounded-xl border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck className="w-5 h-5 text-[#E50914]" />
                <span>What happens next?</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E50914] font-bold">1.</span>
                  <span>Review of your process and automation bottlenecks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E50914] font-bold">2.</span>
                  <span>Proposed technical architecture (AI agents + GHL workflows)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E50914] font-bold">3.</span>
                  <span>Clear timeline, implementation milestones, and fixed scope</span>
                </li>
              </ul>
            </div>

            {/* Direct Instant Channels: WhatsApp & Phone */}
            <div className="space-y-3 pt-1">
              <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                Direct Channels (Fastest Response)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/2348140445713?text=Hi%20Isaiah%2C%20I%20am%20interested%20in%20AI%20Automation%20and%20AI%20Agents%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-emerald-500/60 rounded-xl transition-all group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                      Chat on WhatsApp
                    </div>
                    <div className="text-sm font-bold text-white font-mono">
                      08140445713
                    </div>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a
                  href="tel:+2348140445713"
                  className="flex items-center gap-3 p-3.5 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-[#E50914]/60 rounded-xl transition-all group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 border border-[#E50914]/30 flex items-center justify-center text-[#E50914] group-hover:bg-[#E50914] group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-[11px] font-semibold text-[#E50914] uppercase tracking-wider">
                      Direct Phone Call
                    </div>
                    <div className="text-sm font-bold text-white font-mono">
                      08140445713
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Consultation Shortcut Button */}
            <div className="pt-2">
              <div className="text-xs uppercase font-mono text-neutral-400 mb-2">
                Need immediate calendar booking?
              </div>
              <button
                onClick={onBookConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#E50914]" />
                <span>Book a Consultation Directly</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-950 p-7 sm:p-10 rounded-2xl border border-neutral-800 shadow-2xl transition-all duration-300">
              {isSuccess ? (
                <div
                  className="success-transition-container text-left space-y-6 py-2"
                  role="status"
                  aria-live="polite"
                >
                  {/* Status Header & Animated Checkmark */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 flex items-center justify-center text-[#E50914] success-icon-animated shrink-0">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#E50914]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
                        <span>Transmission Confirmed</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                        Message Sent
                      </h3>
                    </div>
                  </div>

                  {/* Confirmation Body */}
                  <div className="space-y-3 text-neutral-300 text-sm leading-relaxed">
                    <p>
                      Thank you for reaching out, <strong className="text-white font-semibold">{formData.name}</strong>. Your inquiry regarding <span className="text-[#E50914] font-medium">{formData.serviceNeeded}</span> has been sent successfully.
                    </p>
                    <p className="text-xs text-neutral-400">
                      Isaiah will review your workflow requirements and respond promptly within 24 business hours at <strong className="text-neutral-200">{formData.email}</strong>.
                    </p>
                  </div>

                  {/* Sent Data Summary Card */}
                  <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 sm:p-5 space-y-2.5 text-xs">
                    <div className="font-mono uppercase text-neutral-400 text-[11px] pb-2 border-b border-neutral-800 flex items-center justify-between">
                      <span>Inquiry Summary</span>
                      <span className="text-[#E50914] font-sans font-semibold">Priority Logged</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-300 pt-1">
                      <div>
                        <span className="text-neutral-500 block text-[11px]">Client / Organization:</span>
                        <span className="text-white font-medium">{formData.businessName || formData.name}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block text-[11px]">Primary Solution:</span>
                        <span className="text-white font-medium">{formData.serviceNeeded}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block text-[11px]">Contact Email:</span>
                        <span className="text-white font-medium">{formData.email}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block text-[11px]">Expected Response:</span>
                        <span className="text-[#E50914] font-medium">Within 24 Hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Next Step Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="button"
                      onClick={onBookConsultation}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#E50914] hover:bg-[#c90812] active:bg-[#a6060e] rounded-md transition-colors shadow-md"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Direct Consultation</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Full Name <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Vance"
                        className={`w-full bg-neutral-900 text-white placeholder-neutral-500 text-sm rounded-md px-4 py-3 border focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-[#E50914] focus:border-[#E50914]'
                            : 'border-neutral-800 focus:border-neutral-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-[#E50914] mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Business Email <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@company.com"
                        className={`w-full bg-neutral-900 text-white placeholder-neutral-500 text-sm rounded-md px-4 py-3 border focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-[#E50914] focus:border-[#E50914]'
                            : 'border-neutral-800 focus:border-neutral-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-[#E50914] mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Business Name */}
                    <div>
                      <label htmlFor="contact-biz" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Business Name <span className="text-[#E50914]">*</span>
                      </label>
                      <input
                        id="contact-biz"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Logistics"
                        className={`w-full bg-neutral-900 text-white placeholder-neutral-500 text-sm rounded-md px-4 py-3 border focus:outline-none transition-colors ${
                          errors.businessName
                            ? 'border-[#E50914] focus:border-[#E50914]'
                            : 'border-neutral-800 focus:border-neutral-500'
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-xs text-[#E50914] mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.businessName}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Needed Dropdown */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Service Needed <span className="text-[#E50914]">*</span>
                      </label>
                      <select
                        id="contact-service"
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full bg-neutral-900 text-white text-sm rounded-md px-4 py-3 border border-neutral-800 focus:outline-none focus:border-neutral-500 transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-neutral-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Message & Details <span className="text-[#E50914]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your current process, where leads or tasks get delayed, and what tools you currently run..."
                      className={`w-full bg-neutral-900 text-white placeholder-neutral-500 text-sm rounded-md px-4 py-3 border focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-[#E50914] focus:border-[#E50914]'
                          : 'border-neutral-800 focus:border-neutral-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-[#E50914] mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#E50914] hover:bg-[#c90812] active:bg-[#a6060e] disabled:opacity-60 rounded-md transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={onBookConsultation}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
                    >
                      <Calendar className="w-4 h-4 text-[#E50914]" />
                      <span>Book a Consultation</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
