import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="bg-neutral-950 text-white p-4 rounded-2xl border border-neutral-800 shadow-2xl w-72 space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-[#E50914]/40 shrink-0 flex items-center justify-center font-display font-black text-xs text-white">
                <span className="text-[#E50914]">I</span>A
              </div>
              <div>
                <div className="text-xs font-bold text-white font-display">Isaiah Adebayo</div>
                <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online for Inquiries</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-neutral-400 hover:text-white rounded-md transition-colors"
              aria-label="Close contact popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/2348140445713?text=Hi%20Isaiah%2C%20I%20am%20interested%20in%20AI%20Automation%20and%20AI%20Agents%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-xl transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                  WhatsApp Direct
                </div>
                <div className="text-xs font-mono font-bold text-white">08140445713</div>
              </div>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+2348140445713"
              className="flex items-center gap-3 p-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-[#E50914]/60 rounded-xl transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#E50914] flex items-center justify-center text-white shrink-0 shadow-xs">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-semibold text-[#E50914] uppercase tracking-wider">
                  Call Isaiah
                </div>
                <div className="text-xs font-mono font-bold text-white">08140445713</div>
              </div>
            </a>
          </div>

          <p className="text-[10px] text-neutral-400 text-center pt-1">
            Fastest response for urgent client workflows
          </p>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <div className="flex items-center gap-2">
        <a
          href="https://wa.me/2348140445713?text=Hi%20Isaiah%2C%20I%20am%20interested%20in%20AI%20Automation%20and%20AI%20Agents%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/90 hover:bg-black text-white text-xs font-semibold border border-neutral-800 hover:border-emerald-500/50 shadow-lg backdrop-blur-xs transition-all group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-neutral-300 group-hover:text-emerald-400 transition-colors">
            WhatsApp: <span className="font-mono text-white">08140445713</span>
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-13 h-13 rounded-full bg-neutral-950 hover:bg-black text-white border border-neutral-800 hover:border-[#E50914] shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 focus:outline-none relative"
          aria-label="Toggle contact options (WhatsApp and Phone)"
          title="Direct Contact & WhatsApp: 08140445713"
        >
          <span className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black" />
          {isOpen ? (
            <X className="w-5 h-5 text-neutral-300" />
          ) : (
            <div className="flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
