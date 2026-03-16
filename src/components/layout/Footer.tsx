import React from 'react';
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, COMPANY, SERVICES } from "@/constants/constants";
import { LOCATIONS } from "@/constants/constants";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container-custom section-padding">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div>
              <span className="font-heading font-bold text-primary-foreground">Sri tejaswini packers and movers</span>
            </div>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6 max-w-sm">
            India's technology-driven relocation company. 15+ years of tracked, insured, and transparent moving services across 200+ cities.
          </p>
          <div className="space-y-3 text-sm">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" /> {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" /> {COMPANY.email}
            </a>
            <p className="flex items-start gap-2 text-primary-foreground/60">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {COMPANY.address}
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={`${link.href}`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{link.label}</Link>
              </li>
            ))}
            <li><Link to="/privacy-policy.html" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms.html" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer.html" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-5">Services</h4>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}.html`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Cities */}
        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-5">Top Cities</h4>
          <ul className="space-y-3">
            {LOCATIONS.slice(0, 8).map((loc) => (
              <li key={loc.slug}>
                <Link to={`/${loc.slug}.html`} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Movers in {loc.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
        <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved and           Created by{" "}
          <a href="https://anuhyadigital.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
            Anuhya Digital
          </a>
        </p>
        <div className="flex gap-6">
          <Link to="/privacy-policy.html" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms.html" className="hover:text-primary-foreground transition-colors">Terms & Conditions</Link>
          <Link to="/disclaimer.html" className="hover:text-primary-foreground transition-colors">Disclaimer</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;