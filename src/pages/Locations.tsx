import { HelmetProvider } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { LOCATIONS, SEO_DATA, COMPANY } from "@/constants/constants";
import CTASection from "@/components/sections/CTASection";
import Navbar from "@/components/layout/Navbar";
import Map from "@/components/Map";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

const Locations = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <HelmetProvider>
      <SEO
        title={SEO_DATA.locations.title}
        description={SEO_DATA.locations.description}
        keywords={SEO_DATA.locations.keywords}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-slate-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM36%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zM6%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM6%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
          
          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 mb-4">
              <Link to="/index.html" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-emerald-400">Locations</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
                Our Presence
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Find Our Services Near You
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                We are India's leading packers and movers, with a vast network
                always close to you. Find our services in your city.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom space-y-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.05 }}
                >
                  <Link
                    to={`/${location.slug}.html`}
                    className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-bold text-white">
                            {location.city}
                          </h3>
                          <p className="text-white/70">{location.state}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-slate-500 text-sm mb-4">
                        Popular Areas:
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {location.areas.slice(0, 4).map((area, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-600"
                          >
                            {area}
                          </span>
                        ))}
                        {location.areas.length > 4 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-600">
                            +{location.areas.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                        View Services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Cities Banner */}
        <section className="py-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)]" />
          
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't See Your City?
            </h2>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              We serve {COMPANY.cities} cities across India. If your city isn't
              listed, contact us—we likely cover your area too!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
              >
                <Link to="/contact.html">Request Service in Your City</Link>
              </Button>
              <Button 
                variant="outline" 
                asChild 
                className="border-white/20 text-white hover:bg-white/10"
              >
                <a href={`tel:${COMPANY.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Inquire
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Map />
      <Footer />
      <FloatingCTA />
    </HelmetProvider>
  );
};

export default Locations;
