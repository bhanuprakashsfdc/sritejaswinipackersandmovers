import React from 'react';
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map"; // Import the Map component
import { COMPANY } from "@/constants/constants";

const Terms = () => (
  <>
    <SEOHead title={`Terms & Conditions — ${COMPANY.name}`} description={`Terms and conditions for using ${COMPANY.name} services and website.`} />
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-8">Terms & Conditions</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>Last updated: February 2026</p>
          <p>By using the services of {COMPANY.name}, you agree to the following terms and conditions. Please read them carefully.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Service Agreement</h2>
          <p>Upon accepting a quotation and confirming a booking, a service agreement is formed between you and {COMPANY.name}. The scope of work, pricing, and timelines will be as described in your confirmed quotation.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Pricing & Payment</h2>
          <p>All prices quoted are inclusive of the services described. Additional services requested after booking may incur extra charges, which will be communicated and agreed upon before execution. Payment terms are as specified in your quotation.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Insurance & Liability</h2>
          <p>Basic transit insurance is included with all shipments. Comprehensive coverage is available at additional cost. Claims for damage must be filed within 48 hours of delivery with supporting documentation.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Cancellation Policy</h2>
          <p>Cancellations made 48+ hours before the scheduled move incur no charges. Cancellations within 48 hours may be subject to a cancellation fee as outlined in your quotation.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Prohibited Items</h2>
          <p>We do not transport hazardous materials, flammable substances, perishable food, live animals, or illegal goods. Any undisclosed prohibited items found during packing may result in service refusal.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Hyderabad, Telangana.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Contact</h2>
          <p>For questions regarding these terms, reach us at {COMPANY.email} or {COMPANY.phone}.</p>
        </div>
      </div>
    </main>
    <Map /> {/* Render the Map component here */}
    <Footer />
  </>
);

export default Terms;
