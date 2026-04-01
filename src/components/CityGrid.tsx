import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { LOCATIONS } from "@/constants/constants";



const CityGrid = () => (
  <section className="section-padding bg-background" id="locations">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Network
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Moving Services Across India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Local teams in every major city ensure your move is handled by people who know the area — and the logistics.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to={`/${loc.slug}.html`}
                className="group block p-5 rounded-2xl bg-background border border-border hover:shadow-glass hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h3 className="font-heading font-bold text-foreground">{loc.city}</h3>
                </div>
                <p className="text-muted-foreground text-xs mb-3">{loc.state}</p>
                <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                  View Services <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/locations.html" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm">
            View All 200+ Service Cities <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
);

export default CityGrid;