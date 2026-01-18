import React from "react";
import { PageLayout } from "../components/PageLayout";
import { HeroSection } from "../components/HeroSections/ContactHeroSection";
import ContactSection from "../components/contact";
import Footer from "../components/Footer";
export const Contact = () => {
  return (
    <PageLayout 
      heroContent={<HeroSection />}
      vectorBackground={'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60a4b76c-e384-4157-b60f-30a1b9b1c15c'}
    >
      <ContactSection />
      <Footer />
    </PageLayout>
  );
};
