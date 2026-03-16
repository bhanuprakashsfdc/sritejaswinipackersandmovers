// Dynamic city data loader
// Supports optional per-city files under src/data/cities/* and
// falls back to a generic template for any city/slug.
import { COMPANY } from "@/constants/constants";

export interface CityConfig {
  id?: string;
  city: string;
  state: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  areas: string[];
  features: string[];
}

const CITY_MODULES: Record<string, { default: CityConfig }> = import.meta.glob("./cities/*.{json,ts,js}", {
  eager: true,
});

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
  const citySlug = toSlug(clean);
  return { citySlug, fullSlug: `packers-and-movers-in-${citySlug}` };
};

function templateForCity(citySlug: string): CityConfig {
  const cityTitle = fromSlugToTitle(citySlug);
  return {
    city: cityTitle,
    state: "India",
    slug: `packers-and-movers-in-${citySlug}`,
    metaTitle: `Best Packers and Movers in ${cityTitle} | ${COMPANY.name}`,
    metaDescription: `Trusted packers and movers in ${cityTitle}. Professional household and office shifting, safe transport and timely delivery. Get a free quote.`,
    heroTitle: `Reliable Packers & Movers in ${cityTitle}`,
    heroDescription: `Premium relocation services in ${cityTitle}. Expert packing, careful handling, and on-time delivery across all localities.`,
    areas: [],
    features: [
      "Professional packing & safe handling",
      "Door-to-door service",
      "On-time delivery",
      "Pan-India network",
    ],
  };
}

export function getCityConfigSync(slugOrCity?: string): CityConfig | null {
  const { citySlug, fullSlug } = normalizeInput(slugOrCity);
  const modules = Object.values(CITY_MODULES)
    .map((m) => (m && m.default ? m.default : null))
    .filter(Boolean) as CityConfig[];

  const bySlug =
    modules.find((c) => c.slug?.toLowerCase() === fullSlug) ||
    modules.find((c) => toSlug(c.city) === citySlug);

  if (bySlug) {
    return {
      ...templateForCity(toSlug(bySlug.city)),
      ...bySlug,
    };
  }

  if (!citySlug) return null;
  return templateForCity(citySlug);
}