import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'AI Agent Development',
}) => {
  const [step, setStep] = useState<'schedule' | 'confirmed'>('schedule');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM EST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: preselectedService,
    notes: '',
  });
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const dateOptions = ['Tomorrow', 'Thursday', 'Friday', 'Next Monday'];
  const slotOptions = [
    '10:00 AM EST',
    '11:30 AM EST',
    '2:00 PM EST',
    '3:30 PM EST',
    '4:45 PM EST',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setFormError('Please provide your name and work email.');
      return;
    }
    setFormError('');
    setStep('confirmed');
  };

  const handleResetAndClose = () => {
    setStep('schedule');
    setFormError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div
        className="relative w-full max-w-xl bg-neutral-950 text-white rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
            <h3 id="consultation-title" className="text-base font-bold font-display text-white">
              Schedule a Discovery Consultation
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1 text-neutral-400 hover:text-white rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {step === 'confirmed' ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#E50914]/15 rounded-full flex items-center justify-center mx-auto text-[#E50914] border border-[#E50914]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-display text-white">
                Consultation Reserved
              </h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. A calendar
                invitation with meeting link for{' '}
                <strong className="text-[#E50914]">{selectedDate} at {selectedSlot}</strong> has been
                queued for <span className="underline">{formData.email}</span>.
              </p>

              <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800 text-xs text-neutral-300 text-left space-y-1.5 max-w-md mx-auto">
                <div className="font-semibold text-white">Meeting Summary:</div>
                <div>· Topic: {formData.service} Review</div>
                <div>· Host: Isaiah Adebayo (AI Automation Specialist)</div>
                <div>· Duration: 30 minutes via Google Meet</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-[#E50914] hover:bg-[#c90812] rounded-md transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-6">
              {/* Date selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Select Day
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {dateOptions.map((date) => (
                    <button
                      key={date}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={`py-2 px-3 text-xs font-semibold rounded-md border text-center transition-colors ${
                        selectedDate === date
                          ? 'bg-[#E50914] text-white border-[#E50914]'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-600'
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slot selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Select Available Window (30 Min)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {slotOptions.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 px-3 text-xs font-mono rounded-md border text-center transition-colors ${
                        selectedSlot === slot
                          ? 'bg-white text-black font-bold border-white'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-600'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-neutral-900 text-white text-sm rounded-md px-3.5 py-2.5 border border-neutral-800 focus:outline-none focus:border-[#E50914]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@agency.com"
                    className="w-full bg-neutral-900 text-white text-sm rounded-md px-3.5 py-2.5 border border-neutral-800 focus:outline-none focus:border-[#E50914]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Business Name & Website
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Jenkins Capital / jenkinscapital.com"
                  className="w-full bg-neutral-900 text-white text-sm rounded-md px-3.5 py-2.5 border border-neutral-800 focus:outline-none focus:border-[#E50914]"
                />
              </div>

              {formError && (
                <p className="text-xs text-[#E50914] font-medium">{formError}</p>
              )}

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-[#E50914] hover:bg-[#c90812] active:bg-[#a6060e] rounded-md transition-colors shadow-md"
                >
                  <span>Confirm Consultation Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center text-xs text-neutral-400">
                  Prefer direct messaging or calling?{' '}
                  <a
                    href="https://wa.me/2348140445713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-mono font-semibold"
                  >
                    WhatsApp
                  </a>{' '}
                  or{' '}
                  <a
                    href="tel:+2348140445713"
                    className="text-[#E50914] hover:underline font-mono font-semibold"
                  >
                    Call: 08140445713
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
