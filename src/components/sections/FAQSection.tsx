import { motion, useReducedMotion } from "framer-motion";
import React from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/constants/constants";
import { Clock, MessageCircle } from "lucide-react";


const FAQSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden" id="faq">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM36%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zM6%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM6%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Common Questions, Clear Answers
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Everything you need to know about our relocation services — from pricing and insurance to packing and timelines.
            </p>
            <div className="flex gap-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-emerald-400" />
                  <div>
                    <div className="text-xl font-heading font-bold text-white">24/7</div>
                    <div className="text-white/50 text-xs">Support</div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="text-xl font-heading font-bold text-white">30 Min</div>
                    <div className="text-white/50 text-xs">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`faq-${i}`} 
                  className="border border-white/10 rounded-2xl px-6 bg-white/5 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-white hover:text-emerald-400 py-5 text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
