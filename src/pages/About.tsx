import React from 'react';
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, TruckIcon, Award, CheckCircle, Globe, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map";
import { COMPANY, SEO_DATA, INDUSTRIES } from "@/constants/constants";

const stats = [
  { icon: TruckIcon, value: "600+", label: "Fleet Vehicles", color: "text-emerald-400", bgColor: "bg-emerald-500/10" },
  { icon: Users, value: "3,000+", label: "Team Members", color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  { icon: Shield, value: "75,000+", label: "Moves Completed", color: "text-violet-400", bgColor: "bg-violet-500/10" },
  { icon: Award, value: "15+", label: "Years of Excellence", color: "text-amber-400", bgColor: "bg-amber-500/10" },
];

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
    <SEOHead title={SEO_DATA.about.title} description={SEO_DATA.about.description} keywords={SEO_DATA.about.keywords} />
    <Navbar />
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM36%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zM6%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM6%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-3xl"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              We're Redefining How India Moves
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">{COMPANY.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-14 bg-slate-800/50 border-b border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((s, i) => (
              <motion.div 
                key={s.label} 
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: prefersReducedMotion ? 0 : i * 0.1 }}
                className="text-center p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className={`w-14 h-14 ${s.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  <s.icon className={`w-7 h-7 ${s.color}`} />
                </div>
                <div className="text-3xl font-heading font-bold text-white">{s.value}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>Founded in 2010 in Hyderabad, Sri Tejaswini packers and movers began with a simple conviction: relocations shouldn't be stressful. We started with a small fleet and a commitment to treat every customer's belongings as if they were our own.</p>
              <p>Fifteen years later, that conviction has scaled into a nationwide operation spanning 200+ cities, 600+ vehicles, and 3,000+ trained professionals. We've completed over 75,000 relocations — each one reinforcing our belief that technology, transparency, and care can transform this industry.</p>
              <p>Our ISO 9001:2015 certification and IBA approval aren't just badges — they're reflections of the systems we've built to ensure quality and accountability at every touchpoint.</p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="mt-14 grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Target, title: "Our Mission", desc: "To make every relocation stress-free through technology and transparency" },
              { icon: Globe, title: "Our Vision", desc: "To be India's most trusted relocation partner in every city we serve" },
              { icon: Award, title: "Our Values", desc: "Customer first, transparency always, excellence in everything" }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                <item.icon className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="font-heading font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="mt-14"
          >
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="px-4 py-3 rounded-xl bg-slate-100 border border-slate-200 text-center text-sm font-medium text-slate-700">
                  {ind.name}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="mt-14 text-center"
          >
            <Link to="/contact.html">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold px-10 py-6 rounded-xl text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-105">
                Plan Your Move <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
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

export default About;
