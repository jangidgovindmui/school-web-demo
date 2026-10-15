import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isPrivacy ? 'Privacy Policy' : 'Terms of Demonstration'}
      className="fixed inset-0 z-50 bg-[#0B1220]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-xl w-full bg-white rounded-2xl shadow-2xl border border-[#0B1220]/10 overflow-hidden my-8 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#0B1220]/10 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F8F6F0] flex items-center justify-center text-[#365C4A]">
              <Shield className="w-4 h-4 text-[#C9A45C]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0B1220]">
              {isPrivacy ? 'Privacy & Data Protection Notice' : 'Terms of Website Demonstration'}
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close legal modal"
            className="p-1 rounded-lg text-[#687080] hover:text-[#0B1220] hover:bg-[#F8F6F0]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-[#172033]/80 space-y-4 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Fictional Showcase Context</strong>
                <br />
                Ranthambore International Academy (Sawai Madhopur) is a fictional conceptual demonstration created to showcase world-class school web design, information architecture, and digital experience standards.
              </p>
              <p>
                <strong>2. User Data & Telemetry</strong>
                <br />
                No personal information, student records, phone numbers, or emails entered on this site are stored on external commercial databases or sold to third parties. Form inputs are processed locally on the client to demonstrate realistic response flows.
              </p>
              <p>
                <strong>3. Security Standards</strong>
                <br />
                Production deployments of this architectural template are engineered to integrate with secure, encrypted school management information systems (SMIS) and compliant student records databases.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Demonstration Scope</strong>
                <br />
                This website is presented solely as a digital capabilities demonstration for educational institutions, school boards, and potential education clients.
              </p>
              <p>
                <strong>2. Institutional Representation</strong>
                <br />
                All names, curricula descriptions, faculty references (including Dr. Ananya Sharma), and student figures are representative demo content crafted to reflect best practices in school portal design.
              </p>
              <p>
                <strong>3. Intellectual Property</strong>
                <br />
                Design patterns, custom CSS tokens, layouts, and typography pairings are crafted according to the highest web craftsmanship benchmarks for client presentation.
              </p>
            </>
          )}
        </div>

        <div className="pt-6 mt-6 border-t border-[#0B1220]/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#0B1220] text-white text-xs font-semibold hover:bg-[#101A2B]"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
