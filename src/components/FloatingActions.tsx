import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, X, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface FloatingActionsProps {
  onOpenApply: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenApply }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatSubmitted, setChatSubmitted] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSendQuickChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setChatSubmitted(true);
    setTimeout(() => {
      setChatSubmitted(false);
      setChatMessage('');
      setWhatsAppModalOpen(false);
    }, 2000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="pointer-events-auto p-3 rounded-full bg-white text-[#0B1220] shadow-lg border border-[#0B1220]/10 hover:bg-[#F8F6F0] hover:text-[#365C4A] hover:border-[#C9A45C] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* WhatsApp-Style Floating Enquiry Button */}
        <button
          onClick={() => setWhatsAppModalOpen(true)}
          type="button"
          aria-label="Open Instant Enquiry Chat"
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#365C4A] text-white shadow-xl hover:bg-[#4F7F68] border border-[#C9A45C]/40 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#365C4A] active:scale-95"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-[#E4C982]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#E4C982] animate-ping" />
          </div>
          <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
            Quick Enquiry
          </span>
        </button>
      </div>

      {/* Instant Enquiry / WhatsApp Simulation Dialog */}
      {whatsAppModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Direct Admissions Helpline Demo"
          className="fixed inset-0 z-50 bg-[#0B1220]/50 backdrop-blur-sm flex items-end sm:items-center justify-end p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setWhatsAppModalOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-[#0B1220]/10 overflow-hidden flex flex-col animate-in slide-in-from-bottom-6 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Chat Header */}
            <div className="bg-[#365C4A] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-serif font-bold text-white">
                  RIA
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">RIA Admissions Desk</h4>
                  <span className="text-[11px] text-[#E4C982] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E4C982] inline-block" />
                    Demo Response Agent
                  </span>
                </div>
              </div>
              <button
                onClick={() => setWhatsAppModalOpen(false)}
                type="button"
                aria-label="Close Chat"
                className="p-1 rounded text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#F8F6F0] flex flex-col gap-3 min-h-[160px] text-xs">
              <div className="bg-white p-3 rounded-lg rounded-tl-none border border-[#0B1220]/08 text-[#172033] shadow-sm max-w-[85%]">
                <p className="font-medium text-[#0B1220] mb-1">
                  Namaste from Sawai Madhopur! 🙏
                </p>
                <p className="text-[#172033]/80 leading-relaxed">
                  How may we guide your family regarding Academic Session 2026–27 admissions or campus walkthroughs?
                </p>
                <span className="text-[10px] text-[#687080] block text-right mt-1">Today</span>
              </div>

              {chatSubmitted && (
                <div className="bg-[#365C4A] text-white p-3 rounded-lg rounded-tr-none ml-auto text-xs max-w-[85%] shadow-sm">
                  <p className="font-semibold text-[#E4C982]">Message Received!</p>
                  <p className="text-white/90 text-[11px] mt-0.5">
                    Demo enquiry captured. An admissions representative would respond here in production.
                  </p>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendQuickChat} className="p-3 bg-white border-t border-[#0B1220]/10 flex items-center gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about admissions or campus..."
                className="flex-1 px-3 py-2 text-xs bg-[#F8F6F0] rounded-lg border border-[#0B1220]/10 text-[#0B1220] focus:outline-none focus:border-[#365C4A]"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="p-2 rounded-lg bg-[#365C4A] text-white hover:bg-[#4F7F68] transition-colors"
              >
                <Send className="w-4 h-4 text-[#E4C982]" />
              </button>
            </form>

            {/* Formal Application Prompt */}
            <div className="p-2.5 bg-[#0B1220] text-center">
              <button
                onClick={() => {
                  setWhatsAppModalOpen(false);
                  onOpenApply();
                }}
                className="text-[11px] text-[#E4C982] hover:underline font-semibold"
              >
                Prefer full formal application? Click here →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
