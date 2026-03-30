import React from 'react';
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map";
import { COMPANY, SERVICES, SEO_DATA } from "@/constants/constants";


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const prefersReducedMotion = useReducedMotion();
  
  const update = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `Hi, I need ${form.service}. Name: ${form.name}, Phone: ${form.phone}. ${form.message}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-white/20 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-sm";

  return (
    <>
      <SEOHead title={SEO_DATA.contact.title} description={SEO_DATA.contact.description} keywords={SEO_DATA.contact.keywords} canonical="https://www.sritejaswinipackersandmovers.com/contact.html" />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-slate-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.08),transparent_50%)]" />
          
          <div className="container-custom relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="max-w-3xl"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Let's Plan Your Perfect Move
              </h1>
              <p className="text-white/70 text-lg">Get a free quote, schedule a survey, or speak to our experts. We're available 24/7.</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
              >
                {submitted ? (
                  <div className="rounded-2xl bg-white border border-slate-200 p-12 text-center">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-slate-900 mb-3">Request Received!</h2>
                    <p className="text-slate-600">Our team will reach out within 30 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-slate-200 shadow-xl p-8 space-y-4">
                    <h2 className="text-xl font-heading font-bold text-slate-900 mb-2">Send Enquiry</h2>
                    <input required type="text" placeholder="Full Name" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
                    <input required type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                    <input type="email" placeholder="Email (optional)" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                    <select required value={form.service} onChange={(e) => update("service", e.target.value)} className={inputClass}>
                      <option value="">Select Service</option>
                      {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                    <textarea placeholder="Tell us about your move..." value={form.message} onChange={(e) => update("message", e.target.value)} rows={4} className={`${inputClass} resize-none`} />
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold py-6 rounded-xl text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02]"
                    >
                      Submit Enquiry
                    </Button>
                  </form>
                )}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="space-y-6"
              >
                <div className="rounded-2xl bg-slate-900 border border-white/10 p-8 space-y-5">
                  <h2 className="text-xl font-heading font-bold text-white">Get in Touch</h2>
                  {[
                    { href: `tel:${COMPANY.phone}`, icon: Phone, label: "Call Us (24/7)", value: COMPANY.phone, color: "bg-emerald-500/10 text-emerald-400" },
                    { href: `https://wa.me/${COMPANY.whatsapp}`, icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", external: true, color: "bg-green-500/10 text-green-400" },
                    { href: `mailto:${COMPANY.email}`, icon: Mail, label: "Email", value: COMPANY.email, color: "bg-cyan-500/10 text-cyan-400" },
                  ].map((item) => (
                    <a 
                      key={item.label} 
                      href={item.href} 
                      target={item.external ? "_blank" : undefined} 
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/50">{item.label}</p>
                        <p className="font-heading font-bold text-white text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Head Office</p>
                      <p className="font-heading font-bold text-white text-sm">{COMPANY.address}</p>
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Clock, label: "24/7", desc: "Support Available" },
                    { icon: Shield, label: "100%", desc: "Insured Moves" }
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-2xl bg-white border border-slate-200 text-center">
                      <item.icon className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                      <p className="font-bold text-slate-900">{item.label}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Map />
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Contact;
