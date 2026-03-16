import React from 'react';
import { motion } from "framer-motion";
import { Shield, Clock, Users, Award, Fingerprint, Globe } from "lucide-react";


const reasons = [
  { icon: Shield, title: "Zero Damage Commitment", desc: "Multi-layer protection system and trained handlers ensure 99.8% safe delivery across every shipment.", color: "text-primary" },
  { icon: Clock, title: "Guaranteed Timelines", desc: "We provide delivery windows upfront and hit them 98% of the time. Your schedule matters to us.", color: "text-emerald" },
  { icon: Fingerprint, title: "Real-Time Tracking", desc: "GPS-enabled fleet with live checkpoint updates. Know exactly where your belongings are, anytime.", color: "text-coral" },
  { icon: Users, title: "Dedicated Coordinator", desc: "Every move gets a single point of contact — no runaround, no repeating yourself to different people.", color: "text-gold" },
  { icon: Award, title: "Transparent Pricing", desc: "Detailed, itemized quotes with no hidden fees. The price we quote is the price you pay — always.", color: "text-primary" },
  { icon: Globe, title: "200+ City Network", desc: "Own fleet and local teams in every major metro and tier-2 city. No subcontracting, no middlemen.", color: "text-emerald" },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-secondary/30" id="why-us">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            The Sri tejaswini packers and movers Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Built on Trust, Powered by Technology
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've rethought how relocations should work — and built systems that prioritize your peace of mind at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-7 rounded-2xl bg-background border border-border hover:shadow-glass transition-all duration-300"
            >
              <r.icon className={`w-8 h-8 ${r.color} mb-5`} />
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
);

export default WhyChooseUs;
