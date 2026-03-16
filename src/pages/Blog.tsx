

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map"; // Import the Map component
import { BLOG_POSTS, SEO_DATA } from "@/constants/constants";

const Blog = () => (
  <>
      <SEOHead title={SEO_DATA.blog.title} description={SEO_DATA.blog.description} keywords={SEO_DATA.blog.keywords} />
      <Navbar />
      <main>
        <section className="pt-28 pb-16 bg-secondary/30">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Knowledge Center</span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Moving Tips, Guides & Insights
              </h1>
              <p className="text-muted-foreground text-lg">Expert advice to make your next relocation smoother, safer, and smarter.</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl bg-background border border-border hover:shadow-elevated transition-all overflow-hidden"
                >
                  <div className="h-44 bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">{post.category}</span>
                      <span className="flex items-center gap-1 text-muted-foreground text-xs"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <h2 className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
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

export default Blog;
