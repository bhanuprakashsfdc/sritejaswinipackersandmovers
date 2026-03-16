import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Map from "../Map"; // Import the Map component
import FloatingCTA from "./FloatingCTA";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Map /> {/* Render the Map component here */}
      <Footer />
      <FloatingCTA />
    </div>
  );
};