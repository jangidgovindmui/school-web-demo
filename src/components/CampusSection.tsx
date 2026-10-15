import React, { useState } from 'react';
import { Check, ArrowRight, Eye } from 'lucide-react';
import { FACILITIES } from '../data/schoolData';
import { Facility } from '../types';

interface CampusSectionProps {
  onSelectFacility?: (facility: Facility) => void;
  onBookVisit: () => void;
}

export const CampusSection: React.FC<CampusSectionProps> = ({ onSelectFacility, onBookVisit }) => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const tags = ['ALL', 'CLASSROOM', 'LABORATORY', 'LIBRARY', 'SPORTS', 'ARTS', 'CAMPUS'];

  const filteredFacilities =
    selectedTag === 'ALL'
      ? FACILITIES
      : FACILITIES.filter((f) => f.tag === selectedTag);

  return (
    <section id="campus" className="py-20 md:py-28 bg-white relative border-b border-[#0B1220]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-[#4F7F68] font-semibold text-xs tracking-[0.2em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
              <span>LIFE AT RIA</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] tracking-tight leading-[1.15]">
              A Campus Designed <br />
              <span className="italic font-normal text-[#C9A45C]">For Possibility.</span>
            </h2>
            <p className="text-base text-[#172033]/80 leading-relaxed font-normal mt-4">
              Sprawled across 20 acres of green, secure acreage in Sawai Madhopur, our campus is intentionally designed to stimulate intellectual curiosity, physical vigor, and creative reflection.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onBookVisit}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#365C4A] hover:bg-[#4F7F68] active:scale-[0.98] transition-all shadow-sm"
            >
              <span>Book a Campus Visit</span>
              <ArrowRight className="w-4 h-4 text-[#E4C982]" />
            </button>
          </div>
        </div>

        {/* Filter Bar (Interactive Button Controls complying with zero-pill rule) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold scrollbar-none" role="tablist" aria-label="Campus Facility Categories">
          {tags.map((tag) => {
            const isCurrent = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] ${
                  isCurrent
                    ? 'bg-[#0B1220] text-[#E4C982] shadow-sm'
                    : 'bg-[#F8F6F0] text-[#687080] hover:text-[#0B1220] hover:bg-[#F8F6F0]/80'
                }`}
              >
                {tag === 'ALL' ? 'All Facilities' : tag}
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="group bg-[#F8F6F0] rounded-xl overflow-hidden border border-[#0B1220]/08 hover:border-[#C9A45C]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Facility Image with Fallback */}
              <div className="relative h-48 w-full bg-[#101A2B] overflow-hidden">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent pointer-events-none" />

                {/* Facility Tag Badge */}
                <div className="absolute top-3 left-3 bg-[#0B1220]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-[#E4C982] tracking-wider uppercase border border-[#C9A45C]/30">
                  {facility.tag}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0B1220] mb-2 group-hover:text-[#365C4A] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-[#172033]/75 leading-relaxed mb-4">
                    {facility.description}
                  </p>
                </div>

                {/* Key specs */}
                <div className="pt-3 border-t border-[#0B1220]/08 space-y-1.5">
                  {facility.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#687080]">
                      <Check className="w-3.5 h-3.5 text-[#4F7F68] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
