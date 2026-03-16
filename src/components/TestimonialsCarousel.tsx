import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants/constants";


const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  useEffect(() => {
    if (!prefersReducedMotion) {
      intervalRef.current = setInterval(next, 7000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current, prefersReducedMotion]);

  const t = TESTIMONIALS[current];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
      
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Real Experiences from Real Families
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't take our word for it — hear from the 75,000+ families and businesses who chose us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-8 md:p-12 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-slate-200/30">
            <Quote className="w-12 h-12 text-emerald-500/10 absolute top-6 left-6" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-800 text-lg md:text-xl leading-relaxed mb-8 text-center font-medium">
                  "{t.text}"
                </blockquote>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-3 text-white font-heading font-bold text-xl shadow-lg shadow-emerald-500/30">
                    {t.author.charAt(0)}
                  </div>
                  <p className="font-heading font-bold text-slate-900">{t.author}</p>
                  <p className="text-slate-500 text-sm">{t.location} · {t.service}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prev} 
                className="w-12 h-12 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors text-slate-600 hover:text-emerald-600"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${i === current ? "bg-emerald-500 w-8" : "bg-slate-200 w-2 hover:bg-slate-300"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={next} 
                className="w-12 h-12 rounded-full bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors text-slate-600 hover:text-emerald-600"
                aria-label="Next testimonial"
              >
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
