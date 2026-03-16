import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, MapPin, Star, TrendingUp, ChevronDown, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT, COMPANY, SERVICES } from "@/constants/constants";


const statIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, MapPin, Star, Shield, Award
};

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", moveType: "", fromCity: "", toCity: "" });
  const update = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I need a quote.\nName: ${form.name}\nPhone: ${form.phone}\nMove: ${form.moveType}\nFrom: ${form.fromCity}\nTo: ${form.toCity}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-primary/5" />
      {/* 
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald/5 blur-3xl" />
      */}

      <div className="relative container-custom pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-primary mb-8">
                ✦ {HERO_CONTENT.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-foreground leading-[1.1] mb-6"
            >
              {HERO_CONTENT.title.split("Better").map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}<span className="text-gradient">Better</span></span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {HERO_CONTENT.stats.map((stat, i) => {
                const Icon = statIcons[stat.icon] || TrendingUp;
                return (
                  <div key={stat.label} className="text-center">
                    <Icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                    <div className="font-heading font-bold text-xl text-foreground">{stat.value}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleQuote}
              className="rounded-2xl p-8 shadow-elevated bg-background border border-border"
            >
              <div className="text-center mb-6">
                <h2 className="font-heading font-bold text-xl text-foreground">Get Instant Quote</h2>
                <p className="text-muted-foreground text-sm mt-1">Free estimate in under 30 minutes</p>
              </div>
              <div className="space-y-3">
                <input required type="text" placeholder="Your Name" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
                <input required type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                <select required value={form.moveType} onChange={(e) => update("moveType", e.target.value)} className={inputClass}>
                  <option value="">Select Move Type</option>
                  {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                </select>
                <div className="grid grid-cols-2 gap-3">
                  <input required type="text" placeholder="From City" value={form.fromCity} onChange={(e) => update("fromCity", e.target.value)} className={inputClass} />
                  <input required type="text" placeholder="To City" value={form.toCity} onChange={(e) => update("toCity", e.target.value)} className={inputClass} />
                </div>
                <Button type="submit" className="w-full bg-gradient-brand text-primary-foreground font-semibold py-6 rounded-xl text-base animate-pulse-soft">
                  Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4">
                ✓ No spam &nbsp; ✓ No hidden charges &nbsp; ✓ 100% free
              </p>
            </form>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-muted-foreground text-xs">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-float" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
