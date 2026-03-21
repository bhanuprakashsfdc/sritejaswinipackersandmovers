import React from 'react';
import { motion, useReducedMotion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map";
import { COMPANY } from "@/constants/constants";
import { FileText, CreditCard, Shield, XCircle, Scale, Mail, Phone } from "lucide-react";

const Terms = () => {
  const prefersReducedMotion = useReducedMotion();

  const termsSections = [
    {
      icon: FileText,
      title: "Service Agreement",
      content: "Upon accepting a quotation and confirming a booking, a service agreement is formed between you and Sri Tejaswini packers and movers. The scope of work, pricing, and timelines will be as described in your confirmed quotation."
    },
    {
      icon: CreditCard,
      title: "Pricing & Payment",
      content: "All prices quoted are inclusive of the services described. Additional services requested after booking may incur extra charges, which will be communicated and agreed upon before execution. Payment terms are as specified in your quotation."
    },
    {
      icon: Shield,
      title: "Insurance & Liability",
      content: "Basic transit insurance is included with all shipments. Comprehensive coverage is available at additional cost. Claims for damage must be filed within 48 hours of delivery with supporting documentation."
    },
    {
      icon: XCircle,
      title: "Cancellation Policy",
      content: "Cancellations made 48+ hours before the scheduled move incur no charges. Cancellations within 48 hours may be subject to a cancellation fee as outlined in your quotation."
    },
    {
      icon: XCircle,
      title: "Prohibited Items",
      content: "We do not transport hazardous materials, flammable substances, perishable food, live animals, or illegal goods. Any undisclosed prohibited items found during packing may result in service refusal."
    },
    {
      icon: Scale,
      title: "Governing Law",
      content: "These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Hyderabad, Telangana."
    }
  ];

  return (
    <>
      <SEOHead title={`Terms & Conditions — ${COMPANY.name}`} description={`Terms and conditions for using ${COMPANY.name} services and website.`} />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          
          <div className="container-custom relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="max-w-3xl"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
                Terms & Conditions
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                Terms & Conditions
              </h1>
              <p className="text-white/70 text-lg">
                Last updated: February 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-slate-600 text-lg">
                By using the services of {COMPANY.name}, you agree to the following terms and conditions. Please read them carefully.
              </p>

              {termsSections.map((section, i) => (
                <div 
                  key={section.title}
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                      <section.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h2 className="text-xl font-heading font-bold text-slate-900">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 m-0">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Contact Section */}
              <div className="bg-slate-900 rounded-2xl p-8 text-white mt-8">
                <h2 className="text-xl font-heading font-bold mb-4">Questions?</h2>
                <p className="text-white/70 mb-6">
                  For questions regarding these terms, reach out to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`mailto:${COMPANY.email}`} 
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
                  >
                    <Mail className="w-4 h-4" /> {COMPANY.email}
                  </a>
                  <a 
                    href={`tel:${COMPANY.phone}`} 
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
                  >
                    <Phone className="w-4 h-4" /> {COMPANY.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Map />
      <Footer />
    </>
  );
};

export default Terms;
