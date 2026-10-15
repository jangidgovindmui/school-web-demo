import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const highlights = [
    {
      num: '01',
      title: 'Student First',
      desc: 'Every learner matters. Personalized pacing, active mentorship, and room to grow.',
    },
    {
      num: '02',
      title: 'Future Ready',
      desc: 'Skills beyond textbooks. Critical inquiry, digital literacy, and collaborative leadership.',
    },
    {
      num: '03',
      title: 'Holistic Growth',
      desc: 'Mind, character & confidence. Balancing rigorous academic work with athletics, arts, and empathy.',
    },
  ];

  const handleScrollToAcademics = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLearnMore) {
      onLearnMore();
      return;
    }
    const target = document.getElementById('academics');
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
    <section id="about" className="py-20 md:py-28 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Campus & Learning Environment Visual */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#0B1220]/10 bg-white">
                <div className="h-[420px] sm:h-[480px] w-full bg-[#101A2B] relative">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                    alt="Active interactive learning session at Ranthambore International Academy"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Caption badge at bottom left of image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="text-[11px] font-bold text-[#E4C982] uppercase tracking-wider block">
                      A Sanctuary for Inquiry
                    </span>
                    <p className="font-serif text-lg font-bold text-white mt-0.5">
                      “Where student ideas are listened to, debated, and nurtured.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Offset Experience Pill Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-5 rounded-xl border border-[#0B1220]/10 shadow-lg max-w-[220px] sm:max-w-[260px] z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#365C4A] text-[#E4C982] flex items-center justify-center font-serif text-lg font-bold">
                    1:12
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1220]">Mentor-Student Ratio</h4>
                    <p className="text-[11px] text-[#687080]">Individualized learning paths</p>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#C9A45C]/50 rounded-tl-xl -z-10 hidden sm:block" />
            </div>
          </div>

          {/* Right Column: School Philosophy & Highlights */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3 text-[#4F7F68] font-semibold text-xs tracking-[0.2em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
              <span>DISCOVER RIA</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] tracking-tight leading-[1.15] mb-6">
              More Than A School. <br />
              <span className="italic font-normal text-[#C9A45C]">A Place To Belong.</span>
            </h2>

            {/* Philosophy Content */}
            <div className="space-y-4 text-base text-[#172033]/85 leading-relaxed font-normal mb-8">
              <p>
                Nestled on the threshold of Rajasthan’s historic natural sanctuaries in Sawai Madhopur, Ranthambore International Academy was founded on a singular conviction: that authentic education transcends exam scores to awaken each child’s lifelong potential.
              </p>
              <p>
                We harmonize rigorous scholastic depth with creative expression, computational thinking, competitive sports, and ethical character formation. Here, students develop both the wings of modern global fluency and the deep roots of empathy, resilience, and personal responsibility.
              </p>
            </div>

            {/* Three Highlights: 01, 02, 03 */}
            <div className="w-full space-y-4 pt-2 pb-8 border-y border-[#0B1220]/10 mb-8">
              {highlights.map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <span className="font-serif font-bold text-lg text-[#C9A45C] shrink-0 pt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1220] flex items-center gap-1.5">
                      <span>{item.title}</span>
                      <span className="text-[#687080] font-normal text-xs">— {item.desc.split('.')[0]}.</span>
                    </h3>
                    <p className="text-xs text-[#687080] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleScrollToAcademics}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#365C4A] hover:bg-[#4F7F68] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#365C4A]"
            >
              <span>Discover Our Approach</span>
              <ArrowRight className="w-4 h-4 text-[#E4C982]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
