import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  ExternalLink,
  Shield,
  Building,
  Copy,
  Check,
  Navigation
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequired: 'Kitchen Renovations',
    location: 'Bengaluru / Mallathahalli',
    budgetRange: '₹30 Lakhs - ₹60 Lakhs (Renovation/Additions)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    const fullAddr = `${COMPANY_INFO.legalName}, ${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.pincode} (${COMPANY_INFO.address.landmark})`;
    navigator.clipboard.writeText(fullAddr).then(() => {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const rawNum = COMPANY_INFO.contacts.whatsappNumber;
    const msg = `*Avani Nivasa by Gowdru Realcom Enquiry*%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Valued Client')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || 'Not provided')}%0A` +
      `*Service:* ${encodeURIComponent(formData.serviceRequired)}%0A` +
      `*Location:* ${encodeURIComponent(formData.location)}%0A` +
      `*Budget:* ${encodeURIComponent(formData.budgetRange)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message || 'I would like to schedule a site consultation.')}`;

    const link = document.createElement('a');
    link.href = `https://wa.me/${rawNum}?text=${msg}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="contact-page-root" className="pt-28 pb-20 bg-[#FAF8F5]">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#F5F2EC] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C27848]">
              Connect With Your Construction Cavalry
            </span>
            <h1 className="mt-4 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#313030] cursor-crosshair">
              Initiate Your Architectural Consultation
            </h1>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#313030] cursor-crosshair">
              Direct leadership accessibility, transparent BOQ estimates, and zero-compromise engineering for your home or facility.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <ScrollReveal className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#E0D8CC] shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h2 className="text-2xl font-bold font-serif text-[#313030]">
                  Enquiry Transmitted Successfully
                </h2>
                <p className="text-sm text-[#5C564E] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your project specifications for <strong>{formData.location}</strong> have been routed directly to Sharath Kumar A N, Palaksha, and our engineering team. We will call you within 24 hours.
                </p>

                <div className="p-5 bg-[#F5F2EC] rounded-xl text-xs text-[#5C564E] max-w-md mx-auto text-left space-y-1">
                  <div className="font-semibold text-[#313030]">Summary of Details:</div>
                  <div>Service: {formData.serviceRequired}</div>
                  <div>Location: {formData.location}</div>
                  <div>Budget: {formData.budgetRange}</div>
                  <div>Phone: {formData.phone}</div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#20bd5a] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp Now</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#F5F2EC] text-[#313030] text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#EAE4D9] transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#313030] font-serif mb-1">
                    Send Direct Project Inquiry
                  </h2>
                  <p className="text-xs text-[#7C7469]">
                    Fill in your project requirements for a detailed cost breakdown and consultation schedule.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#4A453E] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Gowda"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D1C5] rounded-lg text-sm text-[#313030] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-[#4A453E] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D1C5] rounded-lg text-sm text-[#313030] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#4A453E] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D1C5] rounded-lg text-sm text-[#313030] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-[#4A453E] mb-1.5">
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D1C5] rounded-lg text-sm text-[#313030] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Single Floor Individual House Construction">Single Floor Individual House</option>
                      <option value="Luxurious Duplex Homes Construction">Luxurious Duplex Homes Construction</option>
                      <option value="Opulent Villa Construction">Opulent Villa Construction</option>
                      <option value="Factory & Industrial Construction">Factory & Industrial Construction</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-location" className="block text-xs font-bold uppercase tracking-wider text-[#4A453E] mb-1.5">
                      Plot / Project Location *
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Tumkur, Bengaluru, Hassan, Balangir"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D1C5] rounded-lg text-sm text-[#313030] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-bold uppercase tracking-wider text-[#4A453E] mb-1.5">
                      Budget Expectation
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D1C5] rounded-lg text-sm text-[#313030] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                    >
                      <option value="Under ₹30 Lakhs (Single Floor / Interior)">Under ₹30 Lakhs (Single Floor / Interior)</option>
                      <option value="₹30 Lakhs - ₹60 Lakhs (Renovation/Additions)">₹30 Lakhs - ₹60 Lakhs (Renovation/Additions)</option>
                      <option value="₹60 Lakhs - ₹1.2 Crore (Custom Duplex Build)">₹60 Lakhs - ₹1.2 Crore (Custom Duplex Build)</option>
                      <option value="₹1.2 Crore+ (Luxury Turnkey Villa)">₹1.2 Crore+ (Luxury Turnkey Villa)</option>
                      <option value="Factory / Industrial Commercial Project">Factory / Industrial Commercial Project</option>
                      <option value="Need Architectural Estimate First">Need Architectural Estimate First</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#4A453E] mb-1.5">
                    Message / Site Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your plot size, floors planned, style preferences, or current property condition..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8D1C5] rounded-lg text-sm text-[#313030] focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-4 bg-[#313030] hover:bg-[#C27848] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting...' : 'SUBMIT ENQUIRY'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>INSTANT WHATSAPP</span>
                  </button>
                </div>

                <div className="pt-2 text-center text-[11px] text-[#7C7469] flex items-center justify-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#C27848]" />
                  <span>Confidential inquiry directly received by Gowdru Realcom leadership.</span>
                </div>
              </form>
            )}
          </ScrollReveal>

          {/* Right Column: Direct Contact Details & Regional Info */}
          <ScrollReveal delay={0.2} className="lg:col-span-5 space-y-8">
            {/* Corporate Office Card */}
            <div className="bg-[#2A2724] text-[#EFEAE2] p-8 rounded-2xl border border-[#3E3831] space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C27848] font-bold">
                  Direct Headquarters
                </span>
                <h2 className="text-2xl font-bold font-serif text-white mt-1">
                  Avani Nivasa Corporate Studio
                </h2>
                <p className="text-xs text-[#BDB5AA] mt-1">
                  Gowdru Realcom Private Limited
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#D8D1C5]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C27848] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider">Office Address</strong>
                    <p className="text-xs text-[#BDB5AA] mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address.street},<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
                    </p>
                    <span className="text-[11px] text-[#C27848] block mt-1">
                      {COMPANY_INFO.address.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C27848] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider">Telephone</strong>
                    <div className="mt-0.5 space-y-1 text-xs">
                      <div>
                        <a href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-medium">
                          {COMPANY_INFO.contacts.primaryPhone} (Primary Line)
                        </a>
                      </div>
                      <div>
                        <a href={`tel:${COMPANY_INFO.contacts.secondaryPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-medium">
                          {COMPANY_INFO.contacts.secondaryPhone} (Civil Project Desk)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C27848] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider">Official Email</strong>
                    <div className="mt-0.5 space-y-0.5 text-xs">
                      <div>
                        <a href={`mailto:${COMPANY_INFO.contacts.primaryEmail}`} className="hover:text-white transition-colors">
                          {COMPANY_INFO.contacts.primaryEmail}
                        </a>
                      </div>
                      <div>
                        <a href={`mailto:${COMPANY_INFO.contacts.secondaryEmail}`} className="hover:text-white transition-colors">
                          {COMPANY_INFO.contacts.secondaryEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C27848] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider">Working Hours</strong>
                    <p className="text-xs text-[#BDB5AA] mt-0.5">
                      {COMPANY_INFO.contacts.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#3E3831] flex items-center justify-between">
                <span className="text-xs text-[#A89E92]">Directors: Sharath Kumar A N • Palaksha</span>
                <span className="text-xs text-[#C27848] font-bold">15+ Yrs</span>
              </div>
            </div>

            {/* Interactive Map & Navigation Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E0D8CC] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#313030] font-serif">Location & Directions</h3>
                  <p className="text-xs text-[#7C7469]">Mallathahalli, West Bengaluru 560056</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mallathahalli+Bengaluru+560056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C27848] hover:text-[#935229] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map visual preview iframe via OpenStreetMap */}
              <div className="w-full h-52 rounded-xl overflow-hidden border border-[#E0D8CC] relative bg-[#EFEAE2]">
                <iframe
                  title="Avani Nivasa Gowdru Realcom Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.4920%2C12.9560%2C77.5130%2C12.9730&layer=mapnik&marker=12.9647%2C77.5026"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Quick Actions & Transit Cues */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#F5F2EC] hover:bg-[#EAE4D9] text-[#313030] text-xs font-bold rounded-lg transition-colors border border-[#E0D8CC]"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#7C7469]" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Mallathahalli+Bengaluru+Karnataka+560056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-[#313030] hover:bg-[#C27848] text-white text-xs font-bold rounded-lg transition-colors text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Route</span>
                </a>
              </div>

              <div className="bg-[#FAF8F5] p-3 rounded-lg border border-[#ECE7DE] text-[11px] text-[#7C7469] space-y-1">
                <p>
                  <strong className="text-[#313030]">Key Landmarks:</strong> Adarsha Layout, Mallathahalli Lake, Bangalore University Jnana Bharathi Campus.
                </p>
                <p className="text-[10px] text-[#A89E92]">
                  Serving Karnataka (Tumkur, Bengaluru, Mysuru, Hassan), Orissa, and Chhattisgarh.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
