import React from 'react';
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map"; // Import the Map component
import { COMPANY } from "@/constants/constants";

const Disclaimer = () => (
  <>
    <SEOHead title={`Disclaimer — ${COMPANY.name}`} description={`Disclaimer for ${COMPANY.name} website and services.`} />
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-8">Disclaimer</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>Last updated: February 2026</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Website Content</h2>
          <p>The information provided on this website is for general informational purposes only. While we strive to keep the content accurate and up-to-date, {COMPANY.name} makes no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Price Estimates</h2>
          <p>All cost estimates provided through our website calculators or quick quote forms are approximate and for reference only. Actual pricing is determined after a detailed survey of your belongings and will be provided in a formal quotation.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Third-Party Links</h2>
          <p>Our website may contain links to external websites. {COMPANY.name} is not responsible for the content, privacy practices, or availability of third-party sites.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Service Availability</h2>
          <p>Service availability may vary by location and season. Listed cities represent our primary network; additional locations may be serviceable on request.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, {COMPANY.name} shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Contact</h2>
          <p>If you have questions about this disclaimer, contact us at {COMPANY.email}.</p>
        </div>
      </div>
    </main>
      <Map /> {/* Render the Map component here */}
    <Footer />
  </>
);

export default Disclaimer;
