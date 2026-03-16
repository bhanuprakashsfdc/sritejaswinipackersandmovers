import React from 'react';
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Map from "@/components/Map"; // Import the Map component
import { COMPANY } from "@/constants/constants";

const Privacy = () => (
  <>
    <SEOHead title={`Privacy Policy — ${COMPANY.name}`} description={`Privacy policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information.`} />
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>Last updated: February 2026</p>
          <p>{COMPANY.name} ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Information We Collect</h2>
          <p>We may collect personal information you voluntarily provide, including: name, phone number, email address, moving origin and destination addresses, and details about your moving requirements. We also automatically collect certain technical data such as IP address, browser type, and pages visited.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">How We Use Your Information</h2>
          <p>We use collected information to: provide moving quotes and services, communicate with you about your relocation, improve our website and services, send relevant updates (with your consent), and comply with legal obligations.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Information Sharing</h2>
          <p>We do not sell your personal information. We may share data with service partners directly involved in fulfilling your relocation, analytics providers, and legal authorities when required by law.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by contacting us at {COMPANY.email}.</p>

          <h2 className="text-xl font-heading font-bold text-foreground mt-8">Contact Us</h2>
          <p>For questions about this Privacy Policy, contact us at {COMPANY.email} or call {COMPANY.phone}.</p>
        </div>
      </div>
    </main>
    <Map /> {/* Render the Map component here */}
    <Footer />
  </>
);

export default Privacy;
