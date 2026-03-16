import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { MapPin, CheckCircle2, Phone, ArrowRight, Star, Home, Building2, Car, Truck, Package, Warehouse, Bike, Factory, TrendingUp, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import SEOHead from "@/components/SEOHead";
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

const colorClasses = [
  { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/20", gradient: "from-emerald-500 to-cyan-500" },
  { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/20", gradient: "from-cyan-500 to-blue-500" },
  { bg: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/20", gradient: "from-violet-500 to-purple-500" },
];

const LocationDetail = () => {
  const params = useParams();
  const prefersReducedMotion = useReducedMotion();
  
  const slugParam =
    params.slug ??
    (params.city ? `${String(params.city).toLowerCase()}` : undefined);

  const dynamic = getCityConfigSync(slugParam);
  const fallback = slugParam
    ? LOCATIONS.find((l) => l.slug.toLowerCase() === slugParam.toLowerCase())
    : null;
  const location = dynamic || fallback;
  
  const colors = colorClasses[LOCATIONS.findIndex(l => l.slug === (location?.slug || slugParam)) % colorClasses.length];

  if (!location) {
    return (
      <Layout>
        <Navbar />
        <main className="pt-28 pb-16 bg-slate-900">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4 text-white">Location Not Found</h1>
            <Link to="/locations.html" className="text-emerald-400 hover:underline">
              View All Locations
            </Link>
          </div>
        </main>
        <Footer />
      </Layout>
    );
  }

  // Check if this is Tirupati for enhanced SEO
  const isTirupati = location.slug.toLowerCase().includes('tirupati');

  // Enhanced local business schema for Tirupati
  const localBusinessSchema = isTirupati ? {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `${COMPANY.name} - ${location.city}`,
    "description": location.metaDescription || "Best packers and movers in Tirupati. Professional house shifting, office relocation, car transport services.",
    "url": `/${location.slug}.html`,
    "telephone": COMPANY.phone,
    "email": COMPANY.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN",
    },
    "priceRange": "₹₹₹",
    "openingHours": "Mo-Su 00:00-24:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "areaServed": (location.areas || []).slice(0, 10).map((area) => ({
      "@type": "Place",
      "name": area,
      "containedInPlace": {
        "@type": "City",
        "name": location.city
      }
    })),
    "serviceType": [
      "House Shifting",
      "Office Relocation", 
      "Car Transportation",
      "Bike Transport",
      "Local Moving",
      "Inter-state Moving"
    ],
    "sameAs": [
      "https://www.facebook.com/sritejaswinipackers",
      "https://www.instagram.com/sritejaswinipackers"
    ]
  } : {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `${COMPANY.name} - ${location.city}`,
    "description": location.metaDescription,
    "url": `/${location.slug}.html`,
    "telephone": COMPANY.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": location.state || "India",
      "addressCountry": "IN",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  return (
    <HelmetProvider>
      <SEOHead
        title={location.metaTitle || `${location.city} - Packers and Movers | ${COMPANY.name}`}
        description={location.metaDescription || `Best packers and movers in ${location.city}. Professional house shifting and relocation services. Get free quote!`}
        keywords={`packers movers ${location.city}, ${location.city} relocation, house shifting ${location.city}, best packers and movers in ${location.city}, cheap packers and movers ${location.city}`}
        localBusiness={{
          name: `${COMPANY.name} - ${location.city}`,
          description: location.metaDescription || `Professional packers and movers in ${location.city}`,
          telephone: COMPANY.phone,
          email: COMPANY.email,
          address: {
            addressLocality: location.city,
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN"
          },
          priceRange: "₹₹₹",
          openingHours: "Mo-Su 00:00-24:00",
          rating: {
            ratingValue: "4.9",
            reviewCount: "500"
          },
          areaServed: (location.areas || []).slice(0, 10).map((area) => ({
            '@type': 'City',
            name: area
          }))
        }}
        jsonLd={localBusinessSchema}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          
          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 mb-4">
              <Link to="/index.html" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/locations.html" className="hover:text-emerald-400 transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-emerald-400">{location.city}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className={`w-16 h-16 ${colors.bg} ${colors.border} border rounded-2xl flex items-center justify-center mb-5`}>
                <MapPin className={`w-8 h-8 ${colors.text}`} />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                {isTirupati ? "Best Packers and Movers in Tirupati" : location.city}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {location.heroDescription || `Professional packers and movers in ${location.city}. Get reliable house shifting, office relocation, and vehicle transport services.`}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                  <Link to="/contact.html">
                    Get Free Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                  <a href={`tel:${COMPANY.phone}`}>
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
                Service Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Areas We Serve in {location.city}
              </h2>
              <p className="text-slate-600 text-lg">
                We provide complete packing and moving services across all major localities in {location.city} and surrounding areas.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3 justify-center">
              {(location.areas || []).map((area, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.03 }}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 transition-colors cursor-default"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Services in Location */}
        <section className="section-padding bg-slate-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Moving Services in {location.city}
              </h2>
              <p className="text-slate-600 text-lg">
                Complete range of relocation services tailored for {location.city}'s unique requirements.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block h-full bg-white rounded-2xl border border-slate-200 p-6 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 transition-all"
                  >
                    <div className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text} mb-4 group-hover:scale-110 transition-transform`}>
                      {React.createElement(iconMap[service.icon], { className: "w-6 h-6" })}
                    </div>
                    <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {service.title} in {location.city}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Trust Proof */}
        <section className="py-16 bg-gradient-to-r from-emerald-500 to-cyan-500">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: isTirupati ? "5000+" : "5000+", label: `Moves in ${location.city}` },
                { value: "4.9★", label: "Local Rating" },
                { value: "Same Day", label: "Service Available" },
                { value: "Free", label: "Survey & Quote" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
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
