import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map"; // Import the Map component
import { COMPANY, FLEET_DETAILS } from "@/constants/constants";


const galleryItems = [
  { title: "Precision Packing", desc: "Multi-layer bubble wrap, EPE foam, and custom wooden crates for maximum item protection.", emoji: "📦" },
  { title: "Supervised Loading", desc: "Hydraulic lifts and trained crew ensure structured, damage-free loading.", emoji: "🏗️" },
  { title: "GPS-Tracked Fleet", desc: "Modern containerized trucks with real-time tracking across India.", emoji: "🚛" },
  { title: "Climate-Controlled Storage", desc: "24/7 monitored, pest-free warehouses for short and long-term needs.", emoji: "🏢" },
  { title: "Enclosed Car Carriers", desc: "Hydraulic-lift carriers with zero-scratch guarantee and full insurance.", emoji: "🚗" },
  { title: "Corporate Moves", desc: "Systematic IT infrastructure handling and modular furniture logistics.", emoji: "🖥️" },
];

const Gallery = () => (
  <>
      <SEOHead title={`Our Work & Fleet — ${COMPANY.name}`} description="Explore our packing standards, fleet, and infrastructure." />
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-secondary/30">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Gallery</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Our Work & Infrastructure</h1>
              <p className="text-muted-foreground text-lg">A look at the systems, fleet, and standards behind every Sri tejaswini packers and movers move.</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Operations Showcase</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-background border border-border overflow-hidden hover:shadow-glass transition-all">
                  <div className="h-48 bg-gradient-to-br from-secondary to-primary/5 flex items-center justify-center">
                    <span className="text-5xl">{item.emoji}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Our Fleet</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FLEET_DETAILS.map((f) => (
                <div key={f.id} className="p-6 rounded-2xl bg-background border border-border hover:shadow-glass transition-all">
                  <h3 className="font-heading font-bold text-foreground mb-2">{f.name}</h3>
                  <p className="text-primary font-semibold text-sm">{f.capacity}</p>
                  <p className="text-muted-foreground text-sm mt-1">{f.capacity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Map /> {/* Render the Map component here */}
      <Footer />
      <FloatingCTA />
    </>
);

export default Gallery;
