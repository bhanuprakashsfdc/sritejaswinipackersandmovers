import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { MapPin, CheckCircle2, Phone, ArrowRight, Star, Home, Building2, Car, Truck, Package, Warehouse, Bike, Factory, TrendingUp, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { LOCATIONS, SERVICES, COMPANY } from "@/constants/constants";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { getCityConfigSync } from "@/data/city-data";
import Navbar from "@/components/layout/Navbar";
import Map from "@/components/Map";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Building2, Car, Truck, Package, Warehouse, Bike, MapPin, Factory, TrendingUp, Award, Star
};

const LocationDetail = () => {
  const params = useParams();
  const slugParam =
    params.slug ??
    (params.city ? `${String(params.city).toLowerCase()}` : undefined);

  const dynamic = getCityConfigSync(slugParam);
  const fallback = slugParam
    ? LOCATIONS.find((l) => l.slug.toLowerCase() === slugParam.toLowerCase())
    : null;
  const location = dynamic || fallback;

  if (!location) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
            <Link to="/locations.html" className="text-accent hover:underline">
              View All Locations
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Location-specific schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: `${COMPANY.name} - ${location.city}`,
    description: location.metaDescription,
    url: `/${location.slug}.html`,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: "IN",
    },
    areaServed: location.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };

  return (
    <HelmetProvider>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
                keywords={`packers movers ${location.city}, ${location.city} relocation, house shifting ${location.city}`}
        structuredData={localBusinessSchema}
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
                to="/locations.html"
                className="hover:text-primary transition-colors"
              >
                Locations
              </Link>
              <span>/</span>
              <span className="text-primary">{location.city}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                {location.city}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {location.heroDescription}
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
            </motion.div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                Service Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Areas We Serve in {location.city}
              </h2>
              <p className="text-muted-foreground text-lg">
                We provide complete packing and moving services across all major
                localities in {location.city} and surrounding areas.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3 justify-center">
              {location.areas.map((area, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="px-4 py-2 rounded-full bg-card border border-border text-foreground hover:border-accent hover:bg-accent/5 transition-colors cursor-default"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Services in Location */}
        <section className="section-padding bg-gradient-surface">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Moving Services in {location.city}
              </h2>
              <p className="text-muted-foreground text-lg">
                Complete range of relocation services tailored for{" "}
                {location.city}'s unique requirements.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block h-full bg-card rounded-2xl border border-border p-6 hover:border-accent hover:shadow-elevated transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                      {React.createElement(iconMap[service.icon], { className: "w-6 h-6" })}
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title} in {location.city}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Trust Proof */}
        <section className="py-16 bg-accent">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: "5000+", label: `Moves in ${location.city}` },
                { value: "4.9★", label: "Local Rating" },
                { value: "Same Day", label: "Service Available" },
                { value: "Free", label: "Survey & Quote" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
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

export default LocationDetail;