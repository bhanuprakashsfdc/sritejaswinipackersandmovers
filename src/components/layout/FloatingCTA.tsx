import React from 'react';
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/constants/constants";

const FloatingCTA = () => (
  <>
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hi, I'd like a moving quote.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366] text-primary-foreground font-semibold text-sm shadow-elevated hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>

    <a
      href={`tel:${COMPANY.phone}`}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-brand text-primary-foreground font-semibold text-sm shadow-elevated hover:scale-105 transition-transform"
      aria-label="Call us"
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline">Call Now</span>
    </a>
  </>
);

export default FloatingCTA;
