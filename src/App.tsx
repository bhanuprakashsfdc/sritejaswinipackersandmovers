import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
import Disclaimer from "./pages/Disclaimer";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* HTML-suffixed primary routes */}
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<Index />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/services.html" element={<Services />} />
          <Route path="/services/:slug.html" element={<ServiceDetail />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/locations.html" element={<Locations />} />
          <Route path="/gallery.html" element={<Gallery />} />

          {/* Legal */}
          <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
          <Route path="/terms.html" element={<Terms />} />
          <Route path="/sitemap.html" element={<Sitemap />} />
          <Route path="/disclaimer.html" element={<Disclaimer />} />

          {/* Dynamic Location Pages (.html variants) */}
          <Route path="/packers-and-movers-in-:city.html" element={<LocationDetail />} />
          <Route path="/packers-and-movers-:city.html" element={<LocationDetail />} />
          <Route path="/packers-and-movers-nearme-:city.html" element={<LocationDetail />} />
          <Route path="/best-packers-and-movers-in-:city.html" element={<LocationDetail />} />
          <Route path="/best-packers-and-movers-:city.html" element={<LocationDetail />} />
          <Route path="/local-packers-and-movers-:city.html" element={<LocationDetail />} />
          <Route path="/local-packers-and-movers-in-:city.html" element={<LocationDetail />} />
          <Route path="/professional-packers-and-movers-:city.html" element={<LocationDetail />} />
          <Route path="/professional-packers-and-movers-in-:city.html" element={<LocationDetail />} />
          <Route path="/packers-and-movers-nearme-in-:city.html" element={<LocationDetail />} />

          <Route path="/city/:city.html" element={<LocationDetail />} />
          <Route path="/:slug.html" element={<LocationDetail />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;