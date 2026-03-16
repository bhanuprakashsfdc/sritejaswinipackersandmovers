import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Building2, Car, Truck, Package, Warehouse, ArrowRight, Bike, MapPin, Factory } from "lucide-react";
import { SERVICES } from "@/constants/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Building2, Car, Truck, Package, Warehouse, Bike, MapPin, Factory
};

const colorClasses = [
  "from-primary/10 to-primary/5 group-hover:from-primary/20",
  "from-emerald/10 to-emerald/5 group-hover:from-emerald/20",
  "from-coral/10 to-coral/5 group-hover:from-coral/20",
  "from-gold/10 to-gold/5 group-hover:from-gold/20",
  "from-primary/10 to-teal/5 group-hover:from-primary/20",
  "from-emerald/10 to-primary/5 group-hover:from-emerald/20",
];



const ServicesGrid = () => (
  <section className="section-padding bg-background" id="services">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Smart Solutions for Every Move
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're moving a studio apartment or an entire corporate office, we have a purpose-built service for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Package;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/services#${service.id}`}
                  className="group block p-7 rounded-2xl bg-background border border-border hover:shadow-elevated transition-all duration-300 h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClasses[i % colorClasses.length]} flex items-center justify-center mb-6 transition-colors duration-300`}>
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
);

export default ServicesGrid;
