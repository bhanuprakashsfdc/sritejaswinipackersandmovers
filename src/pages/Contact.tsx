import React from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map"; // Import the Map component
import { COMPANY, SERVICES, SEO_DATA } from "@/constants/constants";


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const update = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `Hi, I need ${form.service}. Name: ${form.name}, Phone: ${form.phone}. ${form.message}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";

  return (
    <>
        <SEOHead title={SEO_DATA.contact.title} description={SEO_DATA.contact.description} keywords={SEO_DATA.contact.keywords} />
        <Navbar />
        <main>
          <section className="pt-28 pb-16 bg-secondary/30">
            <div className="container-custom">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Contact Us</span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  Let's Plan Your Perfect Move
                </h1>
                <p className="text-muted-foreground text-lg">Get a free quote, schedule a survey, or speak to our experts. We're available 24/7.</p>
              </motion.div>
            </div>
          </section>

          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  {submitted ? (
                    <div className="rounded-2xl bg-secondary/50 border border-border p-12 text-center">
                      <div className="text-5xl mb-4">✅</div>
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Request Received!</h2>
                      <p className="text-muted-foreground">Our team will reach out within 30 minutes.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="rounded-2xl bg-background border border-border shadow-elevated p-8 space-y-4">
                      <h2 className="text-xl font-heading font-bold text-foreground mb-2">Send Enquiry</h2>
                      <input required type="text" placeholder="Full Name" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
                      <input required type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                      <input type="email" placeholder="Email (optional)" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                      <select required value={form.service} onChange={(e) => update("service", e.target.value)} className={inputClass}>
                        <option value="">Select Service</option>
                        {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                      <textarea placeholder="Tell us about your move..." value={form.message} onChange={(e) => update("message", e.target.value)} rows={4} className={`${inputClass} resize-none`} />
                      <Button type="submit" size="lg" className="w-full bg-gradient-brand text-primary-foreground font-bold py-6 rounded-xl text-base">
                        Submit Enquiry
                      </Button>
                    </form>
                  )}
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                  <div className="rounded-2xl bg-background border border-border shadow-glass p-8 space-y-5">
                    <h2 className="text-xl font-heading font-bold text-foreground">Get in Touch</h2>
                    {[
                      { href: `tel:${COMPANY.phone}`, icon: Phone, label: "Call Us (24/7)", value: COMPANY.phone },
                      { href: `https://wa.me/${COMPANY.whatsapp}`, icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", external: true },
                      { href: `mailto:${COMPANY.email}`, icon: Mail, label: "Email", value: COMPANY.email },
                    ].map((item) => (
                      <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary border border-border transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><item.icon className="w-5 h-5 text-primary" /></div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-heading font-bold text-foreground text-sm">{item.value}</p>
                        </div>
                      </a>
                    ))}
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                      <div>
                        <p className="text-sm text-muted-foreground">Head Office</p>
                        <p className="font-heading font-bold text-foreground text-sm">{COMPANY.address}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Map /> {/* Render the Map component here */}
        <Footer />
        <FloatingCTA />
      </>
  );
};

export default Contact;
