import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import BackToTopButton from "./components/BackToTopButton";
import MerchCarousel from "./components/MerchCarousel";
import ClientParallaxProvider from "./components/ClientParallaxProvider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] dark:bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 sm:px-6 lg:px-12 py-4 dark:text-[#f6f3ed]">
        <ClientParallaxProvider>
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <MerchCarousel />
          <EmailSection />
        </ClientParallaxProvider>
      </div>
      <Footer/>
      <BackToTopButton />
    </main>
  );
}
