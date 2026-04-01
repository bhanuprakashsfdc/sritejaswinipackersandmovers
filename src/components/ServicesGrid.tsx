import React from 'react';
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Home, Building2, Car, Truck, Package, Warehouse, ArrowRight, Bike, MapPin, Factory } from "lucide-react";
import { SERVICES } from "@/constants/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Building2, Car, Truck, Package, Warehouse, Bike, MapPin, Factory
};

const colorClasses = [
  "from-emerald-500/20 to-cyan-500/10 group-hover:from-emerald-500/30 group-hover:to-cyan-500/20",
  "from-blue-500/20 to-indigo-500/10 group-hover:from-blue-500/30 group-hover:to-indigo-500/20",
  "from-orange-500/20 to-amber-500/10 group-hover:from-orange-500/30 group-hover:to-amber-500/20",
  "from-violet-500/20 to-purple-500/10 group-hover:from-violet-500/30 group-hover:to-purple-500/20",
  "from-rose-500/20 to-pink-500/10 group-hover:from-rose-500/30 group-hover:to-pink-500/20",
  "from-teal-500/20 to-emerald-500/10 group-hover:from-teal-500/30 group-hover:to-emerald-500/20",
];

const iconColors = [
  "text-emerald-400 group-hover:text-emerald-300",
  "text-blue-400 group-hover:text-blue-300",
  "text-orange-400 group-hover:text-orange-300",
  "text-violet-400 group-hover:text-violet-300",
  "text-rose-400 group-hover:text-rose-300",
  "text-teal-400 group-hover:text-teal-300",
];


const ServicesGrid = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [50, -30]);

  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.06),transparent_50%)]" />
      
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
          <span className="inline-block px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Smart Solutions for Every Move
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you're moving a studio apartment or an entire corporate office, we have a purpose-built service for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Package;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: prefersReducedMotion ? 0 : i * 0.06, duration: prefersReducedMotion ? 0 : 0.4 }}
              >
                <Link
                  to={`/services/${service.slug}.html`}
                  className="group block p-7 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200/50 transition-all duration-300 h-full relative overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClasses[i % colorClasses.length]} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <Icon className={`w-7 h-7 ${iconColors[i % iconColors.length]} transition-colors duration-300`} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-1.5 text-emerald-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesGrid;
