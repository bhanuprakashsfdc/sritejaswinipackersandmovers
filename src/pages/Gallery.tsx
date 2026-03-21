import { motion, useReducedMotion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map";
import { COMPANY, FLEET_DETAILS } from "@/constants/constants";


const galleryItems = [
  { title: "Precision Packing", desc: "Multi-layer bubble wrap, EPE foam, and custom wooden crates for maximum item protection.", icon: "📦", color: "from-emerald-500/20 to-cyan-500/10" },
  { title: "Supervised Loading", desc: "Hydraulic lifts and trained crew ensure structured, damage-free loading.", icon: "🏗️", color: "from-blue-500/20 to-indigo-500/10" },
  { title: "GPS-Tracked Fleet", desc: "Modern containerized trucks with real-time tracking across India.", icon: "🚛", color: "from-violet-500/20 to-purple-500/10" },
  { title: "Climate-Controlled Storage", desc: "24/7 monitored, pest-free warehouses for short and long-term needs.", icon: "🏢", color: "from-orange-500/20 to-amber-500/10" },
  { title: "Enclosed Car Carriers", desc: "Hydraulic-lift carriers with zero-scratch guarantee and full insurance.", icon: "🚗", color: "from-rose-500/20 to-pink-500/10" },
  { title: "Corporate Moves", desc: "Systematic IT infrastructure handling and modular furniture logistics.", icon: "🖥️", color: "from-teal-500/20 to-emerald-500/10" },
];

const Gallery = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead title={`Our Work & Fleet — ${COMPANY.name}`} description="Explore our packing standards, fleet, and infrastructure." />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-slate-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.08),transparent_50%)]" />
          
          <div className="container-custom relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="max-w-3xl"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
                Gallery
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Our Work & Infrastructure
              </h1>
              <p className="text-white/70 text-lg">
                A look at the systems, fleet, and standards behind every Sri Tejaswini packers and movers move.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Operations Showcase */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-6 md:mb-8">Operations Showcase</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {galleryItems.map((item, i) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: prefersReducedMotion ? 0 : i * 0.08 }}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-emerald-500/10 transition-all group"
                >
                  <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <span className="text-5xl">{item.icon}</span>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="font-heading font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="section-padding bg-slate-100">
          <div className="container-custom">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Our Fleet</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FLEET_DETAILS.map((f) => (
                <motion.div 
                  key={f.id} 
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-emerald-200 transition-all"
                >
                  <h3 className="font-heading font-bold text-slate-900 mb-2">{f.name}</h3>
                  <p className="text-emerald-600 text-sm">{f.capacity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Map />
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Gallery;
