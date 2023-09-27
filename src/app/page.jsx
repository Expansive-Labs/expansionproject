"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectCard from "./components/ProjectCard";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
// GITHUB
// VERCEL PUSH

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <ParallaxProvider>
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </ParallaxProvider>
      </div>
      <Footer />
    </main>
  );
}
