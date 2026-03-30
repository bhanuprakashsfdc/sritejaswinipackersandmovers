import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS } from "@/constants/constants";

const Sitemap = () => {
  const extraLinks = [
    { label: "Privacy Policy", href: "/privacy-policy.html" },
    { label: "Terms & Conditions", href: "/terms.html" },
    { label: "Locations", href: "/locations.html" },
    { label: "Gallery", href: "/gallery.html" },
  ];

  return (
    <>
      <SEO
        title={`Sitemap | ${COMPANY.name}`}
        description="Browse all site pages and important links in our sitemap."
        keywords="sitemap, site map, navigation"
      />
      <Layout>
        <section className="section-padding">
          <div className="container max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sitemap</h1>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h2 className="font-semibold mb-3">Primary Navigation</h2>
                <ul className="space-y-2">
                  {NAV_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link to={`${l.href}.html`} className="text-accent hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-3">Additional Links</h2>
                <ul className="space-y-2">
                  {extraLinks.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="text-accent hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Sitemap;