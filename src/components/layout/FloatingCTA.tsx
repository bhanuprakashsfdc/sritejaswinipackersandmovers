import React from 'react';
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/constants/constants";

const FloatingCTA = () => (
  <>
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hi, I'd like a moving quote.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>

    <a
      href={`tel:${COMPANY.phone}`}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all"
      aria-label="Call us"
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline">Call Now</span>
    </a>
  </>
);

export default FloatingCTA;
