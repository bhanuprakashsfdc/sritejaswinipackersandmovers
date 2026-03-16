import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone, Home, Building2, Car, Truck, Package, Warehouse, Bike, MapPin, Factory, TrendingUp, Award, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SERVICES, COMPANY, LOCATIONS } from "@/constants/constants";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Building2, Car, Truck, Package, Warehouse, Bike, MapPin, Factory, TrendingUp, Award, Star
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const Icon = iconMap[service.icon] || Home;

  if (!service) {
    return (
      <HelmetProvider>
        <SEO
          title="Service Not Found - Sri tejaswini packers and movers"
          description="The service you are looking for could not be found."
          keywords="service not found, error, packers and movers"
        />
        <Navbar />
        <main className="pt-28 pb-16 bg-secondary/30">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Link to="/services.html" className="text-accent hover:underline">
              View All Services
            </Link>
          </div>
        </main>
        <FAQSection />
        <CTASection />
        <Map />
        <Footer />
      </HelmetProvider>
    );
  }

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(
    0,
    3
  );

  return (
    <HelmetProvider>
      <SEO
        title={`${service.title} - Professional ${service.title} Services | Sri tejaswini packers and movers`}
        description={service.fullDescription}
        keywords={`${service.title.toLowerCase()}, ${service.title.toLowerCase()} services, packers movers ${service.title.toLowerCase()}`}
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
              <Link
                to="/services.html"
                className="hover:text-primary transition-colors"
              >
                Services
              </Link>
              <span>/</span>
              <span className="text-primary">{service.title}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="max-w-3xl">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  {React.createElement(Icon, { className: "w-7 h-7 text-primary" })}
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                  {service.title}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {service.shortDesc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default" size="lg" asChild>
                    <Link to="/contact.html">
                      Get Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href={`tel:${COMPANY.phone}`}>
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Details */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    About Our {service.title} Service
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.fullDescription}
                  </p>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  {/* Quick Contact */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-primary rounded-2xl p-6 text-white"
                  >
                    <h3 className="text-xl font-bold mb-4">Need This Service?</h3>
                    <p className="text-white/80 mb-6">
                      Get a free quote for {service.title.toLowerCase()} today.
                      Our experts are ready to help.
                    </p>
                    <Button
                      variant="accent"
                      className="w-full mb-3"
                      asChild
                    >
                      <Link to="/contact.html">Get Free Quote</Link>
                    </Button>
                    <Button
                      variant="heroOutline"
                      className="w-full"
                      asChild
                    >
                      <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
                    </Button>
                  </motion.div>

                  {/* Related Services */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      Related Services
                    </h3>
                    <ul className="space-y-3">
                      {relatedServices.map((related) => (
                        <li key={related.id}>
                          <Link
                            to={`/services/${related.slug}.html`}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">

                              {iconMap[related.icon] && React.createElement(iconMap[related.icon], { className: "w-5 h-5" })}
                            </div>
                            <span className="text-foreground font-medium">
                              {related.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-accent">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-semibold text-sm mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Experience the Best {service.title} Service
              </h2>
              <p className="text-white/80 text-lg">
                With years of experience and a commitment to excellence, we ensure a smooth and stress-free relocation experience.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Locations */}
        <section className="section-padding bg-gradient-surface">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Our Presence
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                We Serve in These Cities
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Find our reliable packing and moving services in major cities across India.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS.slice(0, 6).map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/locations/${location.slug}.html`}
                    className="group block h-full bg-card rounded-2xl border border-border p-6 hover:border-accent hover:shadow-elevated transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                       Packers and Movers in {location.city}
                     </h3>
                     <p className="text-muted-foreground text-sm leading-relaxed">
                       {location.heroDescription}
                     </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FAQSection />
      <CTASection />
      <Map />
      <Footer />
      <FloatingCTA />
    </HelmetProvider>
  );
};

export default ServiceDetail;