import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass, ShieldCheck, Award, Sparkles, Calendar } from 'lucide-react';
import { TRUST_STATS } from '../data/schoolData';

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  const [counts, setCounts] = useState<{ [key: number]: number }>({ 0: 0, 1: 0, 2: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          TRUST_STATS.forEach((stat, index) => {
            const duration = 1600;
            const startTime = performance.now();
            const target = stat.value;

            const updateCounter = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.floor(easeOut * target);

              setCounts((prev) => ({ ...prev, [index]: currentVal }));

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                setCounts((prev) => ({ ...prev, [index]: target }));
              }
            };

            requestAnimationFrame(updateCounter);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('about');
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
    <section id="home" className="relative bg-[#F8F6F0] pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#0B1220]/08">
      {/* Subtle Rajasthani architectural arch pattern background watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="jharokha" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 C45 15 45 40 30 60 C15 40 15 15 30 0 Z" fill="none" stroke="#0B1220" strokeWidth="1" />
              <circle cx="30" cy="30" r="4" fill="#C9A45C" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jharokha)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Eyebrow & Call-to-Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 text-[#4F7F68] font-semibold text-xs tracking-[0.2em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#C9A45C]"></span>
              <span>RANTHAMBORE • RAJASTHAN</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#0B1220] tracking-tight leading-[1.08] mb-6">
              Where Learning <br />
              <span className="italic font-normal text-[#C9A45C]">Meets</span>{' '}
              <span className="text-[#365C4A]">Possibility.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#172033]/80 leading-relaxed font-normal max-w-2xl mb-8">
              A nurturing learning environment where curiosity, character and confidence come together to prepare students for a changing world.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={handleExploreClick}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-[#0B1220] bg-white hover:bg-[#F8F6F0] active:scale-[0.98] border border-[#0B1220]/15 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
              >
                <Compass className="w-4 h-4 text-[#4F7F68]" />
                <span>Explore Our School</span>
              </button>

              <button
                onClick={onOpenApply}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#365C4A] hover:bg-[#4F7F68] active:scale-[0.98] shadow-md border border-[#C9A45C]/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#365C4A]"
              >
                <Calendar className="w-4 h-4 text-[#E4C982]" />
                <span>Admissions 2026–27</span>
                <ArrowRight className="w-4 h-4 text-[#E4C982]" />
              </button>
            </div>

            {/* Subtle verification badge */}
            <div className="flex items-center gap-2 text-xs text-[#687080] pt-2 border-t border-[#0B1220]/10 w-full sm:w-auto">
              <ShieldCheck className="w-4 h-4 text-[#4F7F68] shrink-0" />
              <span>Affiliated with holistic global standards · Admissions open for Grades Nursery–11</span>
            </div>
          </div>

          {/* Right Column: Premium Campus Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(11,18,32,0.12)] border border-[#0B1220]/10 bg-white group">
              {/* Image Container with Elegant Overlay */}
              <div className="relative h-[360px] sm:h-[440px] w-full overflow-hidden bg-[#101A2B]">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
                  alt="Ranthambore International Academy Campus Architecture"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to styled SVG graphic if external network is blocked
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center', 'bg-[#0B1220]');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/25 to-transparent pointer-events-none" />

                {/* Top Badge: Sawai Madhopur Acreage */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#0B1220]/80 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-[#C9A45C]/30 text-white text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#C9A45C]" />
                  <span>20-Acre Eco-Campus</span>
                </div>

                {/* Bottom Overlay Card Details */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <span className="text-[11px] font-semibold tracking-wider text-[#E4C982] uppercase block mb-1">
                    Excellence in Sawai Madhopur
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-white mb-2">
                    Nurturing Tomorrow's Global Thinkers
                  </h3>
                  <p className="text-xs text-[#F8F6F0]/80 line-clamp-2">
                    Framed by Rajasthan's serene natural landscapes, designed for deep reflection and joyful discovery.
                  </p>
                </div>
              </div>

              {/* Floating Award / Accreditation Accent */}
              <div className="p-4 bg-white border-t border-[#0B1220]/08 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F8F6F0] flex items-center justify-center text-[#C9A45C] border border-[#C9A45C]/30">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1220]">Recognized Academic Quality</h4>
                    <p className="text-[11px] text-[#687080]">Modern pedagogy rooted in cultural values</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#4F7F68] block">Next Intake</span>
                  <span className="text-xs font-bold text-[#0B1220]">July 2026</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold corner frame */}
            <div className="absolute -bottom-3 -right-3 w-28 h-28 border-r-2 border-b-2 border-[#C9A45C]/40 rounded-br-2xl -z-10 pointer-events-none hidden sm:block" />
          </div>
        </div>

        {/* Trust Statistics Strip with Viewport-Triggered Counter Animation */}
        <div
          ref={statsRef}
          className="mt-14 pt-10 border-t border-[#0B1220]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
        >
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/70 border border-[#0B1220]/06 shadow-sm hover:border-[#C9A45C]/30 transition-colors"
            >
              <div className="flex flex-col">
                <div className="flex items-baseline gap-0.5">
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1220] tracking-tight">
                    {counts[idx] ?? 0}
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C9A45C]">
                    {stat.suffix}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#172033] mt-1">{stat.label}</h4>
                <p className="text-xs text-[#687080] mt-0.5">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
