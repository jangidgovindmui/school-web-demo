import React from 'react';
import { Award, BookOpen, Trophy, Compass, CheckCircle } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const statNumbers = [
    { value: '25+', label: 'Years of Excellence', detail: 'Serving generations of learners' },
    { value: '1500+', label: 'Students', detail: 'Vibrant student community' },
    { value: '50+', label: 'Clubs & Activities', detail: 'Diverse avenues for exploration' },
    { value: '98%', label: 'Parent Satisfaction', detail: 'High trust from guardian network' },
  ];

  const highlights = [
    {
      title: 'Academic Excellence',
      icon: BookOpen,
      desc: 'Consistent distinction scores across foundational and secondary education, with personalized career roadmaps and university advisory guidance.',
      points: ['Concept-driven learning', 'Strong analytical foundation', 'Individual student mentoring'],
    },
    {
      title: 'Sports & Activities',
      icon: Trophy,
      desc: 'Holistic physical education fostering teamwork, resilience, and sporting spirit across track and field, team sports, and classical pursuits.',
      points: ['Multi-sport athletic complex', 'Regular inter-house tournaments', 'Certified fitness coaches'],
    },
    {
      title: 'Leadership & Innovation',
      icon: Compass,
      desc: 'Nurturing ethical voices through student council governance, environmental conservation initiatives, debate forums, and hands-on technology labs.',
      points: ['Student-led councils', 'Social impact initiatives', 'Computational thinking focus'],
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#0B1220] text-white relative overflow-hidden border-b border-[#C9A45C]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#C9A45C]/05 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#365C4A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-[#C9A45C] font-semibold text-xs tracking-[0.2em] uppercase">
            <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
            <span>MILESTONES OF DEDICATION</span>
            <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-4">
            Grounding Potential In <br />
            <span className="italic font-normal text-[#E4C982]">Meaningful Impact.</span>
          </h2>
          <p className="text-base text-[#F8F6F0]/80 leading-relaxed font-normal">
            Our measure of success is not merely numerical; it is seen in the confidence, compassion, and critical clarity of every graduate who walks our halls.
          </p>
        </div>

        {/* 4 Stat Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statNumbers.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#101A2B] border border-[#C9A45C]/20 text-center flex flex-col items-center justify-center hover:border-[#C9A45C]/50 transition-colors"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E4C982] tracking-tight">
                {stat.value}
              </span>
              <h4 className="text-sm font-bold text-white mt-2">{stat.label}</h4>
              <p className="text-[11px] text-[#F8F6F0]/60 mt-0.5">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* 3 Achievement Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#101A2B] rounded-xl p-8 border border-white/10 hover:border-[#C9A45C]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0B1220] border border-[#C9A45C]/30 flex items-center justify-center text-[#C9A45C] mb-6">
                    <Icon className="w-6 h-6 text-[#E4C982]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F8F6F0]/75 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-[#E4C982]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F7F68]" />
                      <span className="text-[#F8F6F0]/90 font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
