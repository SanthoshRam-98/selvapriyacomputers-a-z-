import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import OurWorks from "./OurWorks";
import WhyChooseUsSection from "./WhyChooseUsSection";
import ContactPage from "./ContactSection";
import BannerQuote from "./BannerQuote";
import BoxContainer from "./BoxContainer";
function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <OurWorks />
      <BannerQuote />
      <WhyChooseUsSection />
      <BoxContainer />
      <ContactPage />
    </div>
  );
}

export default HomePage;
