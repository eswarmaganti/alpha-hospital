import React from "react";
import ContactSection from "../Components/layout/contact/ContactSection";
import Footer from "../Components/layout/Footer";
import HomeSection from "../Components/layout/HomeSection";
import Layout from "../Components/Layout";
import AboutSection from "../Components/layout/AboutSection";
import ServicesSection from "../Components/layout/services/ServicesSection";
import TeamSection from "../Components/layout/team/TeamSection";
import TestimonialSection from "../Components/layout/testimonials/TestimonialSection";
import SideNavbar from "../Components/layout/SideNavbar";
const HomePage = () => {
  return (
    <Layout>
      <SideNavbar />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default HomePage;
