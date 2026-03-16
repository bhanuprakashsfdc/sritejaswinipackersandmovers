import React from 'react';
import { motion } from "framer-motion";
import { ClipboardList, Package, Truck, CheckCircle, Phone, CheckCircle2, Home } from "lucide-react";
import { PROCESS_STEPS } from "@/constants/constants";


const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList, Package, Truck, CheckCircle, Phone, CheckCircle2, Home
};

const ProcessTimeline = () => (
  <section className="section-padding bg-background" id="process">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Four Steps to a Stress-Free Move
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've streamlined the entire relocation process into four clear stages — so you always know what's happening next.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative p-7 rounded-2xl bg-background border border-border hover:shadow-glass transition-all group"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-7 w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground font-heading font-bold text-sm shadow-lg">
                  {step.step}
                </div>
                {/* Connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 w-6 h-px bg-border" />
                )}
                <div className="mt-4">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
);

export default ProcessTimeline;
