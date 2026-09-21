import React, { useState, useRef, useEffect } from 'react';
import { 
  PRICING_TIERS, 
  DIMENSION_PRESETS, 
  SERVICE_OPTIONS, 
  LOCATION_OPTIONS, 
  formatIndianCurrency, 
  PricingTier 
} from '../data/pricing';
import { COMPANY_INFO } from '../data/company';
import { ScrollReveal } from './ScrollReveal';
import { 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Calculator, 
  ShieldCheck, 
  PhoneCall, 
  Copy, 
  CheckCircle2, 
  Sparkles, 
  Maximize2, 
  Building2, 
  Compass, 
  RotateCcw,
  Clock,
  Send,
  Camera,
  Eye,
  X,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

interface PricingSectionProps {
  onOpenConsultation?: () => void;
  standalone?: boolean;
  showStep2?: boolean; // When false (on HomePage), Step 2 is hidden and cards navigate to PricingPage
  onSelectPlanForPricingPage?: (tierId: string) => void;
  initialTierId?: string;
}

type JourneyStep = 'view' | 'select' | 'details' | 'submitted';

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  standalone = false,
  showStep2 = true,
  onSelectPlanForPricingPage,
  initialTierId = 'royal-package'
}) => {
  // Current active step in customer journey: View Pricing (1) -> Select Requirement (2) -> Enter Details (3) -> Submit Enquiry (4) -> WhatsApp (5)
  const [activeStep, setActiveStep] = useState<JourneyStep>('view');
  
  // Selected package/tier
  const [selectedTierId, setSelectedTierId] = useState<string>(initialTierId || 'royal-package');
  
  // Measurement in sq.ft
  const [measurementSqFt, setMeasurementSqFt] = useState<number>(1200);
  const [customMeasurementInput, setCustomMeasurementInput] = useState<string>('1200');

  // Custom Package specific state
  const [customRatePerSqFt, setCustomRatePerSqFt] = useState<number>(2200);
  const [customBudgetMode, setCustomBudgetMode] = useState<'rate' | 'target'>('rate');
  const [customTargetBudget, setCustomTargetBudget] = useState<number>(3500000); // 35 Lakhs default

  // Customer details
  const [customerName, setCustomerName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>(LOCATION_OPTIONS[0]);
  const [additionalRequirements, setAdditionalRequirements] = useState<string>('');

  // Image Upload / Preview state
  const [tierImages, setTierImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('avani_pricing_images');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    const initial: Record<string, string> = {};
    PRICING_TIERS.forEach((t) => {
      initial[t.id] = t.image;
    });
    return initial;
  });

  const [previewModalImage, setPreviewModalImage] = useState<{
    url: string;
    title: string;
    subtitle: string;
  } | null>(null);

  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Submission state
  const [formErrors, setFormErrors] = useState<{ name?: string; mobile?: string; measurement?: string }>({});
  const [submittedEnquiry, setSubmittedEnquiry] = useState<{
    referenceId: string;
    customerName: string;
    mobileNumber: string;
    serviceName: string;
    measurement: number;
    estimatedCost: number | string;
    location: string;
    additionalRequirements: string;
    timestamp: string;
  } | null>(null);

  const [copiedText, setCopiedText] = useState(false);
  const requirementFormRef = useRef<HTMLDivElement>(null);

  // Sync initialTierId if passed as prop
  useEffect(() => {
    if (initialTierId) {
      setSelectedTierId(initialTierId);
      if (showStep2) {
        setActiveStep('select');
      }
    }
  }, [initialTierId, showStep2]);

  // Active tier
  const currentTier: PricingTier = PRICING_TIERS.find((t) => t.id === selectedTierId) || PRICING_TIERS[0];
  
  // Estimated cost calculation
  let estimatedCost: number = 0;
  if (currentTier.isCustom || currentTier.id === 'custom-package' || currentTier.id === 'client-custom') {
    if (customBudgetMode === 'rate') {
      estimatedCost = customRatePerSqFt * measurementSqFt;
    } else {
      estimatedCost = customTargetBudget;
    }
  } else if (currentTier.pricingType === 'per_sqft') {
    estimatedCost = currentTier.ratePerSqFt * measurementSqFt;
  } else {
    // Package rate
    estimatedCost = currentTier.ratePerSqFt > 10000 ? currentTier.ratePerSqFt : currentTier.ratePerSqFt * measurementSqFt;
  }

  // Handle choosing a plan from the View Pricing cards
  const handleSelectPlan = (tierId: string) => {
    setSelectedTierId(tierId);
    if (!showStep2 && onSelectPlanForPricingPage) {
      onSelectPlanForPricingPage(tierId);
      return;
    }
    setActiveStep('select');
    setTimeout(() => {
      requirementFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // Handle measurement preset click
  const handlePresetSelect = (sqft: number) => {
    setMeasurementSqFt(sqft);
    setCustomMeasurementInput(sqft.toString());
  };

  const handleMeasurementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomMeasurementInput(val);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num > 0) {
      setMeasurementSqFt(num);
    }
  };

  // Image Upload handler
  const handleFileUpload = (tierId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setTierImages((prev) => {
          const updated = { ...prev, [tierId]: dataUrl };
          try {
            localStorage.setItem('avani_pricing_images', JSON.stringify(updated));
          } catch (err) {
            // ignore
          }
          return updated;
        });
      }
    };
    reader.readAsDataURL(file);
  };

  // Build WhatsApp text formatted cleanly
  const generateWhatsAppMessage = (enquiryData: {
    customerName: string;
    mobileNumber: string;
    serviceName: string;
    measurement: number;
    estimatedCost: number | string;
    location: string;
    additionalRequirements: string;
    referenceId: string;
  }) => {
    const costText = typeof enquiryData.estimatedCost === 'number' 
      ? formatIndianCurrency(enquiryData.estimatedCost)
      : enquiryData.estimatedCost;

    const lines = [
      `*Avani Nivasa by Gowdru Realcom – Customer Requirement Enquiry*`,
      `Ref: ${enquiryData.referenceId}`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Customer Name:* ${enquiryData.customerName}`,
      `📱 *Mobile Number:* +91 ${enquiryData.mobileNumber}`,
      `🏗️ *Selected Service / Pricing:* ${enquiryData.serviceName}`,
      `📐 *Required Measurement:* ${enquiryData.measurement.toLocaleString('en-IN')} sq.ft`,
      `💰 *Estimated Budget:* ${costText}`,
      `📍 *Location:* ${enquiryData.location}`,
      enquiryData.additionalRequirements ? `📝 *Additional Requirements:* ${enquiryData.additionalRequirements}` : `📝 *Additional Requirements:* Looking for blueprint review, tailored BOQ & site consultation.`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Hello Avani Nivasa team, I have viewed your pricing and submitted my requirement. Please share the detailed breakdown and schedule a site consultation.`
    ];
    return lines.join('\n');
  };

  // Validate form
  const validateForm = () => {
    const errors: { name?: string; mobile?: string; measurement?: string } = {};
    if (!customerName.trim()) {
      errors.name = 'Please enter your name.';
    }
    const cleanMobile = mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      errors.mobile = 'Please enter a valid 10-digit mobile number.';
    }
    if (!measurementSqFt || measurementSqFt <= 0) {
      errors.measurement = 'Please specify required measurement in sq.ft.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit Enquiry
  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const refId = `AN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEnquiry = {
      referenceId: refId,
      customerName: customerName.trim(),
      mobileNumber: mobileNumber.replace(/\D/g, '').slice(-10),
      serviceName: (currentTier.isCustom || currentTier.id === 'custom-package' || currentTier.id === 'client-custom')
        ? `${currentTier.name} (${customBudgetMode === 'rate' ? `₹${customRatePerSqFt}/sq.ft` : `Target: ${formatIndianCurrency(customTargetBudget)}`})`
        : `${currentTier.name} (${currentTier.rateDisplay})`,
      measurement: measurementSqFt,
      estimatedCost,
      location: selectedLocation,
      additionalRequirements: additionalRequirements.trim(),
      timestamp: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    setSubmittedEnquiry(newEnquiry);
    setActiveStep('submitted');

    // Launch WhatsApp
    const msg = generateWhatsAppMessage(newEnquiry);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleManualWhatsAppLaunch = () => {
    if (!submittedEnquiry) return;
    const msg = generateWhatsAppMessage(submittedEnquiry);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyEnquiry = () => {
    if (!submittedEnquiry) return;
    const msg = generateWhatsAppMessage(submittedEnquiry);
    navigator.clipboard.writeText(msg);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  const handleResetForm = () => {
    setActiveStep('view');
    setSubmittedEnquiry(null);
    setCustomerName('');
    setMobileNumber('');
    setAdditionalRequirements('');
  };

  return (
    <section id="pricing" className={`${standalone ? 'py-12 sm:py-20' : 'py-20 bg-[#FAF9F6] border-t border-[#EAE4DC]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE4] text-[#8D4B20] text-xs font-bold uppercase tracking-wider mb-4 border border-[#E2D8CC]">
            <Calculator className="w-3.5 h-3.5 text-[#C27848]" />
            <span>Transparent Rate Cards & Fast Enquiry</span>
          </div>
          <h2 className="block font-serif text-3xl sm:text-4xl lg:text-[46px] leading-tight text-[#313030] tracking-tight">
            Transparent Pricing with No Hidden Surprises
          </h2>
          <p className="mt-4 text-base text-[#5C564E] leading-relaxed">
            {showStep2 
              ? 'Choose your architectural package, calculate your estimated investment, and connect directly with our founders on WhatsApp for itemized milestone budgeting.'
              : 'Select from our standard turnkey packages or our 100% bespoke client-customized package. Click any plan to calculate your exact project estimate.'}
          </p>
        </ScrollReveal>

        {/* Customer Journey Roadmap Bar - Rendered only when showStep2 is true */}
        {showStep2 && (
          <ScrollReveal delay={0.1} className="mb-14">
            <div className="bg-[#FAF8F5] border border-[#E0D8CC] rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-widest text-[#8D4B20] mb-3 text-center sm:text-left">
                Seamless Customer Journey
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-2">
                
                {/* Step 1 */}
                <div 
                  onClick={() => setActiveStep('view')}
                  className={`flex items-center gap-2 p-2.5 rounded-xl cursor-pointer transition-all ${
                    activeStep === 'view' 
                      ? 'bg-[#14244A] text-white shadow-xs' 
                      : 'bg-[#F2ECE4] text-[#4A453E] hover:bg-[#EAE2D7]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    activeStep === 'view' ? 'bg-[#C27848] text-white' : 'bg-[#E0D7CB] text-[#313030]'
                  }`}>
                    1
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold leading-tight truncate">View Pricing</div>
                    <div className="text-[10px] opacity-75 hidden sm:block truncate">Review rate cards</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div 
                  onClick={() => setActiveStep('select')}
                  className={`flex items-center gap-2 p-2.5 rounded-xl cursor-pointer transition-all ${
                    activeStep === 'select' 
                      ? 'bg-[#14244A] text-white shadow-xs' 
                      : 'bg-[#F2ECE4] text-[#4A453E] hover:bg-[#EAE2D7]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    activeStep === 'select' ? 'bg-[#C27848] text-white' : 'bg-[#E0D7CB] text-[#313030]'
                  }`}>
                    2
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold leading-tight truncate">Select Need</div>
                    <div className="text-[10px] opacity-75 hidden sm:block truncate">Pick plan & size</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div 
                  onClick={() => {
                    if (activeStep !== 'submitted') setActiveStep('details');
                  }}
                  className={`flex items-center gap-2 p-2.5 rounded-xl cursor-pointer transition-all ${
                    activeStep === 'details' 
                      ? 'bg-[#14244A] text-white shadow-xs' 
                      : 'bg-[#F2ECE4] text-[#4A453E] hover:bg-[#EAE2D7]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    activeStep === 'details' ? 'bg-[#C27848] text-white' : 'bg-[#E0D7CB] text-[#313030]'
                  }`}>
                    3
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold leading-tight truncate">Enter Details</div>
                    <div className="text-[10px] opacity-75 hidden sm:block truncate">Name & mobile</div>
                  </div>
                </div>

                {/* Step 4 */}
                <div 
                  className={`flex items-center gap-2 p-2.5 rounded-xl transition-all ${
                    activeStep === 'submitted' 
                      ? 'bg-[#14244A] text-white shadow-xs' 
                      : 'bg-[#F2ECE4] text-[#4A453E]'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    activeStep === 'submitted' ? 'bg-[#C27848] text-white' : 'bg-[#E0D7CB] text-[#313030]'
                  }`}>
                    4
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold leading-tight truncate">Submit Enquiry</div>
                    <div className="text-[10px] opacity-75 hidden sm:block truncate">Instant verified ref</div>
                  </div>
                </div>

                {/* Step 5 */}
                <div 
                  className={`col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl transition-all ${
                    activeStep === 'submitted' 
                      ? 'bg-[#25D366]/20 border border-[#25D366]/40 text-[#128C7E] font-bold' 
                      : 'bg-[#F2ECE4] text-[#4A453E]'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold leading-tight truncate">WhatsApp</div>
                    <div className="text-[10px] opacity-75 hidden sm:block truncate">Instant site chat</div>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}

        {/* STEP 1: View Pricing (Tier Cards with Images & Upload Option) */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#C27848] uppercase tracking-wider">
                {showStep2 ? 'Step 1' : 'Pricing Plans & Packages'}
              </span>
              <h3 className="text-2xl font-serif text-[#313030]">Explore Architectural & Construction Packages</h3>
            </div>
            <span className="text-xs text-[#7C7469]">All rates include architectural blueprint guidance & GST compliance</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, idx) => {
              const isSelected = selectedTierId === tier.id;
              const currentImg = tierImages[tier.id] || tier.image;

              return (
                <ScrollReveal
                  key={tier.id}
                  delay={idx * 0.05}
                  className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                    tier.popular
                      ? 'bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EE] border-[#C27848] shadow-md ring-1 ring-[#C27848]/30'
                      : tier.isCustom
                      ? 'bg-gradient-to-b from-[#FAF7F2] to-[#F3EDE3] border-[#8D4B20] shadow-md'
                      : isSelected && showStep2
                      ? 'bg-white border-[#313030] shadow-md ring-1 ring-[#313030]'
                      : 'bg-white border-[#E5DFD5] hover:border-[#C27848]/60 hover:shadow-sm'
                  }`}
                >
                  {/* Top Image Banner with Image Upload & View actions */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#2D2A26]">
                    <img
                      src={currentImg}
                      alt={tier.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                    {/* Top Badge */}
                    {tier.badge && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
                          tier.popular
                            ? 'bg-[#C27848] text-white'
                            : tier.isCustom
                            ? 'bg-[#8D4B20] text-[#FFF6EE] ring-1 ring-white/30'
                            : 'bg-white/90 text-[#313030] backdrop-blur-xs'
                        }`}>
                          {tier.badge}
                        </span>
                      </div>
                    )}

                    {/* Image Controls: Expand / Upload */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewModalImage({
                            url: currentImg,
                            title: tier.name,
                            subtitle: tier.subtitle
                          });
                        }}
                        title="View Full Image"
                        className="p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-xs transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <label
                        title="Upload Custom Image for this Package"
                        className="p-1.5 bg-black/60 hover:bg-[#C27848] text-white rounded-lg backdrop-blur-xs transition-colors cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          ref={(el) => (fileInputRefs.current[tier.id] = el)}
                          onChange={(e) => handleFileUpload(tier.id, e)}
                        />
                      </label>
                    </div>

                    {/* Title Overlay in Image */}
                    <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                      <h4 className="text-lg font-bold font-serif leading-tight drop-shadow-sm">
                        {tier.name}
                      </h4>
                      <p className="text-[11px] text-[#E2DCD5] line-clamp-1 mt-0.5">
                        {tier.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rate Display */}
                      <div className="py-3 border-b border-[#EFEAE2]">
                        <div className="flex items-baseline gap-1.5">
                          <span className={`font-serif font-extrabold text-[#313030] ${
                            tier.isCustom ? 'text-2xl sm:text-[26px] text-[#8D4B20]' : 'text-3xl'
                          }`}>
                            {tier.rateDisplay}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8C8377] mt-1">
                          {tier.highlightText}
                        </p>
                      </div>

                      {/* INCLUDED SERVICES checklist */}
                      <div className="space-y-2 mt-4">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#7C7469]">INCLUDED SERVICES</div>
                        <ul className="space-y-1.5">
                          {tier.deliverables.slice(0, 5).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#4A453E] leading-snug">
                              <Check className="w-3.5 h-3.5 text-[#C27848] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Project summary highlights */}
                      <div className="mt-4 pt-3 border-t border-[#F0EBE3]">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#7C7469] mb-1.5">
                          Project summary
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {(tier.projectSummary || tier.materialsIncluded || []).slice(0, 4).map((item, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#F5F2EC] text-[#5C564E] border border-[#EAE4DC]">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div className="mt-6 pt-2">
                      <button
                        id={`select-tier-${tier.id}`}
                        onClick={() => handleSelectPlan(tier.id)}
                        className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                          isSelected && showStep2
                            ? 'bg-[#313030] text-white shadow-xs'
                            : tier.isCustom
                            ? 'bg-[#8D4B20] text-white hover:bg-[#6f3816] shadow-sm'
                            : 'bg-[#FAF8F5] border border-[#D5CCC0] text-[#313030] hover:bg-[#C27848] hover:text-white hover:border-[#C27848]'
                        }`}
                      >
                        <span>
                          {showStep2 
                            ? (isSelected ? 'Selected Package' : (tier.isCustom ? 'Customize & Calculate' : 'Select & Calculate'))
                            : (tier.isCustom ? 'Customize on Pricing Page' : 'Select & Calculate on Pricing Page')}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* If on HomePage (showStep2 === false), render a dedicated quick banner to open the full Pricing Estimator */}
          {!showStep2 && (
            <div className="mt-10 bg-gradient-to-r from-[#14244A] to-[#1A2E56] text-white p-6 sm:p-8 rounded-2xl border border-[#2B4A85] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 text-xs text-[#E5A96A] font-bold uppercase tracking-wider">
                  <Calculator className="w-4 h-4" />
                  <span>Looking to Calculate Specific Built-Up Area or Custom Rate?</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-serif text-white">
                  Get an Instant Itemized Estimate on Our Dedicated Pricing Page
                </h4>
                <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-2xl">
                  Adjust measurements in sq.ft, configure custom client specifications, and receive founder-level quotation directly on WhatsApp.
                </p>
              </div>

              <button
                onClick={() => {
                  if (onSelectPlanForPricingPage) {
                    onSelectPlanForPricingPage('royal-package');
                  }
                }}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#C27848] hover:bg-[#ab6539] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Open Full Pricing Estimator</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* STEP 2, 3, 4 & 5: Interactive Customer Journey & Requirement Form (ONLY RENDERED ON PRICING PAGE WHEN showStep2 IS TRUE) */}
        {showStep2 && (
          <div ref={requirementFormRef} id="enquiry-form-container" className="scroll-mt-28">
            <div className="bg-[#FAF8F5] rounded-3xl border border-[#E0D8CC] shadow-sm overflow-hidden">
              
              {/* Form Top Header */}
              <div className="bg-gradient-to-r from-[#14244A] via-[#1A2E56] to-[#101D3A] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#233C70]">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs text-[#E5A96A] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Customer Requirement & Estimate Engine</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white">
                    Step 2 & 3: Configure Requirement & Submit for WhatsApp Consultation
                  </h3>
                </div>
                
                <div className="bg-[#1F3563] px-4 py-2.5 rounded-xl border border-[#2B4A85] text-right shrink-0 shadow-xs">
                  <div className="text-[10px] uppercase tracking-wider text-[#CBD5E1] font-semibold">Live Estimated Cost</div>
                  <div className="text-lg sm:text-xl font-bold text-[#E5A96A] font-serif">
                    {formatIndianCurrency(estimatedCost)}
                  </div>
                  <div className="text-[10px] text-[#94A3B8]">
                    {currentTier.id === 'client-custom'
                      ? (customBudgetMode === 'rate' ? `${measurementSqFt.toLocaleString('en-IN')} sq.ft @ ₹${customRatePerSqFt}/sq.ft` : 'Custom Target Budget')
                      : `${measurementSqFt.toLocaleString('en-IN')} sq.ft @ ${currentTier.rateDisplay}`}
                  </div>
                </div>
              </div>

              {/* If Submitted: Show Step 4 & 5 Confirmation View */}
              {submittedEnquiry && activeStep === 'submitted' ? (
                <div className="p-6 sm:p-10">
                  <div className="max-w-2xl mx-auto text-center space-y-6">
                    <div className="w-16 h-16 bg-[#25D366]/10 text-[#128C7E] rounded-full flex items-center justify-center mx-auto border border-[#25D366]/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#128C7E] bg-[#E8F8F0] px-3 py-1 rounded-full">
                        Enquiry Verified & Generated
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-serif text-[#313030] mt-3">
                        Thank You, {submittedEnquiry.customerName}!
                      </h4>
                      <p className="text-sm text-[#5C564E] mt-2">
                        Your enquiry reference is <span className="font-bold text-[#313030]">{submittedEnquiry.referenceId}</span>. A WhatsApp chat window has been initiated with our team.
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="bg-white rounded-2xl p-6 border border-[#E5DFD5] text-left space-y-3.5 shadow-xs">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#C27848] border-b border-[#F0EBE3] pb-2">
                        Enquiry Summary Details
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-[#8C8377] block">Customer Name:</span>
                          <span className="font-bold text-[#313030] text-sm">{submittedEnquiry.customerName}</span>
                        </div>
                        <div>
                          <span className="text-[#8C8377] block">Mobile Number:</span>
                          <span className="font-bold text-[#313030] text-sm">+91 {submittedEnquiry.mobileNumber}</span>
                        </div>
                        <div>
                          <span className="text-[#8C8377] block">Selected Service / Pricing:</span>
                          <span className="font-bold text-[#313030]">{submittedEnquiry.serviceName}</span>
                        </div>
                        <div>
                          <span className="text-[#8C8377] block">Required Measurement:</span>
                          <span className="font-bold text-[#313030]">{submittedEnquiry.measurement.toLocaleString('en-IN')} sq.ft</span>
                        </div>
                        <div>
                          <span className="text-[#8C8377] block">Estimated Construction Budget:</span>
                          <span className="font-bold text-[#C27848] text-sm">
                            {typeof submittedEnquiry.estimatedCost === 'number' 
                              ? formatIndianCurrency(submittedEnquiry.estimatedCost)
                              : submittedEnquiry.estimatedCost}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#8C8377] block">Preferred Location:</span>
                          <span className="font-bold text-[#313030]">{submittedEnquiry.location}</span>
                        </div>
                      </div>

                      {submittedEnquiry.additionalRequirements && (
                        <div className="pt-2 border-t border-[#F0EBE3] text-xs">
                          <span className="text-[#8C8377] block">Additional Requirements:</span>
                          <p className="text-[#313030] mt-0.5 italic">"{submittedEnquiry.additionalRequirements}"</p>
                        </div>
                      )}
                    </div>

                    {/* Direct Action Buttons: WhatsApp & Call */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <button
                        id="launch-whatsapp-btn"
                        onClick={handleManualWhatsAppLaunch}
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat on WhatsApp Now ({COMPANY_INFO.contacts.whatsappDisplay})</span>
                      </button>

                      <button
                        id="copy-enquiry-btn"
                        onClick={handleCopyEnquiry}
                        className="w-full sm:w-auto px-5 py-3.5 bg-white border border-[#D8D1C5] hover:bg-[#F5F2EC] text-[#313030] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                      >
                        {copiedText ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#7C7469]" />}
                        <span>{copiedText ? 'Copied to Clipboard!' : 'Copy Enquiry Message'}</span>
                      </button>

                      <a
                        href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                        className="w-full sm:w-auto px-5 py-3.5 bg-white border border-[#D8D1C5] hover:bg-[#F5F2EC] text-[#313030] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <PhoneCall className="w-4 h-4 text-[#C27848]" />
                        <span>Call Cavalry Directly</span>
                      </a>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleResetForm}
                        className="text-xs text-[#7C7469] hover:text-[#313030] underline flex items-center justify-center gap-1 mx-auto"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Submit another requirement / change measurement</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Normal Form View: Step 2 & 3 Input Fields */
                <form onSubmit={handleSubmitEnquiry} className="p-6 sm:p-10 space-y-8">
                  
                  {/* STEP 2: Select Requirement & Measurement */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#313030] flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#C27848]" />
                        <span>1. Select Service / Pricing Package</span>
                      </label>
                      <span className="text-[11px] text-[#7C7469]">Click any service to adjust rates</span>
                    </div>

                    {/* Service selection pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {SERVICE_OPTIONS.map((srv) => {
                        const isChosen = selectedTierId === srv.id;
                        return (
                          <button
                            type="button"
                            key={srv.id}
                            onClick={() => {
                              setSelectedTierId(srv.id);
                              setActiveStep('select');
                            }}
                            className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all flex items-center justify-between gap-2 ${
                              isChosen
                                ? 'bg-[#313030] text-white border-[#313030] shadow-xs'
                                : 'bg-white text-[#4A453E] border-[#E2DBCF] hover:border-[#C27848]'
                            }`}
                          >
                            <span className="truncate">{srv.label}</span>
                            {isChosen && <Check className="w-3.5 h-3.5 text-[#E8A573] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* If Client-Custom package is selected: Dedicated Customizer Controls */}
                  {(selectedTierId === 'custom-package' || selectedTierId === 'client-custom' || currentTier.isCustom) && (
                    <div className="bg-[#FAF5EE] p-5 rounded-2xl border border-[#D5C2AF] space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <SlidersHorizontal className="w-4 h-4 text-[#8D4B20]" />
                          <span className="text-xs font-bold uppercase tracking-wider text-[#8D4B20]">
                            Client Customization Configuration
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#8D4B20]">100% Bespoke</span>
                      </div>

                      {/* Mode switch */}
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setCustomBudgetMode('rate')}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            customBudgetMode === 'rate'
                              ? 'bg-[#8D4B20] text-white shadow-xs'
                              : 'bg-white text-[#5C564E] border border-[#DDD4C7]'
                          }`}
                        >
                          Estimate by Custom Rate (₹/sq.ft)
                        </button>
                        <button
                          type="button"
                          onClick={() => setCustomBudgetMode('target')}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            customBudgetMode === 'target'
                              ? 'bg-[#8D4B20] text-white shadow-xs'
                              : 'bg-white text-[#5C564E] border border-[#DDD4C7]'
                          }`}
                        >
                          Target Total Project Budget (₹)
                        </button>
                      </div>

                      {customBudgetMode === 'rate' ? (
                        <div className="bg-white p-4 rounded-xl border border-[#E5DFD5] space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-[#5C564E]">Custom Rate per Sq. Ft:</span>
                            <span className="text-sm font-bold text-[#8D4B20] font-serif">
                              ₹{customRatePerSqFt.toLocaleString('en-IN')} / sq.ft
                            </span>
                          </div>
                          <input
                            type="range"
                            min="1600"
                            max="4500"
                            step="50"
                            value={customRatePerSqFt}
                            onChange={(e) => setCustomRatePerSqFt(parseInt(e.target.value, 10))}
                            className="w-full accent-[#8D4B20] cursor-pointer"
                          />
                          <div className="flex justify-between text-[10px] text-[#8C8377]">
                            <span>₹1,600 (Economy)</span>
                            <span>₹2,400 (Standard Duplex)</span>
                            <span>₹3,500+ (Ultra-Luxury)</span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white p-4 rounded-xl border border-[#E5DFD5] space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-[#5C564E]">Target Budget:</span>
                            <span className="text-sm font-bold text-[#8D4B20] font-serif">
                              {formatIndianCurrency(customTargetBudget)}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {[2500000, 3500000, 5000000, 7500000, 10000000, 15000000].map((amt) => (
                              <button
                                type="button"
                                key={amt}
                                onClick={() => setCustomTargetBudget(amt)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                                  customTargetBudget === amt
                                    ? 'bg-[#8D4B20] text-white'
                                    : 'bg-[#F9F7F4] text-[#4A453E] border border-[#DDD4C7]'
                                }`}
                              >
                                {formatIndianCurrency(amt)}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Required Measurement & Dimension Presets */}
                  <div className="space-y-4 pt-4 border-t border-[#EAE4DC]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#313030] flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C27848]" />
                        <span>2. Required Measurement (Built-up Area in Sq. Ft.)</span>
                      </label>
                      <span className="text-xs font-bold text-[#C27848]">
                        Active: {measurementSqFt.toLocaleString('en-IN')} sq.ft
                      </span>
                    </div>

                    {/* Preset Dimension Chips */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {DIMENSION_PRESETS.map((preset, idx) => {
                        const isPresetActive = measurementSqFt === preset.sqft;
                        return (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => handlePresetSelect(preset.sqft)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              isPresetActive
                                ? 'bg-[#EAE4D9] border-[#C27848] ring-1 ring-[#C27848]'
                                : 'bg-white border-[#E2DBCF] hover:bg-[#F9F7F4]'
                            }`}
                          >
                            <div className="text-xs font-bold text-[#313030]">{preset.label}</div>
                            <div className="text-[11px] text-[#7C7469]">{preset.sqft} sq.ft</div>
                            <div className="text-[10px] text-[#C27848] truncate mt-0.5">{preset.popularFor}</div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Custom Measurement Slider & Direct Input */}
                    <div className="bg-white p-4 rounded-xl border border-[#E2DBCF] space-y-3">
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="500"
                          max="8000"
                          step="50"
                          value={measurementSqFt}
                          onChange={(e) => {
                            const val = parseInt(e.target.value, 10);
                            setMeasurementSqFt(val);
                            setCustomMeasurementInput(val.toString());
                          }}
                          className="w-full accent-[#C27848] cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs text-[#7C7469]">Or enter exact square footage:</span>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            value={customMeasurementInput}
                            onChange={handleMeasurementChange}
                            min="100"
                            max="50000"
                            className="w-28 px-3 py-1.5 text-right font-bold text-[#313030] border border-[#D5CCC0] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#C27848]"
                          />
                          <span className="text-xs font-bold text-[#4A453E]">sq.ft</span>
                        </div>
                      </div>
                      {formErrors.measurement && (
                        <p className="text-[11px] text-red-600 font-medium">{formErrors.measurement}</p>
                      )}
                    </div>
                  </div>

                  {/* STEP 3: Enter Customer Details */}
                  <div className="space-y-4 pt-4 border-t border-[#EAE4DC]">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#313030] flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-[#C27848]" />
                        <span>3. Enter Your Details & Submit Enquiry</span>
                      </label>
                      <span className="text-[11px] text-[#7C7469]">Founder-led direct response</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Customer Name */}
                      <div>
                        <label className="block text-xs font-semibold text-[#4A453E] mb-1.5">
                          Customer Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sharath Gowda"
                          value={customerName}
                          onChange={(e) => {
                            setCustomerName(e.target.value);
                            if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                          }}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#313030] bg-white focus:outline-none focus:ring-2 focus:ring-[#C27848] transition-all ${
                            formErrors.name ? 'border-red-400 bg-red-50/20' : 'border-[#D5CCC0]'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-[11px] text-red-600 mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      {/* Mobile Number */}
                      <div>
                        <label className="block text-xs font-semibold text-[#4A453E] mb-1.5">
                          Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center">
                          <span className="inline-flex items-center px-3 py-2.5 rounded-l-xl border border-r-0 border-[#D5CCC0] bg-[#F5F2EC] text-xs font-bold text-[#5C564E]">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="99163 37333"
                            value={mobileNumber}
                            onChange={(e) => {
                              setMobileNumber(e.target.value);
                              if (formErrors.mobile) setFormErrors({ ...formErrors, mobile: undefined });
                            }}
                            className={`w-full px-4 py-2.5 rounded-r-xl border text-sm text-[#313030] bg-white focus:outline-none focus:ring-2 focus:ring-[#C27848] transition-all ${
                              formErrors.mobile ? 'border-red-400 bg-red-50/20' : 'border-[#D5CCC0]'
                            }`}
                          />
                        </div>
                        {formErrors.mobile && (
                          <p className="text-[11px] text-red-600 mt-1">{formErrors.mobile}</p>
                        )}
                      </div>
                    </div>

                    {/* Location Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-[#4A453E] mb-1.5">
                        Plot / Site Location
                      </label>
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D5CCC0] text-sm text-[#313030] bg-white focus:outline-none focus:ring-2 focus:ring-[#C27848]"
                      >
                        {LOCATION_OPTIONS.map((loc, i) => (
                          <option key={i} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Additional Requirements */}
                    <div>
                      <label className="block text-xs font-semibold text-[#4A453E] mb-1.5">
                        Additional Requirements (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder={selectedTierId === 'client-custom' 
                          ? "e.g. Need North-facing villa with Italian marble, customized teakwood main entrance, private gym on second floor, target handover in 10 months..."
                          : "e.g. 3-storey G+2 plan with North-facing entrance, modular kitchen with island, target start date in 2 months..."}
                        value={additionalRequirements}
                        onChange={(e) => setAdditionalRequirements(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D5CCC0] text-sm text-[#313030] bg-white focus:outline-none focus:ring-2 focus:ring-[#C27848] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Enquiry & Launch WhatsApp Action */}
                  <div className="pt-4 border-t border-[#EAE4DC] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-[#6B6359] flex items-center gap-2 text-center sm:text-left">
                      <ShieldCheck className="w-4 h-4 text-[#C27848] shrink-0" />
                      <span>Your contact is confidential. We do not spam or share client records.</span>
                    </div>

                    <button
                      id="submit-enquiry-whatsapp-btn"
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#C27848] hover:bg-[#ab663a] text-white rounded-xl text-sm font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry & WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>
        )}

        {/* Assurance / Trust Footnote */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EAE4DC]">
            <div className="w-9 h-9 rounded-full bg-[#EAE4D9] text-[#8D4B20] flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-4 h-4 text-[#C27848]" />
            </div>
            <h4 className="text-sm font-bold text-[#313030] font-serif">Itemized Stage Billing</h4>
            <p className="text-xs text-[#6B6359] mt-1">
              Payments strictly aligned with verified physical milestones: Foundation, Slab, Masonry, Finishing.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EAE4DC]">
            <div className="w-9 h-9 rounded-full bg-[#EAE4D9] text-[#8D4B20] flex items-center justify-center mx-auto mb-3">
              <Clock className="w-4 h-4 text-[#C27848]" />
            </div>
            <h4 className="text-sm font-bold text-[#313030] font-serif">Fast 24-Hour Quotation</h4>
            <p className="text-xs text-[#6B6359] mt-1">
              Receive comprehensive architectural estimates and civil specifications within 24 hours of enquiry.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EAE4DC]">
            <div className="w-9 h-9 rounded-full bg-[#EAE4D9] text-[#8D4B20] flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-4 h-4 text-[#C27848]" />
            </div>
            <h4 className="text-sm font-bold text-[#313030] font-serif">Founder-Level Cavalry Desk</h4>
            <p className="text-xs text-[#6B6359] mt-1">
              Direct access to Sharath Kumar A N and Palaksha on WhatsApp for technical questions and site reviews.
            </p>
          </div>
        </div>

      </div>

      {/* Image Preview Modal */}
      {previewModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewModalImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewModalImage(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="max-h-[65vh] overflow-hidden bg-black">
              <img
                src={previewModalImage.url}
                alt={previewModalImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 bg-white">
              <h4 className="font-serif text-lg font-bold text-[#313030]">{previewModalImage.title}</h4>
              <p className="text-xs text-[#6B6359] mt-1">{previewModalImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
