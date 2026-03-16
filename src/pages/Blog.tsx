import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map";
import { BLOG_POSTS, SEO_DATA } from "@/constants/constants";

const Blog = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEOHead title={SEO_DATA.blog.title} description={SEO_DATA.blog.description} keywords={SEO_DATA.blog.keywords} />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-slate-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          
          <div className="container-custom relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="max-w-3xl"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
                Knowledge Center
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Moving Tips, Guides & Insights
              </h1>
              <p className="text-white/70 text-lg">
                Expert advice to make your next relocation smoother, safer, and smarter.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: prefersReducedMotion ? 0 : i * 0.06 }}
                  className="group rounded-2xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 transition-all overflow-hidden"
                >
                  <div className="h-44 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">{post.category}</span>
                      <span className="flex items-center gap-1 text-slate-500 text-xs">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-slate-900 text-lg mb-2 group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="inline-flex items-center gap-1 text-emerald-600 text-sm font-semibold group-hover:gap-2 transition-all"
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
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

export default Blog;
