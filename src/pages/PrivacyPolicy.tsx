import { HelmetProvider } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Lock, Mail, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { COMPANY } from "@/constants/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";

const PrivacyPolicy = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <HelmetProvider>
      <SEO
        title={`Privacy Policy | ${COMPANY.name}`}
        description="Read our privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information"
      />
      <Navbar />
      <main className="pt-20 pb-12 md:pt-24 md:pb-20 bg-slate-50">
        {/* Hero Section */}
        <section className="pb-12 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          
          <div className="container-custom relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="max-w-3xl"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
                Privacy Policy
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                Your Privacy Matters
              </h1>
              <p className="text-white/70 text-lg">
                Learn how we protect and handle your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="prose prose-slate max-w-none space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold text-slate-900 m-0">Data We Collect</h2>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">
                  We collect contact information to provide quotes and services. This includes your name, phone number, email address, and moving details.
                </p>
                <p className="text-slate-600 m-0">
                  We do not sell your data to third parties. Your information is only used to provide our relocation services.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-bold text-slate-900 m-0">How We Protect Your Data</h2>
                  </div>
                </div>
                <p className="text-slate-600 m-0">
                  We use industry-standard security measures to protect your personal information. Your data is stored securely and only accessible to authorized personnel.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-heading font-bold text-slate-900 mb-4">Your Rights</h2>
                <p className="text-slate-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p className="text-slate-600 mt-4 mb-0">
                  To exercise these rights, contact us using the information below.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-heading font-bold text-slate-900 mb-4">Contact Us</h2>
                <p className="text-slate-600 mb-4">
                  If you have any questions about this privacy policy, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`mailto:${COMPANY.email}`} 
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
                  >
                    <Mail className="w-4 h-4" /> {COMPANY.email}
                  </a>
                  <a 
                    href={`tel:${COMPANY.phone}`} 
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
                  >
                    <Phone className="w-4 h-4" /> {COMPANY.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </HelmetProvider>
  );
};

export default PrivacyPolicy;
