import React, { useState } from 'react';
import { NOTICES } from '../data/schoolData';
import { Notice } from '../types';
import { ArrowRight, Bell, Calendar, X } from 'lucide-react';

export const NoticesSection: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#F8F6F0] relative border-b border-[#0B1220]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3 text-[#4F7F68] font-semibold text-xs tracking-[0.2em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
              <span>CAMPUS BULLETINS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] tracking-tight leading-[1.15]">
              Latest From <span className="italic font-normal text-[#C9A45C]">RIA</span>
            </h2>
            <p className="text-base text-[#172033]/80 leading-relaxed font-normal mt-3">
              Important circulars, upcoming calendar dates, and administrative announcements for parents, guardians, and students.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#687080]">
            <Bell className="w-4 h-4 text-[#4F7F68]" />
            <span>Updated weekly for school community</span>
          </div>
        </div>

        {/* 3 Notice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NOTICES.map((notice) => (
            <article
              key={notice.id}
              className="bg-white rounded-xl p-7 border border-[#0B1220]/08 shadow-sm hover:border-[#C9A45C]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Clean unboxed metadata with dot separator (zero-pill rule) */}
                <div className="flex items-center gap-2 text-xs text-[#687080] mb-4">
                  <span className="font-semibold text-[#4F7F68]">{notice.category}</span>
                  <span aria-hidden="true" className="text-[#C9A45C]">·</span>
                  <span>{notice.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#0B1220] mb-3 group-hover:text-[#365C4A] transition-colors line-clamp-2">
                  {notice.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#172033]/75 leading-relaxed line-clamp-3 mb-6">
                  {notice.excerpt}
                </p>
              </div>

              {/* Read More button */}
              <div className="pt-4 border-t border-[#0B1220]/06 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedNotice(notice)}
                  className="text-xs font-bold text-[#365C4A] group-hover:text-[#0B1220] inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] rounded"
                >
                  <span>Read Notice</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
                </button>
                <span className="text-[11px] text-[#687080]">{notice.author.split(' ')[0]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Notice Reader Modal */}
      {selectedNotice && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedNotice.title}
          className="fixed inset-0 z-50 bg-[#0B1220]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            className="max-w-xl w-full bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#0B1220]/10 flex flex-col justify-between max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#0B1220]/10 mb-4">
                <div className="flex items-center gap-2 text-xs text-[#687080]">
                  <span className="font-bold text-[#365C4A] uppercase tracking-wider">
                    {selectedNotice.category}
                  </span>
                  <span>·</span>
                  <span>{selectedNotice.date}</span>
                </div>
                <button
                  onClick={() => setSelectedNotice(null)}
                  type="button"
                  aria-label="Close Notice"
                  className="p-1.5 rounded-lg text-[#687080] hover:text-[#0B1220] hover:bg-[#F8F6F0]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-[#0B1220] mb-4">
                {selectedNotice.title}
              </h3>

              {/* Full Content */}
              <div className="text-sm text-[#172033]/85 leading-relaxed space-y-3 mb-6">
                <p>{selectedNotice.fullContent}</p>
                <p className="text-xs text-[#687080] italic">
                  Note: This circular is published for demonstration and layout verification for school stakeholders.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#0B1220]/10 flex items-center justify-between">
              <div className="text-xs text-[#687080]">
                Issued by: <strong className="text-[#0B1220]">{selectedNotice.author}</strong>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="px-4 py-2 rounded-lg bg-[#0B1220] text-white text-xs font-semibold hover:bg-[#101A2B]"
              >
                Close Bulletin
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
