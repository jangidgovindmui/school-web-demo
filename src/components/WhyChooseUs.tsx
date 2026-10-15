import React from 'react';
import { WHY_CHOOSE_BENEFITS } from '../data/schoolData';
import { Shield, Sparkles, Users, Award, HeartHandshake, Compass } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const iconMap: { [key: string]: React.ReactNode } = {
    educators: <Users className="w-5 h-5 text-[#365C4A]" />,
    'student-centered': <Compass className="w-5 h-5 text-[#365C4A]" />,
    'tech-classrooms': <Sparkles className="w-5 h-5 text-[#365C4A]" />,
    'sports-arts': <Award className="w-5 h-5 text-[#365C4A]" />,
    'safe-environment': <Shield className="w-5 h-5 text-[#365C4A]" />,
    'values-character': <HeartHandshake className="w-5 h-5 text-[#365C4A]" />,
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8F6F0] relative overflow-hidden border-b border-[#0B1220]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-[#4F7F68] font-semibold text-xs tracking-[0.2em] uppercase">
            <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
            <span>EXCELLENCE IN EDUCATION</span>
            <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] tracking-tight leading-[1.15] mb-4">
            Why Families <span className="italic font-normal text-[#C9A45C]">Choose RIA</span>
          </h2>
          <p className="text-base sm:text-lg text-[#172033]/80 leading-relaxed font-normal">
            A harmonious synthesis of traditional Rajasthani warmth, progressive international pedagogy, and unwavering institutional integrity.
          </p>
        </div>

        {/* Clean Editorial Layout - 2 columns of 3 with distinctive spacing and dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.id}
              className="bg-white rounded-xl p-8 border border-[#0B1220]/08 shadow-sm hover:border-[#C9A45C]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Pillar kicker */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold tracking-widest text-[#C9A45C] uppercase">
                    {benefit.pillar}
                  </span>
                  <div className="w-9 h-9 rounded-md bg-[#F8F6F0] flex items-center justify-center border border-[#0B1220]/06 group-hover:bg-[#F8F6F0]/60 transition-colors">
                    {iconMap[benefit.id]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#0B1220] mb-3 group-hover:text-[#365C4A] transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#172033]/75 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Line Accent */}
              <div className="pt-6 mt-6 border-t border-[#0B1220]/06 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4F7F68]" />
                <span className="text-[11px] font-semibold text-[#687080]">Institutional Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
