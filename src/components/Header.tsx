import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderProps {
  onOpenApply: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenApply, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open and handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Academics', href: '#academics', id: 'academics' },
    { label: 'Campus', href: '#campus', id: 'campus' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Admissions', href: '#admissions', id: 'admissions' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Pre-Header Utility Bar */}
      <div className="bg-[#0B1220] text-[#E4C982] text-xs font-medium py-1.5 px-4 sm:px-8 border-b border-[#C9A45C]/20 z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[#F8F6F0]/80">
            <span className="flex items-center gap-1.5 text-xs text-[#E4C982]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse"></span>
              Fictional Demo Presentation Website
            </span>
            <span className="hidden md:inline-block text-[#C9A45C]/40">|</span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C9A45C]" />
              Sawai Madhopur, Rajasthan, India
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#F8F6F0]/90 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#C9A45C]" />
              {SCHOOL_INFO.phone}
            </span>
            <span className="text-[#C9A45C]/40">·</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#C9A45C]" />
              {SCHOOL_INFO.email}
            </span>
          </div>
        </div>
      </div>

      {/* Main Fixed Navigation - Always White, Never Unreadable */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_4px_20px_rgba(11,18,32,0.08)] border-b border-[#0B1220]/10 py-3'
            : 'border-b border-[#0B1220]/08 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] rounded-lg p-1"
            aria-label="Ranthambore International Academy Home"
          >
            {/* Logo Crest Mark */}
            <div className="w-11 h-11 rounded-lg bg-[#0B1220] flex items-center justify-center p-1.5 shadow-sm border border-[#C9A45C]/40 group-hover:border-[#C9A45C] transition-colors">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#C9A45C]" fill="currentColor">
                <circle cx="50" cy="50" r="44" stroke="#C9A45C" strokeWidth="4" fill="none" />
                <path d="M30 72 L50 24 L70 72 L58 72 L50 50 L42 72 Z" fill="#C9A45C" />
                <circle cx="50" cy="38" r="5" fill="#E4C982" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0B1220] leading-tight group-hover:text-[#365C4A] transition-colors">
                Ranthambore <span className="text-[#C9A45C]">International</span> Academy
              </span>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4F7F68]">
                Sawai Madhopur · Rajasthan
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] rounded ${
                    isActive
                      ? 'text-[#365C4A] font-semibold'
                      : 'text-[#4F7F68] hover:text-[#0B1220]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C9A45C] rounded-full animate-in fade-in duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenApply}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#365C4A] hover:bg-[#4F7F68] active:scale-[0.98] transition-all duration-200 shadow-sm border border-[#C9A45C]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#365C4A]"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 text-[#E4C982]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg text-[#0B1220] hover:text-[#365C4A] hover:bg-[#F8F6F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden fixed inset-0 z-50 bg-[#0B1220]/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#0B1220]/10 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded bg-[#0B1220] flex items-center justify-center p-1 border border-[#C9A45C]/40">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#C9A45C]" fill="currentColor">
                      <circle cx="50" cy="50" r="44" stroke="#C9A45C" strokeWidth="4" fill="none" />
                      <path d="M30 72 L50 24 L70 72 L58 72 L50 50 L42 72 Z" fill="#C9A45C" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-serif font-bold text-sm text-[#0B1220] block">
                      Ranthambore International
                    </span>
                    <span className="text-[10px] text-[#4F7F68] font-semibold tracking-wide uppercase">
                      Sawai Madhopur · Demo
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  type="button"
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-[#172033] hover:bg-[#F8F6F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-2" aria-label="Mobile Menu Links">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#F8F6F0] text-[#365C4A] font-bold border-l-4 border-[#C9A45C]'
                          : 'text-[#172033] hover:bg-[#F8F6F0] hover:text-[#365C4A]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A45C]/60" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Action */}
            <div className="pt-6 border-t border-[#0B1220]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#365C4A] text-white font-semibold text-sm hover:bg-[#4F7F68] shadow transition-colors"
              >
                <span>Apply for Session 2026–27</span>
                <ArrowRight className="w-4 h-4 text-[#E4C982]" />
              </button>

              <div className="text-center text-xs text-[#687080] pt-2">
                <p>Sawai Madhopur, Rajasthan, India</p>
                <p className="text-[11px] text-[#4F7F68] font-medium mt-1">
                  Admissions Helpline: {SCHOOL_INFO.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
