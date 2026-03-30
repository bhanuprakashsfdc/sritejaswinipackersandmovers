import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found | Sri Tejaswini packers and movers"
        description="The page you are looking for could not be found. Return to our homepage for packers and movers services."
        noindex={true}
      />
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-slate-50 pt-16">
        <div className="text-center px-4">
          <div className="text-8xl font-heading font-bold text-gradient mb-4">404</div>
          <h1 className="text-2xl font-heading font-bold text-foreground mb-2">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
          <Link to="/index.html">
            <Button className="bg-gradient-brand text-primary-foreground rounded-xl font-semibold gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
