"use client";
import AboutMe from "./components/AboutUs";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import PortfolioHeader from "./components/Header";
import HeroSection from "./components/Hero";
import TeamLeaderSection from "./components/Leader";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TeamStats from "./components/State";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <div>
      <PortfolioHeader />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Achievements />
      <TeamLeaderSection />
      <TeamStats />
      <Certifications />
      <Gallery />
      <VideoSection />
      <Contact />
      <Footer />
    </div>
  );
}
