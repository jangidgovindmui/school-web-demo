import React from 'react';
import { Quote, Award, Sparkles } from 'lucide-react';

export const PrincipalMessage: React.FC = () => {
  return (
    <section className="bg-[#0B1220] text-white py-20 md:py-28 relative overflow-hidden border-y border-[#C9A45C]/20">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4F7F68]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C9A45C]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Principal Portrait / Academic Crest visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C9A45C]/40 bg-[#101A2B] shadow-2xl">
                <div className="h-[400px] sm:h-[460px] w-full relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                    alt="Dr. Ananya Sharma, Principal of Ranthambore International Academy"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to elegant CSS portrait badge
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/20 to-transparent" />

                  {/* Gold Seal at Bottom of portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#101A2B]/90 backdrop-blur-md border border-[#C9A45C]/30">
                    <h3 className="font-serif text-lg font-bold text-[#E4C982]">Dr. Ananya Sharma</h3>
                    <p className="text-xs text-[#F8F6F0]/80">Ph.D. in Education Leadership</p>
                    <p className="text-[11px] text-[#4F7F68] font-medium mt-0.5">
                      Principal, Ranthambore International Academy
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative gold backdrop element */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#C9A45C]/30 rounded-2xl -z-10 pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Right Column: Message & Highlighted Quotation */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-4 text-[#C9A45C] font-semibold text-xs tracking-[0.2em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
              <span>FROM THE PRINCIPAL'S DESK</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
              Education That <br />
              <span className="italic font-normal text-[#E4C982]">Builds Character.</span>
            </h2>

            {/* Principal's Primary Message */}
            <div className="space-y-4 text-base sm:text-lg text-[#F8F6F0]/85 leading-relaxed font-normal mb-8">
              <p>
                “At RIA, we believe education is not simply about achieving better grades. It is about helping young people become confident thinkers, responsible citizens and compassionate human beings.”
              </p>
            </div>

            {/* Elegant Highlighted Quotation Box */}
            <div className="relative p-6 sm:p-8 rounded-xl bg-[#101A2B] border-l-4 border-[#C9A45C] border-y border-r border-[#C9A45C]/20 shadow-lg mb-8">
              <Quote className="w-8 h-8 text-[#C9A45C]/40 mb-3" />
              <blockquote className="font-serif text-lg sm:text-xl text-white italic leading-relaxed">
                “Our responsibility is to create an environment where every child feels valued, challenged and inspired to discover what they are capable of becoming.”
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C9A45C]" />
                <span className="text-xs uppercase tracking-widest text-[#E4C982] font-semibold">
                  Guiding RIA Institutional Ethos
                </span>
              </div>
            </div>

            {/* Principal Signature & Designation Block */}
            <div className="flex items-center gap-4 pt-2">
              <div className="w-12 h-12 rounded-full bg-[#101A2B] border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-white">Dr. Ananya Sharma</h3>
                <p className="text-xs text-[#C9A45C]">Principal, Ranthambore International Academy</p>
                <p className="text-[11px] text-[#F8F6F0]/60 mt-0.5">Sawai Madhopur, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
