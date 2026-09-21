import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage = 'Hello Gowdru Realcom / Avani Nivas team, I would like to enquire about a construction or interior project.'
}) => {
  // Configurable via env var, fallback to verified official company number
  const metaEnv = (import.meta as unknown as { env?: Record<string, string> }).env;
  const rawNumber =
    (metaEnv && (metaEnv.VITE_WHATSAPP_NUMBER || metaEnv.NEXT_PUBLIC_WHATSAPP_NUMBER)) ||
    COMPANY_INFO.contacts.whatsappNumber;

  const sanitizedNumber = rawNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(customMessage);
  const whatsappUrl = `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;

  return (
    <aside
      aria-label="Instant WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center group print:hidden"
    >
      <div
        id="whatsapp-chat-bubble"
        className="hidden md:flex items-center mr-3 px-3.5 py-1.5 bg-[#1F2937] text-white text-xs font-medium rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform translate-x-2 group-hover:translate-x-0"
      >
        <span>Chat on WhatsApp</span>
        <span className="ml-1.5 text-emerald-400">● Online</span>
      </div>

      <a
        id="whatsapp-floating-cta"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Gowdru Realcom Avani Nivas on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />
      </a>
    </aside>
  );
};
