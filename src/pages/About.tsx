import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, TruckIcon, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map"; // Import the Map component
import { COMPANY, SEO_DATA, INDUSTRIES } from "@/constants/constants";

const stats = [
  { icon: TruckIcon, value: "600+", label: "Fleet Vehicles" },
  { icon: Users, value: "3,000+", label: "Team Members" },
  { icon: Shield, value: "75,000+", label: "Moves Completed" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
];

const About = () => (
  <>
    <SEOHead title={SEO_DATA.about.title} description={SEO_DATA.about.description} keywords={SEO_DATA.about.keywords} />
    <Navbar />
    <main>
      <section className="pt-28 pb-16 bg-secondary/30">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              We're Redefining How India Moves
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{COMPANY.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-heading font-bold text-foreground">{s.value}</div>
                <div className="text-muted-foreground text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded in 2010 in Hyderabad, Sri tejaswini packers and movers began with a simple conviction: relocations shouldn't be stressful. We started with a small fleet and a commitment to treat every customer's belongings as if they were our own.</p>
              <p>Fifteen years later, that conviction has scaled into a nationwide operation spanning 200+ cities, 600+ vehicles, and 3,000+ trained professionals. We've completed over 75,000 relocations — each one reinforcing our belief that technology, transparency, and care can transform this industry.</p>
              <p>Our ISO 9001:2015 certification and IBA approval aren't just badges — they're reflections of the systems we've built to ensure quality and accountability at every touchpoint.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="px-4 py-3 rounded-xl bg-secondary border border-border text-center text-sm font-medium text-foreground">{ind.name}</div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-14 text-center">
            <Link to="/contact.html">
              <Button size="lg" className="bg-gradient-brand text-primary-foreground font-bold px-10 py-6 rounded-xl text-lg">
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

export default About;