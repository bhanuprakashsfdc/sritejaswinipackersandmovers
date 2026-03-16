import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants/constants";


const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const t = TESTIMONIALS[current];

  return (
    <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Customer Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Real Experiences from Real Families
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't take our word for it — hear from the 75,000+ families and businesses who chose us.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl p-8 md:p-12 bg-background border border-border shadow-glass">
              <Quote className="w-12 h-12 text-primary/10 absolute top-6 left-6" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="text-foreground text-lg md:text-xl leading-relaxed mb-8 text-center">
                    "{t.text}"
                  </blockquote>
                  <div className="text-center">
                    <div className="w-11 h-11 rounded-full bg-gradient-brand flex items-center justify-center mx-auto mb-3 text-primary-foreground font-heading font-bold text-lg">
                      {t.author.charAt(0)}
                    </div>
                    <p className="font-heading font-bold text-foreground">{t.author}</p>
                    <p className="text-muted-foreground text-sm">{t.location} · {t.service}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-4 mt-8">
                <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-foreground">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border"}`}
                    />
                  ))}
                </div>
                <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-foreground">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default TestimonialsCarousel;
