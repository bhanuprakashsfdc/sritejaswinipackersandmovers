import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { COMPANY } from "@/constants/constants";

const PrivacyPolicy = () => {
  return (
    <HelmetProvider>
      <SEO
        title={`Privacy Policy | ${COMPANY.name}`}
        description="Read our privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information"
      />
      <Layout>
        <section className="section-padding">
          <div className="container max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">
              Your privacy is important to us. This policy explains what data we collect,
              how we use it, and your rights.
            </p>
            <div className="space-y-4 text-foreground">
              <p>
                We collect contact information to provide quotes and services. We do not sell
                your data. You can request deletion of your data at any time by contacting us.
              </p>
              <p>
                We use standard analytics to improve our services. By using our website, you
                consent to our privacy practices described here.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </HelmetProvider>
  );
};

export default PrivacyPolicy;