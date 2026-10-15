import React from 'react';
import { Compass, Cpu, GraduationCap, ShieldCheck } from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../data/schoolData';

export const TrustStrip: React.FC = () => {
  const icons = [Compass, Cpu, GraduationCap, ShieldCheck];

  return (
    <section className="bg-white border-b border-[#0B1220]/08 py-8 relative z-10" aria-label="Core Educational Commitments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#0B1220]/08">
          {TRUST_STRIP_ITEMS.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-3.5 ${
                  idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#F8F6F0] flex items-center justify-center text-[#4F7F68] shrink-0 border border-[#4F7F68]/20">
                  <Icon className="w-5 h-5 text-[#365C4A]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1220] tracking-tight">{item.label}</h4>
                  <p className="text-xs text-[#687080] mt-0.5 line-clamp-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
