import React from "react";
import { PageLayout } from "../components/PageLayout";
import { HeroSection } from "../components/HeroSections/ServiceDetailHeroSection";
import Critcial from "../components/Critcial";
import Technical from "../components/Techincal";
import RecentProject from "../components/RecentProject";
import Team from "../components/Team";
import TestimonialsSection from "../components/TestiomonialsSection";
import TestimonialsCards from "../components/Testimonials";
import CTASection from "../components/CTA";
import IndustriesWeServe from "../components/IndustryServe";
import Footer from "../components/Footer";

export const ServiceDetail = () => {
  return (
    <PageLayout 
      heroContent={<HeroSection />}
      vectorBackground={'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98decdfb-8ad8-466f-b804-43d1f594c41b'}
    >
      <Critcial />
      <Technical />
      <RecentProject />
      <Team />
      <TestimonialsSection />
      <TestimonialsCards />
      <CTASection />
      <IndustriesWeServe />
      <Footer />
     </PageLayout>
  );
};
