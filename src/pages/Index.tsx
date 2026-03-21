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
import Map from "@/components/Map";
import { SEO_DATA, COMPANY, LOCATIONS } from "@/constants/constants";

const Index = () => {
  // Comprehensive Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY.name,
    "description": COMPANY.description,
    "url": "https://www.sritejaswinipackersandmovers.com",
    "telephone": COMPANY.phone,
    "email": COMPANY.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY.address,
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500001",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹₹",
    "openingHours": "Mo-Su 00:00-24:00",
    "image": "https://www.sritejaswinipackersandmovers.com/images/og-image.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewBody": "Excellent service! Very professional team and safe delivery."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/sritejaswinipackers",
      "https://www.instagram.com/sritejaswinipackers",
      "https://twitter.com/jballindiapackers"
    ],
    "areaServed": LOCATIONS.map(loc => ({
      "@type": "City",
      "name": loc.city,
      "containedIn": {
        "@type": "State",
        "name": loc.state
      }
    })),
    "serviceType": [
      "House Shifting",
      "Office Relocation",
      "Car Transportation",
      "Bike Transport",
      "Local Moving",
      "Inter-state Moving",
      "International Moving",
      "Storage Solutions"
    ]
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": COMPANY.name,
    "url": "https://www.sritejaswinipackersandmovers.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.sritejaswinipackersandmovers.com/contact.html?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // LocalBusiness schema for main office
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": COMPANY.name,
    "description": COMPANY.description,
    "url": "https://www.sritejaswinipackersandmovers.com",
    "telephone": COMPANY.phone,
    "email": COMPANY.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY.address,
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500001",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹₹",
    "openingHours": "Mo-Su 00:00-24:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "areaServed": [
      "Telangana",
      "Andhra Pradesh",
      "Karnataka",
      "Maharashtra",
      "Tamil Nadu",
      "Delhi NCR",
      "West Bengal",
      "Gujarat"
    ]
  };

  // FAQ schema for homepage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best packers and movers in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sri Tejaswini packers and movers is one of the most trusted names in the Indian relocation industry with 15+ years of experience, ISO certification, and IBA approval."
        }
      },
      {
        "@type": "Question",
        "name": "How much do packers and movers cost in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost varies based on distance, volume of goods, and services required. Local shifting starts from ₹3,000 and interstate from ₹8,000. We provide free surveys and transparent quotes."
        }
      },
      {
        "@type": "Question",
        "name": "Do packers and movers provide insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our shipments are fully insured. We provide comprehensive transit insurance coverage for complete peace of mind during your move."
        }
      },
      {
        "@type": "Question",
        "name": "How long does house shifting take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local moves typically take 1-2 days. Inter-state moves depend on distance - usually 3-7 days. We provide guaranteed on-time delivery."
        }
      }
    ]
  };

  // Combine all schemas
  const jsonLd = [organizationSchema, websiteSchema, localBusinessSchema, faqSchema];

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
