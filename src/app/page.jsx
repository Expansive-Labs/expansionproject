"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import BackToTopButton from "./components/BackToTopButton";
import MerchCarousel from "./components/MerchCarousel";
import { ParallaxProvider } from "react-scroll-parallax";
import { getCounter } from "./services/counter.service";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] dark:bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 dark:text-[#f6f3ed]">
        <ParallaxProvider>
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <MerchCarousel />
          <EmailSection />
        </ParallaxProvider>
      </div>
      <Footer/>
      <BackToTopButton />
    </main>
  );
}
