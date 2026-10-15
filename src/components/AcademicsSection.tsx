import React from 'react';
import { BookOpen, Compass, GraduationCap, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';

interface AcademicsSectionProps {
  onSelectProgram?: (programId: string) => void;
  onOpenApply: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onSelectProgram, onOpenApply }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#365C4A]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#365C4A]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#365C4A]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#365C4A]" />;
    }
  };

  return (
    <section id="academics" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#0B1220]/08 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-3 text-[#4F7F68] font-semibold text-xs tracking-[0.2em] uppercase">
            <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
            <span>ACADEMIC LIFE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] tracking-tight leading-[1.15] mb-4">
            Learning Designed For <br />
            <span className="italic font-normal text-[#C9A45C]">Curious Minds.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#172033]/80 leading-relaxed font-normal">
            Our progressive curriculum combines time-tested scholastic rigor with modern pedagogical frameworks, preparing students to excel in higher education and adapt with agility to future global frontiers.
          </p>
        </div>

        {/* 4 Premium Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ACADEMIC_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="group bg-[#F8F6F0] rounded-xl p-6 sm:p-7 border border-[#0B1220]/10 hover:border-[#C9A45C]/50 hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md relative"
            >
              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-2xl font-bold text-[#C9A45C] group-hover:text-[#0B1220] transition-colors">
                    {program.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white group-hover:bg-[#F8F6F0] border border-[#0B1220]/08 flex items-center justify-center transition-colors">
                    {getIcon(program.icon)}
                  </div>
                </div>

                {/* Subtitle / Grades */}
                <span className="text-[11px] font-bold text-[#4F7F68] tracking-wider uppercase block mb-1">
                  {program.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#0B1220] mb-3 group-hover:text-[#365C4A] transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#172033]/80 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-4 border-t border-[#0B1220]/08">
                  {program.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] mt-1.5 shrink-0" />
                      <span className="text-xs text-[#687080] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Action */}
              <div className="pt-6 mt-6 border-t border-[#0B1220]/08 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenApply}
                  className="text-xs font-semibold text-[#365C4A] group-hover:text-[#0B1220] flex items-center gap-1 transition-colors"
                >
                  <span>Enquire For This Level</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Curriculum Framework Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#0B1220] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-[#E4C982] tracking-wider uppercase">
              Balanced Academic Architecture
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
              Integrated Experiential & Digital Curricula
            </h4>
            <p className="text-xs sm:text-sm text-[#F8F6F0]/80 mt-1 max-w-2xl">
              From early reading immersion to advanced physics laboratory projects and bilingual oratory, we create self-motivated, joyful learners.
            </p>
          </div>
          <button
            onClick={onOpenApply}
            type="button"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#365C4A] hover:bg-[#4F7F68] text-white text-xs font-bold border border-[#C9A45C]/30 transition-colors shadow-sm"
          >
            Download Curriculum Guide
          </button>
        </div>
      </div>
    </section>
  );
};
