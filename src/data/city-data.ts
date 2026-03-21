// Dynamic city data loader with comprehensive SEO
// Generates rich SEO content for all cities in the LOCATIONS array
import { COMPANY, LOCATIONS } from "@/constants/constants";

export interface CityConfig {
  id?: string;
  city: string;
  state: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  heroTitle?: string;
  heroDescription?: string;
  heroDescriptionLong?: string;
  areas: string[];
  features: string[];
  services?: string[];
  testimonials?: Array<{ name: string; rating: number; text: string }>;
  faq?: Array<{ question: string; answer: string }>;
  whyChooseUs?: string[];
  pricing?: {
    localShifting?: string;
    interstateShifting?: string;
    carTransport?: string;
    bikeTransport?: string;
    [key: string]: string | undefined;
  };
  structuredData?: object;
  localBusinessSchema?: object;
  faqSchema?: object;
}

const toSlug = (name: string) =>
  String(name)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const fromSlugToTitle = (slug: string) =>
  slug
    .split("-")
    .map((s) => (s.length ? s[0].toUpperCase() + s.slice(1) : s))
    .join(" ");

const normalizeInput = (slugOrCity?: string) => {
  if (!slugOrCity) return { citySlug: "", fullSlug: "" };
  const clean = slugOrCity.toLowerCase();
  if (clean.startsWith("packers-and-movers-in-")) {
    const citySlug = clean.replace("packers-and-movers-in-", "");
    return { citySlug, fullSlug: clean };
  }
  const toSlug = (name: string) =>
    String(name)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  const citySlug = toSlug(clean);
  return { citySlug, fullSlug: `packers-and-movers-in-${citySlug}` };
};

// Common services offered across all cities
const commonServices = [
  "House Shifting",
  "Office Relocation",
  "Car Transportation",
  "Bike Transport",
  "Local Moving",
  "Inter-state Moving",
  "International Moving",
  "Storage Solutions"
];

// Common FAQ template for all cities
const getFaqTemplate = (city: string, state: string) => [
  {
    question: `How to find the best packers and movers in ${city}?`,
    answer: `Look for verified companies with good reviews, transparent pricing, and proper licensing. Sri Tejaswini packers and movers ${city} offers all this with years of experience and IBA approval.`
  },
  {
    question: `What is the cost of house shifting in ${city}?`,
    answer: `The cost depends on distance, volume of goods, and services required. We provide free surveys and competitive quotes for all ${city} relocations.`
  },
  {
    question: `Do you provide packing services in ${city}?`,
    answer: `Yes, we provide professional packing services with high-quality materials to ensure safety of your belongings during transit in ${city}.`
  },
  {
    question: `How long does local shifting take in ${city}?`,
    answer: `Local shifting within ${city} typically takes 1-2 days depending on the volume of goods and distance.`
  }
];

// Why choose us template
const whyChooseUsTemplate = [
  "15+ years of experience in relocation services",
  "5000+ successful moves in the region",
  "ISO 9001:2015 certified company",
  "IBA approved packers and movers",
  "Free survey and instant quotes",
  "24/7 customer support",
  "Full insurance coverage",
  "Real-time tracking facility"
];

// Generate structured data for a city
const generateStructuredData = (city: string, state: string, slug: string, areas: string[]) => ({
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": `${COMPANY.name} - ${city}`,
  "description": `Best packers and movers in ${city}, ${state}. Professional house shifting, office relocation, car transport services.`,
  "url": `/${slug}.html`,
  "telephone": COMPANY.phone,
  "email": COMPANY.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city,
    "addressRegion": state,
    "addressCountry": "IN"
  },
  "priceRange": "₹₹₹",
  "openingHours": "Mo-Su 00:00-24:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  },
  "areaServed": areas.slice(0, 10).map(area => ({
    "@type": "Place",
    "name": area,
    "containedInPlace": {
      "@type": "City",
      "name": city
    }
  })),
  "serviceType": commonServices,
  "sameAs": [
    "https://www.facebook.com/sritejaswinipackers",
    "https://www.instagram.com/sritejaswinipackers"
  ]
});

// Enhanced template for cities with full SEO content
function enhancedTemplate(citySlug: string): CityConfig {
  const cityTitle = fromSlugToTitle(citySlug);
  
  // Find city in constants if it exists
  const cityFromConstants = LOCATIONS.find(
    loc => toSlug(loc.city) === citySlug || loc.slug === `packers-and-movers-in-${citySlug}`
  );
  
  if (cityFromConstants) {
    // Use the existing data from constants with enhanced SEO
    return {
      ...cityFromConstants,
      heroDescriptionLong: cityFromConstants.heroDescription,
      services: commonServices,
      testimonials: [
        {
          name: "Happy Customer",
          rating: 5,
          text: `Excellent service! My household shifting from ${cityTitle} was handled perfectly. The team was professional and my belongings arrived safely.`
        },
        {
          name: "Satisfied Client",
          rating: 5,
          text: `Best packers in ${cityTitle}. They packed everything with great care and delivered on time. Highly recommended!`
        }
      ],
      faq: getFaqTemplate(cityTitle, cityFromConstants.state),
      whyChooseUs: whyChooseUsTemplate,
      pricing: {
        localShifting: "Starting from ₹3,000",
        interstateShifting: "Starting from ₹8,000",
        carTransport: "Starting from ₹5,000",
        bikeTransport: "Starting from ₹2,000"
      },
      structuredData: generateStructuredData(
        cityTitle, 
        cityFromConstants.state, 
        cityFromConstants.slug, 
        cityFromConstants.areas
      )
    };
  }
  
  // Default template for cities not in constants
  return {
    city: cityTitle,
    state: "India",
    slug: `packers-and-movers-in-${citySlug}`,
    metaTitle: `Best Packers and Movers in ${cityTitle} | ${COMPANY.name}`,
    metaDescription: `Trusted packers and movers in ${cityTitle}. Professional household and office shifting, safe transport and timely delivery. Get a free quote today!`,
    heroTitle: `Reliable Packers & Movers in ${cityTitle}`,
    heroDescription: `Premium relocation services in ${cityTitle}. Expert packing, careful handling, and on-time delivery across all localities.`,
    heroDescriptionLong: `Sri Tejaswini packers and movers is the most trusted name for relocation services in ${cityTitle}. With years of experience and a dedicated team, we ensure your belongings reach safely.`,
    areas: [],
    features: [
      "Professional packing & safe handling",
      "Door-to-door service",
      "On-time delivery",
      "Pan-India network"
    ],
    services: commonServices,
    testimonials: [
      {
        name: "Happy Customer",
        rating: 5,
        text: `Excellent service! My household shifting was handled perfectly.`
      }
    ],
    faq: getFaqTemplate(cityTitle, "India"),
    whyChooseUs: whyChooseUsTemplate,
    pricing: {
      localShifting: "Starting from ₹3,000",
      interstateShifting: "Starting from ₹8,000",
      carTransport: "Starting from ₹5,000",
      bikeTransport: "Starting from ₹2,000"
    },
    structuredData: generateStructuredData(cityTitle, "India", `packers-and-movers-in-${citySlug}`, [])
  };
}

// Check for dedicated city JSON files (like tirupati.json)
const CITY_MODULES: Record<string, { default: CityConfig }> = import.meta.glob("./cities/*.{json,ts,js}", {
  eager: true,
});

export function getCityConfigSync(slugOrCity?: string): CityConfig | null {
  const { citySlug, fullSlug } = normalizeInput(slugOrCity);
  
  // First check for dedicated city JSON files
  const modules = Object.values(CITY_MODULES)
    .map((m) => (m && m.default ? m.default : null))
    .filter(Boolean) as CityConfig[];

  const bySlug =
    modules.find((c) => c.slug?.toLowerCase() === fullSlug) ||
    modules.find((c) => toSlug(c.city) === citySlug);

  if (bySlug) {
    // Use dedicated JSON file data, fallback to enhanced template
    return {
      ...enhancedTemplate(toSlug(bySlug.city)),
      ...bySlug,
      // Preserve structuredData from JSON if available, otherwise generate
      structuredData: bySlug.structuredData || generateStructuredData(
        bySlug.city, 
        bySlug.state || "India", 
        bySlug.slug, 
        bySlug.areas
      )
    };
  }

  if (!citySlug) return null;
  
  // Use enhanced template for cities without dedicated files
  return enhancedTemplate(citySlug);
}
