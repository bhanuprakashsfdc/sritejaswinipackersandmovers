import { Link } from "react-router-dom";
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/constants/constants";
const CTASection = () => (
  <section className="section-padding bg-background">
    <div className="container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl bg-gradient-brand p-10 md:p-16 text-center overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Start Your Move?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Get a transparent, no-obligation quote in under 30 minutes. Our relocation experts are standing by.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Free Virtual Survey", "No Hidden Charges", "Full Insurance"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <CheckCircle className="w-4 h-4" /> {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact.html">
              <Button size="lg" className="bg-primary-foreground text-navy font-bold text-base px-10 py-6 rounded-xl hover:bg-primary-foreground/90">
                Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${COMPANY.phone}`}>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-base px-10 py-6 rounded-xl" style={{ color: 'black' }}>
                📞 {COMPANY.phone}
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
