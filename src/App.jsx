import { useState } from "react";

import SiteNavbar from "./components/SiteNavbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <SiteNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
