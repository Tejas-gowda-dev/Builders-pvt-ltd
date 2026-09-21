import React, { useState } from 'react';
import { X, Send, MessageCircle, CheckCircle2, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledService = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(prefilledService || 'Kitchen Renovations');
  const [location, setLocation] = useState('Bengaluru (Mallathahalli / West)');
  const [budget, setBudget] = useState('₹40 Lakhs - ₹80 Lakhs');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const rawNum = COMPANY_INFO.contacts.whatsappNumber;
    const text = `*New Project Consultation Request - Gowdru Realcom / Avani Nivas*%0A` +
      `*Name:* ${encodeURIComponent(name || 'Client')}%0A` +
      `*Phone:* ${encodeURIComponent(phone || 'Not provided')}%0A` +
      `*Service:* ${encodeURIComponent(service)}%0A` +
      `*Location:* ${encodeURIComponent(location)}%0A` +
      `*Budget:* ${encodeURIComponent(budget)}%0A` +
      `*Notes:* ${encodeURIComponent(message || 'I would like to schedule a consultation.')}`;
    
    const link = document.createElement('a');
    link.href = `https://wa.me/${rawNum}?text=${text}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF9F6] rounded-2xl shadow-2xl border border-[#E6E1D8] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14244A] via-[#1A2E56] to-[#101D3A] text-white p-6 relative border-b border-[#233C70]">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[11px] uppercase tracking-widest text-[#E5A96A] font-bold">
            Avani Nivasa by Gowdru Realcom
          </span>
          <h2 id="consultation-modal-title" className="text-2xl font-normal font-serif mt-1">
            Book an Architectural Consultation
          </h2>
          <p className="text-xs text-[#CBD5E1] mt-1.5">
            Discuss your design, construction, or renovation directly with our leadership cavalry.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1918] font-serif-heading">
                Consultation Request Received
              </h3>
              <p className="text-sm text-[#5C564E] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{name}</strong>. Sharath Kumar A N / technical team will review your requirements for <strong>{location}</strong> and connect within 24 hours.
              </p>

              <div className="p-4 bg-[#F4F1EB] rounded-lg text-xs text-[#7C7469] text-left space-y-1">
                <div className="font-semibold text-[#1A1918]">Enquiry Reference Summary:</div>
                <div>Service: {service}</div>
                <div>Location: {location}</div>
                <div>Budget Range: {budget}</div>
                <div>Contact: {phone}</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Also Ping on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-[#2A2724] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#C27848] transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consult-name" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="consult-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D1C5] rounded-lg text-base sm:text-sm text-[#1A1918] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                  />
                </div>

                <div>
                  <label htmlFor="consult-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    id="consult-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8D1C5] rounded-lg text-base sm:text-sm text-[#1A1918] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="consult-email" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1">
                  Email Address
                </label>
                <input
                  id="consult-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ramesh@example.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8D1C5] rounded-lg text-base sm:text-sm text-[#1A1918] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consult-service" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1">
                    Service Required
                  </label>
                  <select
                    id="consult-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#D8D1C5] rounded-lg text-base sm:text-sm text-[#1A1918] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="consult-location" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1">
                    Project Location
                  </label>
                  <select
                    id="consult-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#D8D1C5] rounded-lg text-base sm:text-sm text-[#1A1918] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                  >
                    <option value="Bengaluru (Mallathahalli / West)">Bengaluru (Mallathahalli / West)</option>
                    <option value="Bengaluru (Rajarajeshwari Nagar)">Bengaluru (Rajarajeshwari Nagar)</option>
                    <option value="Bengaluru (Other Areas)">Bengaluru (Other Areas)</option>
                    <option value="Tumkur">Tumkur</option>
                    <option value="Mysuru">Mysuru</option>
                    <option value="Hassan">Hassan</option>
                    <option value="Other Karnataka Location">Other Karnataka Location</option>
                    <option value="Balangir / Orissa">Balangir / Orissa</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="consult-budget" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1">
                  Estimated Budget Range
                </label>
                <select
                  id="consult-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#D8D1C5] rounded-lg text-base sm:text-sm text-[#1A1918] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                >
                  <option value="₹15 Lakhs - ₹25 Lakhs (Interiors/Renovation)">₹15 Lakhs - ₹25 Lakhs (Interiors/Renovation)</option>
                  <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                  <option value="₹50 Lakhs - ₹1 Crore (Custom Villa / Turnkey)">₹50 Lakhs - ₹1 Crore (Custom Villa / Turnkey)</option>
                  <option value="₹1 Crore+ (Luxury Villa / Estate)">₹1 Crore+ (Luxury Villa / Estate)</option>
                  <option value="Under Assessment / Need Guidance">Under Assessment / Need Guidance</option>
                </select>
              </div>

              <div>
                <label htmlFor="consult-message" className="block text-xs font-semibold uppercase tracking-wider text-[#4A453E] mb-1">
                  Project Notes / Plot Dimensions
                </label>
                <textarea
                  id="consult-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Plot size (e.g. 30x40 or 40x60), current condition, key requirements..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D8D1C5] rounded-lg text-base sm:text-sm text-[#1A1918] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:flex-1 py-3 bg-[#C27848] hover:bg-[#a9653a] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting...' : 'Request Consultation'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp</span>
                </button>
              </div>

              <div className="pt-2 text-center text-[11px] text-[#7C7469] flex items-center justify-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#C27848]" />
                <span>Your information is handled strictly for your construction enquiry. No spam.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
