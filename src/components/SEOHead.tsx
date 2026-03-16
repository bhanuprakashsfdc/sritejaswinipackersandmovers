import React from 'react';
import { Helmet } from "react-helmet";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
  localBusiness?: {
    name: string;
    description: string;
    telephone: string;
    email?: string;
    address: {
      streetAddress?: string;
      addressLocality: string;
      addressRegion: string;
      postalCode?: string;
      addressCountry: string;
    };
    priceRange?: string;
    openingHours?: string;
    rating?: {
      ratingValue: string;
      reviewCount: string;
    };
    areaServed?: Array<{ '@type': string; name: string }>;
  };
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  jsonLd,
  localBusiness 
}: SEOHeadProps) => {
  // Build JSON-LD for local business if provided
  let structuredData = jsonLd;
  
  if (localBusiness && !jsonLd) {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "name": localBusiness.name,
      "description": localBusiness.description,
      "telephone": localBusiness.telephone,
      "email": localBusiness.email || undefined,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": localBusiness.address.streetAddress,
        "addressLocality": localBusiness.address.addressLocality,
        "addressRegion": localBusiness.address.addressRegion,
        "postalCode": localBusiness.address.postalCode,
        "addressCountry": localBusiness.address.addressCountry
      },
      "priceRange": localBusiness.priceRange,
      "openingHours": localBusiness.openingHours,
      "aggregateRating": localBusiness.rating ? {
        "@type": "AggregateRating",
        "ratingValue": localBusiness.rating.ratingValue,
        "reviewCount": localBusiness.rating.reviewCount
      } : undefined,
      "areaServed": localBusiness.areaServed
    };
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Sri tejaswini packers and movers" />
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Tirupati" />
      
      {/* Language */}
      <html lang="en" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
