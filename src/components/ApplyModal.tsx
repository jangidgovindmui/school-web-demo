import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, User, Phone, Mail, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'apply' | 'visit';
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'apply',
}) => {
  const [mode, setMode] = useState<'apply' | 'visit'>(defaultMode);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    parentName: '',
    email: '',
    phone: '',
    grade: 'Grade 1',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.studentName.trim()) {
      errs.studentName = 'Student name is required';
    }
    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent or guardian name is required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Valid phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Admissions & Campus Visit Registration"
      className="fixed inset-0 z-50 bg-[#0B1220]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-[#0B1220]/10 overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B1220] p-6 text-white relative border-b border-[#C9A45C]/30">
          <button
            onClick={onClose}
            type="button"
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs text-[#E4C982] font-semibold tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4 text-[#C9A45C]" />
            <span>Academic Session 2026–27</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-white">
            {mode === 'apply' ? 'Online Admission Registration' : 'Schedule A Guided Campus Tour'}
          </h3>
          <p className="text-xs text-[#F8F6F0]/80 mt-1">
            Ranthambore International Academy · Sawai Madhopur, Rajasthan
          </p>

          {/* Toggle Tabs */}
          <div className="mt-4 flex rounded-lg p-1 bg-[#101A2B] border border-white/10 w-fit">
            <button
              type="button"
              onClick={() => {
                setMode('apply');
                setSubmitted(false);
              }}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                mode === 'apply'
                  ? 'bg-[#365C4A] text-white shadow-sm'
                  : 'text-[#F8F6F0]/70 hover:text-white'
              }`}
            >
              Apply for Admission
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('visit');
                setSubmitted(false);
              }}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                mode === 'visit'
                  ? 'bg-[#365C4A] text-white shadow-sm'
                  : 'text-[#F8F6F0]/70 hover:text-white'
              }`}
            >
              Book Campus Tour
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#F8F6F0] text-[#365C4A] flex items-center justify-center mx-auto mb-4 border border-[#4F7F68]/30">
                <CheckCircle2 className="w-10 h-10 text-[#4F7F68]" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0B1220] mb-2">
                Application Submitted Successfully
              </h4>
              <p className="text-sm text-[#172033]/80 max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.parentName}</strong>. In this live demonstration website, your form data was successfully validated. An admissions counselor would review and initiate contact promptly.
              </p>
              <div className="p-4 rounded-xl bg-[#F8F6F0] max-w-sm mx-auto text-xs text-[#687080] mb-6 text-left space-y-1">
                <p><strong>Student:</strong> {formData.studentName}</p>
                <p><strong>Grade:</strong> {formData.grade}</p>
                <p><strong>Contact:</strong> {formData.email} · {formData.phone}</p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-[#0B1220] text-white text-xs font-semibold hover:bg-[#101A2B]"
              >
                Close Preview
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1220]/15 text-sm focus:outline-none focus:border-[#365C4A]"
                  />
                  {errors.studentName && <span className="text-xs text-red-600">{errors.studentName}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1">
                    Grade Applying For *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1220]/15 text-sm focus:outline-none focus:border-[#365C4A]"
                  >
                    <option value="Nursery / Kindergarten">Nursery / Kindergarten</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11 (Science / Commerce / Arts)">Grade 11 (Science / Commerce / Arts)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1220]/15 text-sm focus:outline-none focus:border-[#365C4A]"
                  />
                  {errors.parentName && <span className="text-xs text-red-600">{errors.parentName}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 00000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1220]/15 text-sm focus:outline-none focus:border-[#365C4A]"
                  />
                  {errors.phone && <span className="text-xs text-red-600">{errors.phone}</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="parent.email@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1220]/15 text-sm focus:outline-none focus:border-[#365C4A]"
                />
                {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
              </div>

              {mode === 'visit' && (
                <div>
                  <label className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1220]/15 text-sm focus:outline-none focus:border-[#365C4A]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1">
                  Additional Notes / Student Interests
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Special talents, academic background, or specific questions..."
                  className="w-full px-3.5 py-2 rounded-lg border border-[#0B1220]/15 text-sm focus:outline-none focus:border-[#365C4A]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold text-[#687080] hover:text-[#0B1220]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-[#365C4A] hover:bg-[#4F7F68] text-white text-xs font-bold border border-[#C9A45C]/30 shadow transition-colors"
                >
                  {mode === 'apply' ? 'Submit Admission Form' : 'Confirm Tour Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
