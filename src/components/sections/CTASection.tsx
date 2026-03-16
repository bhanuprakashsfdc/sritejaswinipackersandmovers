import { Link } from "react-router-dom";
import React from 'react';
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Shield, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/constants/constants";

const CTASection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)]" />
      
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Animated background orbs */}
          <motion.div 
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            }}
            animate={prefersReducedMotion ? {} : {
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            }}
            animate={prefersReducedMotion ? {} : {
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM36%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zM6%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM6%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" 
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Ready to Start Your Move?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Get a transparent, no-obligation quote in under 30 minutes. Our relocation experts are standing by.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                { icon: Shield, text: "Free Virtual Survey" },
                { icon: Clock, text: "No Hidden Charges" }, 
                { icon: Heart, text: "Full Insurance" }
              ].map((item) => (
                <span 
                  key={item.text} 
                  className="flex items-center gap-2 text-sm text-white/80 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
                >
                  <item.icon className="w-4 h-4 text-emerald-400" /> 
                  {item.text}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact.html">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold text-base px-10 py-6 rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                >
                  Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href={`tel:${COMPANY.phone}`}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 font-bold text-base px-10 py-6 rounded-xl backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {COMPANY.phone}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
