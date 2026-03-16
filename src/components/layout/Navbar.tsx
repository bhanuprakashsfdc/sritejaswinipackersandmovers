import React from 'react';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/constants/constants";
import { Button } from "@/components/ui/button";
import jblogo from "@/assets/jblogo.gif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/index.html" className="flex items-center">
            <img src={jblogo} alt="Sri tejaswini packers and movers" className="jblogo" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={`${link.href}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === `${link.href}`
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${COMPANY.phone}`}>
              <Button variant="ghost" size="sm" className="gap-2 rounded-xl font-medium text-white/80 hover:text-white hover:bg-white/10">
                <Phone className="w-3.5 h-3.5" /> Call
              </Button>
            </a>
            <Link to="/contact.html">
              <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-xl font-semibold gap-1 shadow-lg shadow-emerald-500/20">
                Get Quote <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
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
            className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container-custom py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={`${link.href}.html`}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === `${link.href}.html`
                      ? "text-emerald-400 bg-emerald-400/10"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href={`tel:${COMPANY.phone}`}>
                  <Button variant="outline" className="w-full rounded-xl gap-2 border-white/20 text-white hover:bg-white/10">
                    <Phone className="w-4 h-4" /> {COMPANY.phone}
                  </Button>
                </a>
                <Link to="/contact.html">
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
