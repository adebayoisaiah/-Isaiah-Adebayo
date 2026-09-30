import React from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'AI Agents', href: '#ai-agents' },
    { name: 'Automation', href: '#automation' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Behance', href: 'https://behance.net' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-black border border-neutral-800 flex items-center justify-center shrink-0 p-0.5">
                <img
                  src="/isaiah-logo.jpg"
                  alt="Isaiah Adebayo IG Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="font-display text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>Isaiah Adebayo</span>
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              </div>
            </div>
            <p className="text-sm font-semibold text-[#E50914]">
              AI Automation & AI Agent Specialist
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal max-w-sm">
              Practical AI agents, lead systems, CRM automations, and streamlined business
              operations.
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
              Navigation
            </div>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Direct Contact Column (WhatsApp & Calling) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
              Direct Contact
            </div>
            <div className="space-y-2.5 text-sm">
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/2348140445713?text=Hi%20Isaiah%2C%20I%20am%20reaching%20out%20about%20your%20AI%20Automation%20and%20Agent%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-neutral-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="text-[10px] text-neutral-400 uppercase">WhatsApp</div>
                  <div className="font-mono font-bold text-white group-hover:text-emerald-400">08140445713</div>
                </div>
              </a>

              {/* Direct Phone Call Link */}
              <a
                href="tel:+2348140445713"
                className="inline-flex items-center gap-2.5 text-neutral-300 hover:text-[#E50914] transition-colors group"
              >
                <div className="w-7 h-7 rounded-md bg-[#E50914]/10 border border-[#E50914]/30 flex items-center justify-center text-[#E50914] group-hover:bg-[#E50914] group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="text-[10px] text-neutral-400 uppercase">Direct Call</div>
                  <div className="font-mono font-bold text-white group-hover:text-[#E50914]">08140445713</div>
                </div>
              </a>
            </div>
          </div>

          {/* Social Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
              Profiles
            </div>
            <div className="flex flex-col gap-2 text-sm">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#E50914] transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>© 2026 Isaiah Adebayo. All rights reserved. Direct line & WhatsApp: 08140445713</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#E50914]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
