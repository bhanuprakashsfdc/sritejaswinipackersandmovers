import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
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

const colorClasses = [
  { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/20" },
  { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/20" },
  { bg: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/20" },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const prefersReducedMotion = useReducedMotion();
  const service = SERVICES.find((s) => s.slug === slug);
  const Icon = iconMap[service?.icon] || Home;
  const colors = colorClasses[SERVICES.findIndex(s => s.slug === slug) % colorClasses.length];

  if (!service) {
    return (
      <HelmetProvider>
        <SEO
          title="Service Not Found - Sri tejaswini packers and movers"
          description="The service you are looking for could not be found."
          keywords="service not found, error, packers and movers"
        />
        <Navbar />
        <main className="pt-28 pb-16 bg-slate-900">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4 text-white">Service Not Found</h1>
            <Link to="/services.html" className="text-emerald-400 hover:underline">
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

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

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
        <section className="pt-28 pb-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          
          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 mb-4">
              <Link to="/index.html" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services.html" className="hover:text-emerald-400 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-emerald-400">{service.title}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="max-w-3xl">
                <div className={`w-16 h-16 ${colors.bg} ${colors.border} border rounded-2xl flex items-center justify-center mb-5`}>
                  {React.createElement(Icon, { className: `w-8 h-8 ${colors.text}` })}
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                  {service.title}
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {service.shortDesc}
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
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Details */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    About Our {service.title} Service
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {service.fullDescription}
                  </p>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  {/* Quick Contact */}
                  <motion.div
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl p-6 text-white"
                  >
                    <h3 className="text-xl font-bold mb-4">Need This Service?</h3>
                    <p className="text-white/80 mb-6">
                      Get a free quote for {service.title.toLowerCase()} today.
                      Our experts are ready to help.
                    </p>
                    <Button
                      className="w-full mb-3 bg-white text-emerald-600 hover:bg-white/90"
                      asChild
                    >
                      <Link to="/contact.html">Get Free Quote</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                      asChild
                    >
                      <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
                    </Button>
                  </motion.div>

                  {/* Related Services */}
                  <motion.div
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-slate-200"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Related Services</h3>
                    <ul className="space-y-3">
                      {relatedServices.map((related) => (
                        <li key={related.id}>
                          <Link
                            to={`/services/${related.slug}.html`}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center ${colors.text}`}>
                              {iconMap[related.icon] && React.createElement(iconMap[related.icon], { className: "w-5 h-5" })}
                            </div>
                            <span className="text-slate-700 font-medium">{related.title}</span>
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
        <section className="py-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Experience the Best {service.title} Service
              </h2>
              <p className="text-white/70 text-lg">
                With years of experience and a commitment to excellence, we ensure a smooth and stress-free relocation experience.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-white text-base">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Locations */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
                Our Presence
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                We Serve in These Cities
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Find our reliable packing and moving services in major cities across India.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LOCATIONS.slice(0, 6).map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 }}
                >
                  <Link
                    to={`/locations/${location.slug}.html`}
                    className="group block h-full bg-white rounded-2xl border border-slate-200 p-6 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 transition-all"
                  >
                    <div className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text} mb-4 group-hover:scale-110 transition-transform`}>
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      Packers and Movers in {location.city}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
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
