import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { LOCATIONS, SEO_DATA, COMPANY } from "@/constants/constants";
import CTASection from "@/components/sections/CTASection";
import Navbar from "@/components/layout/Navbar";
import Map from "@/components/Map";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

const Locations = () => {
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
        <section className="pt-28 pb-16 bg-secondary/30">
          <div className="container-custom">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Link to="/index.html" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-primary">Locations</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Our Presence
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Find Our Services Near You
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are India's leading packers and movers, with a vast network
                always close to you. Find our services in your city.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom space-y-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/${location.slug}.html`}
                    className="group block bg-card rounded-2xl border border-border hover:border-accent overflow-hidden transition-all duration-300 hover:shadow-elevated"
                  >
                    {/* Header */}
                    <div className="bg-gradient-primary p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent">
                          <MapPin className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-bold text-black">
                            {location.city}
                          </h3>
                          <p className="text-black/70">{location.state}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-muted-foreground text-sm mb-4">
                        Popular Areas:
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {location.areas.slice(0, 4).map((area, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                          >
                            {area}
                          </span>
                        ))}
                        {location.areas.length > 4 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">
                            +{location.areas.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-primary font-semibold">
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
        <section className="py-16 bg-gradient-surface">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Don't See Your City?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We serve {COMPANY.cities} cities across India. If your city isn't
              listed, contact us—we likely cover your area too!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" asChild>
                <Link to="/contact.html">Request Service in Your City</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href={`tel:${COMPANY.phone}`}>
                  <Phone className="w-5 h-5" />
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