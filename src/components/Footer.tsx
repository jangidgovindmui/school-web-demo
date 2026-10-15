import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, ArrowUp, Instagram, Facebook, Youtube, Linkedin, Shield } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenApply }) => {
  const quickLinks = [
    { label: 'About RIA', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Campus & Facilities', href: '#campus' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Moments Gallery', href: '#gallery' },
    { label: 'Admissions 2026–27', href: '#admissions' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#0B1220] text-white pt-16 pb-12 border-t border-[#C9A45C]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Identity & Crest */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#101A2B] border border-[#C9A45C]/40 flex items-center justify-center p-1.5 shadow-inner">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#C9A45C]" fill="currentColor">
                  <circle cx="50" cy="50" r="44" stroke="#C9A45C" strokeWidth="4" fill="none" />
                  <path d="M30 72 L50 24 L70 72 L58 72 L50 50 L42 72 Z" fill="#C9A45C" />
                  <circle cx="50" cy="38" r="5" fill="#E4C982" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  Ranthambore <span className="text-[#C9A45C]">International</span> Academy
                </span>
                <span className="text-[11px] text-[#4F7F68] uppercase font-semibold tracking-wider">
                  Sawai Madhopur · Rajasthan
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#E4C982]">
              “{SCHOOL_INFO.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-[#F8F6F0]/75 leading-relaxed max-w-sm">
              An institution dedicated to academic brilliance, moral fortitude, environmental empathy, and global leadership in the historic heart of Rajasthan.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { name: 'Instagram', icon: Instagram },
                { name: 'Facebook', icon: Facebook },
                { name: 'YouTube', icon: Youtube },
                { name: 'LinkedIn', icon: Linkedin },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href="#social"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Demo Mode: Navigating to ${s.name} channel (demo placeholder).`);
                    }}
                    aria-label={`Visit RIA on ${s.name} (Demo)`}
                    className="w-9 h-9 rounded-lg bg-[#101A2B] border border-white/10 flex items-center justify-center text-[#E4C982] hover:bg-[#365C4A] hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#C9A45C] uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F8F6F0]/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-[#E4C982] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: School Info & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-[#C9A45C] uppercase tracking-widest">
              School Information
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#F8F6F0]/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenApply}
                type="button"
                className="w-full py-2.5 px-4 rounded-lg bg-[#365C4A] hover:bg-[#4F7F68] text-white text-xs font-bold border border-[#C9A45C]/30 transition-colors"
              >
                Apply for Session 2026–27
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#687080]">
          <div>
            <p className="text-white/80">
              © 2026 Ranthambore International Academy. <span className="text-[#E4C982] font-semibold">Demo Website</span>.
            </p>
            <p className="text-[11px] text-[#687080] mt-0.5">
              Created to showcase to prospective school clients. Not an official real-world entity.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              type="button"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              type="button"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms of Demonstration
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
