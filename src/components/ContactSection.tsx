import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    grade: 'Primary School (Grades 1-5)',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.parentName.trim()) {
      errs.parentName = 'Please enter student or parent name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    } else if (formData.phone.length < 7) {
      errs.phone = 'Phone number is too short';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief query or note';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift client processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        grade: 'Primary School (Grades 1-5)',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative border-b border-[#0B1220]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-[#4F7F68] font-semibold text-xs tracking-[0.2em] uppercase">
            <span className="w-5 h-[1.5px] bg-[#C9A45C]"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] tracking-tight leading-[1.15] mb-4">
            Connect With Our <br />
            <span className="italic font-normal text-[#C9A45C]">Admissions Office.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#172033]/80 leading-relaxed font-normal">
            Whether you wish to schedule a private walkthrough, consult our curriculum coordinators, or request prospectus materials, our team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: School Information & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#F8F6F0] border border-[#0B1220]/08">
              <h3 className="font-serif text-2xl font-bold text-[#0B1220] mb-6">
                Ranthambore International Academy
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#365C4A] border border-[#0B1220]/08 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1220] uppercase tracking-wider">Campus Address</h4>
                    <p className="text-sm text-[#172033]/80 mt-1 leading-relaxed">
                      {SCHOOL_INFO.address}
                    </p>
                    <span className="text-xs text-[#4F7F68] font-medium block mt-1">
                      Near Ranthambore Tiger Reserve Buffer Zone
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#365C4A] border border-[#0B1220]/08 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1220] uppercase tracking-wider">Admissions Telephone</h4>
                    <p className="text-sm text-[#172033]/80 mt-1 font-medium">{SCHOOL_INFO.phone}</p>
                    <span className="text-xs text-[#687080]">Demo Hotline: General Enquiries</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#365C4A] border border-[#0B1220]/08 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1220] uppercase tracking-wider">Electronic Mail</h4>
                    <p className="text-sm text-[#172033]/80 mt-1 font-medium">{SCHOOL_INFO.email}</p>
                    <span className="text-xs text-[#687080]">Direct response within 24 business hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#365C4A] border border-[#0B1220]/08 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1220] uppercase tracking-wider">Office Hours</h4>
                    <p className="text-sm text-[#172033]/80 mt-1">{SCHOOL_INFO.hours}</p>
                    <span className="text-xs text-[#687080]">Sundays & Public Holidays Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Note Disclaimer Box */}
            <div className="p-4 rounded-xl bg-[#F8F6F0]/60 border border-dashed border-[#0B1220]/15 text-xs text-[#687080]">
              <p className="font-semibold text-[#0B1220] mb-1">Demonstration Notice for Reviewers</p>
              <p>
                This form demonstrates live client-side validation and instantaneous simulated submission handling for prospective school client reviews.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#F8F6F0] rounded-2xl p-8 sm:p-10 border border-[#0B1220]/08 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#0B1220] mb-2">
              Send An Admissions Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#687080] mb-8">
              Complete the form below to receive detailed curriculum brochures or book a personalized counselor call.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-white border border-[#4F7F68]/30 text-center animate-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-full bg-[#F8F6F0] text-[#365C4A] flex items-center justify-center mx-auto mb-4 border border-[#4F7F68]/20">
                  <CheckCircle2 className="w-8 h-8 text-[#4F7F68]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#0B1220] mb-2">
                  Enquiry Received
                </h4>
                <p className="text-sm text-[#172033]/80 max-w-md mx-auto mb-6">
                  Thank you for your interest in Ranthambore International Academy. In this demonstration mode, your submission was validated and recorded successfully.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-[#0B1220] text-white text-xs font-semibold hover:bg-[#101A2B]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="parentName" className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1.5">
                    Student / Parent Name *
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => {
                      setFormData({ ...formData, parentName: e.target.value });
                      if (errors.parentName) setErrors({ ...errors, parentName: '' });
                    }}
                    placeholder="e.g. Vikramaditya Rathore"
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#0B1220] placeholder-[#687080]/60 focus:outline-none transition-colors ${
                      errors.parentName ? 'border-red-500 focus:border-red-500' : 'border-[#0B1220]/15 focus:border-[#365C4A]'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="parent@example.com"
                      className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#0B1220] placeholder-[#687080]/60 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#0B1220]/15 focus:border-[#365C4A]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#0B1220] placeholder-[#687080]/60 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#0B1220]/15 focus:border-[#365C4A]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="grade" className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1.5">
                    Grade Level of Interest
                  </label>
                  <select
                    id="grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#0B1220]/15 text-sm text-[#0B1220] focus:outline-none focus:border-[#365C4A]"
                  >
                    <option value="Early Years / Nursery / KG">Early Years (Nursery, LKG, UKG)</option>
                    <option value="Primary School (Grades 1-5)">Primary School (Grades 1 – 5)</option>
                    <option value="Middle School (Grades 6-8)">Middle School (Grades 6 – 8)</option>
                    <option value="Senior School (Grades 9-11)">Senior School (Grades 9 – 11)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#0B1220] uppercase tracking-wider mb-1.5">
                    Your Message / Question *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Tell us about your child's interests, current grade, or any questions about admission dates and campus life..."
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#0B1220] placeholder-[#687080]/60 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#0B1220]/15 focus:border-[#365C4A]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#365C4A] hover:bg-[#4F7F68] active:scale-[0.98] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#365C4A] disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#E4C982]" />
                  <span>{isSubmitting ? 'Submitting...' : 'Send Enquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
