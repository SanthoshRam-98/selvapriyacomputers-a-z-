import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import OurWorks from "./OurWorks";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ContactPage from "./ContactSection";
function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <OurWorks />
      <WhyChooseUsSection />
      <ContactPage />
    </div>
  );
}

export default HomePage;
