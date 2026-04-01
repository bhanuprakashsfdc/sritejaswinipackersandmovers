import React from 'react';
import { motion, useReducedMotion } from "framer-motion";
import { ClipboardList, Package, Truck, CheckCircle, Phone, CheckCircle2, Home } from "lucide-react";
import { PROCESS_STEPS } from "@/constants/constants";


const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList, Package, Truck, CheckCircle, Phone, CheckCircle2, Home
};

const colorClasses = [
  { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
  { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
  { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
];

const ProcessTimeline = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden" id="process">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.06),transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Four Steps to a Stress-Free Move
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We've streamlined the entire relocation process into four clear stages — so you always know what's happening next.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            const colors = colorClasses[i % colorClasses.length];
            
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: prefersReducedMotion ? 0 : i * 0.12 }}
                className="relative p-7 rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 transition-all group"
              >
                {/* Step number */}
                <div className={`absolute -top-4 left-7 w-8 h-8 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center ${colors.text} font-heading font-bold text-sm shadow-lg`}>
                  {step.step}
                </div>
                {/* Connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-slate-200" />
                )}
                <div className="mt-4">
                  <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
