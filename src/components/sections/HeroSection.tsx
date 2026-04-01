import React from 'react';
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, Shield, MapPin, Star, TrendingUp, ChevronDown, Award, Truck, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT, COMPANY, SERVICES } from "@/constants/constants";


const statIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, MapPin, Star, Shield, Award
};

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", moveType: "", fromCity: "", toCity: "" });
  const ref = useRef<HTMLDivElement>(null);
  
  // Check for reduced motion preference
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms - disable if reduced motion is preferred
  const yHero = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 200]);
  const yBg = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], prefersReducedMotion ? [1, 1] : [1, 0]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1.2, 1]);
  
  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const update = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I need a quote.\nName: ${form.name}\nPhone: ${form.phone}\nMove: ${form.moveType}\nFrom: ${form.fromCity}\nTo: ${form.toCity}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all text-sm";

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background Layers */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: yBg,
          scale: scaleBg
        }}
      >
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(210 80% 45% / 0.4) 0%, transparent 70%)',
          }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, hsl(160 65% 45% / 0.4) 0%, transparent 70%)',
          }}
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM36%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zM6%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM6%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zM6%2038v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM6%204v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" 
        />
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/60" />
      </motion.div>

      {/* Floating elements - only show if reduced motion is not preferred */}
      {!prefersReducedMotion && (
        <>
          <motion.div 
            className="absolute top-32 left-[10%] w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Truck className="w-8 h-8 text-white/40" />
          </motion.div>
          <motion.div 
            className="absolute top-48 right-[15%] w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Shield className="w-7 h-7 text-white/40" />
          </motion.div>
          <motion.div 
            className="absolute bottom-32 left-[20%] w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Clock className="w-6 h-6 text-white/40" />
          </motion.div>
          <motion.div 
            className="absolute bottom-48 right-[10%] w-18 h-18 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <CheckCircle className="w-8 h-8 text-white/40" />
          </motion.div>
        </>
      )}

      <motion.div 
        className="relative z-10 container-custom pt-28 pb-20"
        style={{ y: yHero, opacity: opacityHero }}
      >
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center"
        >
          {/* Left - Content */}
          <div>
            <motion.div variants={fadeUpVariants}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium text-white mb-8 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ✦ {HERO_CONTENT.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-white leading-[1.1] mb-6"
            >
              {HERO_CONTENT.title.split("Better").map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Better</span></span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg"
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            {/* Trust badges */}
            <motion.div 
              variants={fadeUpVariants}
              className="flex flex-wrap gap-3 mb-10"
            >
              {["Verified Movers", "Insured", "On-Time Delivery"].map((badge) => (
                <span 
                  key={badge}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {HERO_CONTENT.stats.map((stat, i) => {
                const Icon = statIcons[stat.icon] || TrendingUp;
                return (
                  <motion.div 
                    key={stat.label}
                    variants={fadeUpVariants}
                    className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <Icon className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                    <div className="font-heading font-bold text-xl text-white">{stat.value}</div>
                    <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right - Quote Form */}
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, x: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
          >
            <form
              onSubmit={handleQuote}
              className="rounded-3xl p-8 shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20"
            >
              <div className="text-center mb-6">
                <h2 className="font-heading font-bold text-xl text-white mb-1">Get Instant Quote</h2>
                <p className="text-white/60 text-sm">Free estimate in under 30 minutes</p>
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
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-6 rounded-xl text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
                >
                  Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <p className="text-center text-xs text-white/40 mt-4">
                ✓ No spam &nbsp; ✓ No hidden charges &nbsp; ✓ 100% free
              </p>
            </form>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs">Scroll to explore</span>
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
