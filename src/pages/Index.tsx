import React from 'react';
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import CostEstimator from "@/components/CostEstimator";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CityGrid from "@/components/CityGrid";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import FloatingCTA from "@/components/layout/FloatingCTA";

import Map from "@/components/Map"; // Import the Map component
import { SEO_DATA, COMPANY } from "@/constants/constants";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    description: COMPANY.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: { "@type": "PostalAddress", streetAddress: COMPANY.address },
  };

  return (
    <>
      <SEOHead
                title={SEO_DATA.home.title}
                description={SEO_DATA.home.description}
                keywords={SEO_DATA.home.keywords}
                jsonLd={jsonLd}
              />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBadges />
        <ServicesGrid />
        <WhyChooseUs />
        <ProcessTimeline />
        <CostEstimator />
        <TestimonialsCarousel />
        <CityGrid />
        <FAQSection />
        <CTASection />
      </main>
      <Map />
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Index;
