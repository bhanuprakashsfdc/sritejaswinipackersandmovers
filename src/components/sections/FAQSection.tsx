import { motion } from "framer-motion";
import React from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/constants/constants";


const FAQSection = () => (
  <section className="section-padding bg-secondary/30" id="faq">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Common Questions, Clear Answers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Everything you need to know about our relocation services — from pricing and insurance to packing and timelines.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-2xl font-heading font-bold text-primary">24/7</div>
                <div className="text-muted-foreground text-xs mt-1">Support</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-primary">30 Min</div>
                <div className="text-muted-foreground text-xs mt-1">Response</div>
              </div>
            </div>
          </motion.div>

          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-2xl px-6 bg-background">
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-5 text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
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

export default FAQSection;