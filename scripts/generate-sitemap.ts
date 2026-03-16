import fs from "fs";
import path from "path";

// Domain provided by user
const DOMAIN = "https://www.sritejaswinipackersandmovers.com";

import { LOCATIONS, SERVICES } from "../src/constants/constants.ts";

// Load cities from the project (ESM import)
const cities = LOCATIONS;

// Helper to format date as YYYY-MM-DD
const today = new Date();
const lastmod = today.toISOString().slice(0, 10);

// Static pages to include (avoid anchor fragments in sitemaps)
const staticPaths = [
  "/",
  "/index.html",
  "/privacy-policy.html",
  "/terms.html",
  "/disclaimer.html",
  "/about.html",
  "/contact.html",
  "/locations.html",
  "/services.html",
];

// Build city paths mirroring router configuration (.html variants)
function cityPathsForCityName(cityName: string) {
  const s = String(cityName).toLowerCase().replace(/\s+/g, "-");
  return [
    `/packers-and-movers-in-${s}.html`,
    `/packers-and-movers-${s}.html`,
    `/packers-and-movers-nearme-${s}.html`,
    `/best-packers-and-movers-${s}.html`,
    `/best-packers-and-movers-in-${s}.html`,
    `/local-packers-and-movers-${s}.html`,
    `/local-packers-and-movers-in-${s}.html`,
    `/professional-packers-and-movers-${s}.html`,
    `/professional-packers-and-movers-in-${s}.html`,
    `/packers-and-movers-nearme-in-${s}.html`,
  ];
}

const urls = [];

// Add static URLs
for (const p of staticPaths) {
  urls.push({
    loc: `${DOMAIN}${p}`,
    changefreq: "weekly",
    priority: p === "/" ? "1.0" : "0.8",
  });
}

// Add dynamic city URLs
for (const city of cities) {
  for (const p of cityPathsForCityName(city.city)) {
    urls.push({ loc: `${DOMAIN}${p}`, changefreq: "weekly", priority: "0.9" });
  }
}

// Add dynamic service URLs
for (const service of SERVICES) {
  urls.push({
    loc: `${DOMAIN}/services/${service.slug}.html`,
    changefreq: "weekly",
    priority: "0.9",
  });
}

// Generate XML
const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
const urlsetClose = "</urlset>\n";

const xmlBody = urls
  .map(({ loc, changefreq, priority }) => {
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const sitemapXml = xmlHeader + urlsetOpen + xmlBody + "\n" + urlsetClose;

// Write to public/sitemap.xml
const outPath = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "../public/sitemap.xml",
);
fs.writeFileSync(outPath, sitemapXml, "utf-8");

console.log(`Sitemap generated with ${urls.length} URLs at: ${outPath}`);