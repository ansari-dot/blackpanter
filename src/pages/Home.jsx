import React from "react";
import { PageLayout } from "../components/PageLayout";
import { HeroSection } from "../components/HeroSections/HomeHeroSection";
import ServicesSection from "../components/ServicesSection";
import IndustrySection from "../components/IndustrySection";
import RecentProjects from "../components/RecentProject";
import Team from '../components/Team'
import TestimonialsSection from "../components/Testimonials";
import CTASection from "../components/CTA";
import IndustryServe from '../components/IndustryServe'
import Footer from '../components/Footer'
export const Home = () => {
  const backgroundImage = 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f05c1e09-2c82-423e-b5c8-a5deeca8b89a';

  return (
    <PageLayout 
      heroContent={<HeroSection />}
      vectorBackground={backgroundImage}
      heroHeight="h-[150vh]"
    >
      <IndustrySection />
       <ServicesSection />
       <RecentProjects />
       <Team />
       <TestimonialsSection />
       <CTASection />
       <IndustryServe />
       <Footer />
    </PageLayout>
  );
};
