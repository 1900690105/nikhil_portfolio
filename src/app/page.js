"use client";
import { useEffect, useState } from "react";
import AboutMe from "./components/AboutUs";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import CompanyChatbot from "./components/ChatBotSmall";
import Contact from "./components/ContactSection";
import Gallery from "./components/Gallery";
import HeroSection from "./components/Hero";
import TeamLeaderSection from "./components/Leader";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TeamStats from "./components/State";
import VideoSection from "./components/VideoSection";
import GoToTop from "./components/GoTo";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) {
    return (
      <>
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
          <CompanyChatbot messages={messages} setMessages={setMessages} />
          <GoToTop />
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
        </div>
      </>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto relative">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-spin"></div>

            {/* Inner rotating elements */}
            <div
              className="absolute inset-2 border-2 border-t-purple-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "1s" }}
            ></div>

            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>

            {/* Orbiting dots */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "3s" }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Loading text with typewriter effect */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            <span className="inline-block animate-pulse">
              Loading Portfolio
            </span>
            <span className="inline-block animate-bounce ml-1">.</span>
            <span
              className="inline-block animate-bounce ml-1"
              style={{ animationDelay: "0.1s" }}
            >
              .
            </span>
            <span
              className="inline-block animate-bounce ml-1"
              style={{ animationDelay: "0.2s" }}
            >
              .
            </span>
          </h2>
          <p className="text-gray-300 text-sm">
            Preparing something awesome for you
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Loading assets</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: "2s",
              }}
            ></div>
          ))}
        </div>

        {/* Status messages */}
        <div className="text-xs text-gray-400 mt-4">
          {progress < 25 && "Initializing components..."}
          {progress >= 25 && progress < 50 && "Loading projects..."}
          {progress >= 50 && progress < 75 && "Preparing animations..."}
          {progress >= 75 && progress < 100 && "Almost ready..."}
          {progress >= 100 && "Complete!"}
        </div>
      </div>
    </div>
  );
};

export default Home;
