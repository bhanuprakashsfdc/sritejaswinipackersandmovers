import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Shield, Clock, Users, Award, Fingerprint, Globe, CheckCircle } from "lucide-react";


const reasons = [
  { icon: Shield, title: "Zero Damage Commitment", desc: "Multi-layer protection system and trained handlers ensure 99.8% safe delivery across every shipment.", color: "text-emerald-400", bgColor: "bg-emerald-500/10" },
  { icon: Clock, title: "Guaranteed Timelines", desc: "We provide delivery windows upfront and hit them 98% of the time. Your schedule matters to us.", color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  { icon: Fingerprint, title: "Real-Time Tracking", desc: "GPS-enabled fleet with live checkpoint updates. Know exactly where your belongings are, anytime.", color: "text-violet-400", bgColor: "bg-violet-500/10" },
  { icon: Users, title: "Dedicated Coordinator", desc: "Every move gets a single point of contact — no runaround, no repeating yourself to different people.", color: "text-amber-400", bgColor: "bg-amber-500/10" },
  { icon: Award, title: "Transparent Pricing", desc: "Detailed, itemized quotes with no hidden fees. The price we quote is the price you pay — always.", color: "text-blue-400", bgColor: "bg-blue-500/10" },
  { icon: Globe, title: "200+ City Network", desc: "Own fleet and local teams in every major metro and tier-2 city. No subcontracting, no middlemen.", color: "text-rose-400", bgColor: "bg-rose-500/10" },
];

const WhyChooseUs = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [80, -40]);

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden" id="why-us">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM36%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zM6%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM6%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      
      <motion.div 
        ref={ref}
        style={{ y }}
        className="relative z-10 container-custom"
      >
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
            The Sri Tejaswini packers and movers Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Built on Trust, Powered by Technology
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We've rethought how relocations should work — and built systems that prioritize your peace of mind at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: prefersReducedMotion ? 0 : i * 0.08, duration: prefersReducedMotion ? 0 : 0.4 }}
              className="p-7 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${r.bgColor} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <r.icon className={`w-7 h-7 ${r.color}`} />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">{r.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
