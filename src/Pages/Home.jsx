import React from "react";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import ServiceSection from "../Components/ServicesSection";
import ProjectSection from "../Components/ProjectSection";
import ProductSection from "../Components/ProductSection";
import TeamSection from "../Components/TeamSection";
import TraningSection from "../Components/TrainingSection";
import ContactSection from "../Components/ContactSection";
import FooterTopSection from "../Components/FooterTopSection";
import TestimonialSection from "../Components/TestimonialSection";
import PriceTableSection from "../Components/PriceTableSection";


export default function Home() {
  return (
    <div>
    <HeroSection /> 
    <AboutSection />
    <ServiceSection />
    <ProjectSection />
    <ProductSection />
    <TeamSection />
    <TraningSection />
    <ContactSection />
    <TestimonialSection />
    <PriceTableSection />
    <FooterTopSection />
    
    
    </div>
  );
}