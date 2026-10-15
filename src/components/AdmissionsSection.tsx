import React from 'react';
import { ArrowRight, Calendar, UserCheck, CheckCircle2, Phone, HelpCircle } from 'lucide-react';
import { ADMISSION_STEPS, SCHOOL_INFO } from '../data/schoolData';

interface AdmissionsSectionProps {
  onOpenApply: () => void;
  onBookVisit: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenApply, onBookVisit }) => {
  return (
    <section id="admissions" className="py-20 md:py-28 bg-white relative border-b border-[#0B1220]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div className="relative rounded-2xl bg-[#0B1220] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-[#C9A45C]/30 mb-16">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#365C4A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl text-left">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 mb-4 bg-[#101A2B] px-3.5 py-1.5 rounded-md border border-[#C9A45C]/40 text-xs font-semibold text-[#E4C982]">
              <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
              <span>Admissions Open · {SCHOOL_INFO.session}</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-4">
              Begin Their Journey <br />
              <span className="italic font-normal text-[#E4C982]">With RIA.</span>
            </h2>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#F8F6F0]/85 leading-relaxed font-normal mb-8 max-w-2xl">
              Discover a learning environment where students are encouraged to think, explore, create and grow. We welcome curious young minds ready to embark on a transformative educational path.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenApply}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#365C4A] hover:bg-[#4F7F68] active:scale-[0.98] shadow-md border border-[#C9A45C]/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#365C4A]"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 text-[#E4C982]" />
              </button>

              <button
                onClick={onBookVisit}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-transparent hover:bg-white/10 active:scale-[0.98] border border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
              >
                <Calendar className="w-4 h-4 text-[#C9A45C]" />
                <span>Book a Campus Visit</span>
              </button>
            </div>
          </div>
        </div>

        {/* 5-Step Admissions Process */}
        <div>
          <div className="text-left mb-10">
            <div className="inline-flex items-center gap-2 mb-2 text-[#4F7F68] font-semibold text-xs tracking-[0.2em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
              <span>ADMISSION ROADMAP</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1220]">
              A Transparent, 5-Step Path
            </h3>
            <p className="text-sm text-[#687080] mt-1">
              A thoughtful process created to help your family determine if RIA is the right home for your child.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {ADMISSION_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-[#F8F6F0] rounded-xl p-6 border border-[#0B1220]/08 hover:border-[#C9A45C]/40 hover:bg-white transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-[#C9A45C] group-hover:text-[#365C4A] transition-colors block mb-4">
                    {step.step}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#0B1220] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#172033]/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#0B1220]/06 flex items-center justify-between text-[11px] text-[#687080]">
                  <span>Step {idx + 1} of 5</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4F7F68]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admissions Help Desk Strip */}
        <div className="mt-12 p-6 rounded-xl bg-[#F8F6F0] border border-[#0B1220]/08 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#4F7F68] border border-[#0B1220]/08">
              <Phone className="w-5 h-5 text-[#365C4A]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#0B1220]">Need guidance choosing a grade level?</h4>
              <p className="text-xs text-[#687080]">Our admissions counselors are available Monday to Saturday (8 AM – 4 PM).</p>
            </div>
          </div>
          <button
            onClick={onBookVisit}
            type="button"
            className="text-xs font-bold text-[#365C4A] hover:text-[#0B1220] px-4 py-2 rounded bg-white border border-[#0B1220]/10"
          >
            Connect With Counselor
          </button>
        </div>
      </div>
    </section>
  );
};
