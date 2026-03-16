import React from 'react';
import { motion, useReducedMotion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map";
import { COMPANY } from "@/constants/constants";
import { FileText, DollarSign, Link2, AlertTriangle, Shield, Mail, Phone } from "lucide-react";

const Disclaimer = () => {
  const prefersReducedMotion = useReducedMotion();

  const disclaimerSections = [
    {
      icon: FileText,
      title: "Website Content",
      content: "The information provided on this website is for general informational purposes only. While we strive to keep the content accurate and up-to-date, Sri tejaswini packers and movers makes no representations or warranties of any kind about the completeness, accuracy, or reliability of the information."
    },
    {
      icon: DollarSign,
      title: "Price Estimates",
      content: "All cost estimates provided through our website calculators or quick quote forms are approximate and for reference only. Actual pricing is determined after a detailed survey of your belongings and will be provided in a formal quotation."
    },
    {
      icon: Link2,
      title: "Third-Party Links",
      content: "Our website may contain links to external websites. Sri tejaswini packers and movers is not responsible for the content, privacy practices, or availability of third-party sites."
    },
    {
      icon: AlertTriangle,
      title: "Service Availability",
      content: "Service availability may vary by location and season. Listed cities represent our primary network; additional locations may be serviceable on request."
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, Sri tejaswini packers and movers shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services."
    }
  ];

  return (
    <>
      <SEOHead title={`Disclaimer — ${COMPANY.name}`} description={`Disclaimer for ${COMPANY.name} website and services.`} />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          
          <div className="container-custom relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="max-w-3xl"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
                Disclaimer
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                Disclaimer
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
              {disclaimerSections.map((section, i) => (
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
                  If you have questions about this disclaimer, reach out to us.
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
      <FloatingCTA />
    </>
  );
};

export default Disclaimer;
