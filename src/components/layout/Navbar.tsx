import React from 'react';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/constants/constants";
import { Button } from "@/components/ui/button";
import jblogo from "@/assets/jblogo.gif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-glass border-b border-border"
            : "bg-transparent"
        }`}
      >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/index.html" className="flex items-center">
            <img src={jblogo} alt="Sri tejaswini packers and movers" className="jblogo" />
                  {/**  
             <div className="flex flex-col">
              <span className="font-heading font-bold text-base leading-tight text-foreground">                
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase"></span>
            </div>
          */} 
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={`${link.href}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === `${link.href}`
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${COMPANY.phone}`}>
              <Button variant="outline" size="sm" className="gap-2 rounded-xl font-medium">
                <Phone className="w-3.5 h-3.5" /> Call
              </Button>
            </a>
            <Link to="/contact.html">
              <Button size="sm" className="bg-gradient-brand text-primary-foreground rounded-xl font-semibold gap-1">
                Get Quote <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-custom py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={`${link.href}.html`}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === `${link.href}.html`
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href={`tel:${COMPANY.phone}`}>
                  <Button variant="outline" className="w-full rounded-xl gap-2">
                    <Phone className="w-4 h-4" /> {COMPANY.phone}
                  </Button>
                </a>
                <Link to="/contact.html">
                  <Button className="w-full bg-gradient-brand text-primary-foreground rounded-xl font-semibold">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
