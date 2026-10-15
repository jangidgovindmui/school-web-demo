import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === 0 ? GALLERY_ITEMS.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) =>
        prev === GALLERY_ITEMS.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev === 0 ? GALLERY_ITEMS.length - 1 : (prev as number) - 1
        );
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev === GALLERY_ITEMS.length - 1 ? 0 : (prev as number) + 1
        );
      }
    };

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex]);

  const activeItem: GalleryItem | null =
    activeLightboxIndex !== null ? GALLERY_ITEMS[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F8F6F0] relative border-b border-[#0B1220]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-[#4F7F68] font-semibold text-xs tracking-[0.2em] uppercase">
            <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
            <span>GALLERY OF LIFE</span>
            <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] tracking-tight leading-[1.15] mb-4">
            Moments <span className="italic font-normal text-[#C9A45C]">That Matter.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#172033]/80 leading-relaxed font-normal">
            A glimpse into the daily rhythm of inquiry, camaraderie, artistic discovery, and youthful energy at Ranthambore International Academy.
          </p>
        </div>

        {/* 8-Tile Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#0B1220]/08 bg-[#101A2B]"
              role="button"
              tabIndex={0}
              aria-label={`View photo: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 bg-[#0B1220]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-[#E4C982] uppercase tracking-wider border border-[#C9A45C]/30">
                {item.category}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#E4C982] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#F8F6F0]/80 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view of ${activeItem.title}`}
          className="fixed inset-0 z-50 bg-[#0B1220]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar with counter & close button */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20">
            <div className="text-white text-xs sm:text-sm font-medium bg-[#101A2B]/80 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-[#E4C982] font-bold">{activeLightboxIndex + 1}</span> / {GALLERY_ITEMS.length}
              <span className="mx-2 text-white/40">·</span>
              <span>{activeItem.category}</span>
            </div>

            <button
              onClick={closeLightbox}
              type="button"
              aria-label="Close Lightbox"
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            type="button"
            aria-label="Previous Image"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#101A2B]/80 hover:bg-[#365C4A] text-white transition-colors z-20 border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            type="button"
            aria-label="Next Image"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#101A2B]/80 hover:bg-[#365C4A] text-white transition-colors z-20 border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Content Box */}
          <div
            className="max-w-4xl w-full bg-[#101A2B] rounded-2xl overflow-hidden border border-[#C9A45C]/30 shadow-2xl flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image display */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-contain max-h-[65vh]"
              />
            </div>

            {/* Info footer */}
            <div className="p-4 sm:p-6 bg-[#0B1220] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-[10px] font-bold text-[#E4C982] uppercase tracking-wider block">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mt-0.5">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F6F0]/80 mt-1 max-w-2xl">
                  {activeItem.caption}
                </p>
              </div>

              <div className="text-[11px] text-[#687080] shrink-0 font-medium">
                Use ← / → arrows or swipe
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
