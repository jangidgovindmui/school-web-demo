/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { PrincipalMessage } from './components/PrincipalMessage';
import { AcademicsSection } from './components/AcademicsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CampusSection } from './components/CampusSection';
import { AchievementsSection } from './components/AchievementsSection';
import { GallerySection } from './components/GallerySection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { NoticesSection } from './components/NoticesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ApplyModal } from './components/ApplyModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applyModalMode, setApplyModalMode] = useState<'apply' | 'visit'>('apply');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'academics',
      'campus',
      'achievements',
      'gallery',
      'admissions',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenApply = () => {
    setApplyModalMode('apply');
    setApplyModalOpen(true);
  };

  const handleOpenVisit = () => {
    setApplyModalMode('visit');
    setApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#172033] flex flex-col selection:bg-[#C9A45C]/25 selection:text-[#0B1220]">
      {/* Fixed Header */}
      <Header onOpenApply={handleOpenApply} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenApply={handleOpenApply} />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Principal's Message */}
        <PrincipalMessage />

        {/* 5. Academics */}
        <AcademicsSection onOpenApply={handleOpenApply} />

        {/* 6. Why Choose RIA */}
        <WhyChooseUs />

        {/* 7. Campus & Facilities */}
        <CampusSection onBookVisit={handleOpenVisit} />

        {/* 8. Achievements */}
        <AchievementsSection />

        {/* 9. Gallery with Lightbox */}
        <GallerySection />

        {/* 10. Admissions Roadmap & CTA */}
        <AdmissionsSection
          onOpenApply={handleOpenApply}
          onBookVisit={handleOpenVisit}
        />

        {/* 11. Latest School Notices / Circulars */}
        <NoticesSection />

        {/* 12. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenApply={handleOpenApply}
      />

      {/* Floating Actions: WhatsApp Enquiry & Back to Top */}
      <FloatingActions onOpenApply={handleOpenApply} />

      {/* Application / Tour Booking Modal */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultMode={applyModalMode}
      />

      {/* Legal & Demonstration Disclosure Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
