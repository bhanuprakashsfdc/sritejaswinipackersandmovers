import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Home, Building2, Car, Truck, Package, Warehouse, Bike, MapPin, Factory } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map";
import { SERVICES, COMPANY, SEO_DATA } from "@/constants/constants";
import CTASection from "@/components/sections/CTASection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Building2, Car, Truck, Package, Warehouse, Bike, MapPin, Factory,
};

const colorClasses = [
  { bg: "bg-emerald-500/10", text: "text-emerald-500", border: "border-emerald-500/20" },
  { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "border-cyan-500/20" },
  { bg: "bg-violet-500/10", text: "text-violet-500", border: "border-violet-500/20" },
];

const Services = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead
        title={SEO_DATA.services.title}
        description={SEO_DATA.services.description}
        keywords={SEO_DATA.services.keywords}
        canonical="https://www.sritejaswinipackersandmovers.com/services.html"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Packers and Movers Services",
          "description": SEO_DATA.services.description,
          "itemListElement": SERVICES.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Service",
              "name": service.title,
              "description": service.shortDesc,
              "url": `https://www.sritejaswinipackersandmovers.com/services/${service.slug}.html`,
              "provider": {
                "@type": "Organization",
                "name": COMPANY.name,
              },
            },
          })),
        }}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM36%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zM6%2034v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zM6%200v2h2v-2h-2zm-2%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2zm-4-4h2v-2h-2v2zm0%204h2v-2h-2v2zm-4%204h2v-2h-2v2zm-4-4h2v-2h-2v2z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 mb-4">
              <Link to="/index.html" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-emerald-400">Services</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                {SEO_DATA.services.title}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                {SEO_DATA.services.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, index) => {
                const Icon = iconMap[service.icon] || Home;
                const colors = colorClasses[index % colorClasses.length];

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: prefersReducedMotion ? 0 : index * 0.05 }}
                  >
                    <Link
                      to={`/services/${service.slug}.html`}
                      className="group block h-full bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200"
                    >
                      {/* Icon Header */}
                      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-6">
                        <div className={`w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {service.shortDesc}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-4">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                              <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)]" />

          <div className="container-custom relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Every move is unique. Contact us for a personalized quote tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact.html" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold">
                Get Free Quote
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white bg-white/10 hover:bg-white/20 transition-colors">
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Map />
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Services;
