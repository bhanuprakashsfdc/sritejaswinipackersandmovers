import React from 'react';
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { NAV_LINKS, COMPANY, SERVICES } from "@/constants/constants";
import { LOCATIONS } from "@/constants/constants";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-slate-900 text-white relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_50%)]" />
    
    <div className="relative z-10 container-custom section-padding">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="font-heading font-bold text-xl text-white">Sri Tejaswini packers and movers</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
            India's technology-driven relocation company. 15+ years of tracked, insured, and transparent moving services across 200+ cities.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-3 mb-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 flex items-center justify-center transition-all group"
              >
                <Icon className="w-4 h-4 text-white/60 group-hover:text-emerald-400 transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="space-y-3 text-sm">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-white/60 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-white/5">
              <Phone className="w-4 h-4" /> {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-white/60 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-white/5">
              <Mail className="w-4 h-4" /> {COMPANY.email}
            </a>
            <p className="flex items-start gap-3 text-white/60 p-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {COMPANY.address}
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-white mb-5">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={`${link.href}`} className="text-sm text-white/60 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                  {link.label}
                </Link>
              </li>
            ))}
            <li><Link to="/privacy-policy.html" className="text-sm text-white/60 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms.html" className="text-sm text-white/60 hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer.html" className="text-sm text-white/60 hover:text-emerald-400 transition-colors">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-white mb-5">Services</h4>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}.html`} className="text-sm text-white/60 hover:text-emerald-400 transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Cities */}
        <div>
          <h4 className="font-heading font-bold text-white mb-5">Top Cities</h4>
          <ul className="space-y-2">
            {LOCATIONS.slice(0, 8).map((loc) => (
              <li key={loc.slug}>
                <Link to={`/${loc.slug}.html`} className="text-sm text-white/60 hover:text-emerald-400 transition-colors">
                  Movers in {loc.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved and Created by{" "}
          <a href="https://anuhyadigital.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
            Anuhya Digital
          </a>
        </p>
        <div className="flex gap-6">
          <Link to="/privacy-policy.html" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
          <Link to="/terms.html" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
          <Link to="/disclaimer.html" className="hover:text-emerald-400 transition-colors">Disclaimer</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
