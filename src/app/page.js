"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
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

// SEO Configuration - Personalized for Nikhil Kandhare
const seoConfig = {
  title: "Nikhil V Kandhare - Full Stack Developer & AI Integration",
  description:
    "completed BTech in Computer Engineering, student and aspiring Full Stack Developer specializing in React.js, Next.js, Firebase,programming languages and AI integration. 8× Hackathon Champion with expertise in building responsive, user-centric applications.",
  keywords:
    "Full Stack Developer, React Developer, Next.js, JavaScript, AI Integration, Firebase, Gemini AI, Web Development, Computer Engineering, Hackathon Winner, Portfolio, Frontend Developer, Backend Developer, Nikhil Kandhare,Nikhil,GCOEY",
  author: "Nikhil V Kandhare",
  url: "https://nikhilkandhare.vercel.app",
  image: "https://nikhilkandhare.vercel.app/hero3.jpg",
  twitterHandle: "@kandhare_n77808",
  linkedinProfile: "https://linkedin.com/in/nikhilkandhare", // Your LinkedIn
  githubProfile: "https://github.com/1900690105", // Your GitHub
  type: "website",
  locale: "en_US",
  siteName: "Nikhil Kandhare Portfolio",
};

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

  // Generate JSON-LD structured data for Nikhil Kandhare
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nikhil V Kandhare",
    jobTitle: "Full Stack Developer & AI Integration",
    description: seoConfig.description,
    url: seoConfig.url,
    image: seoConfig.image,
    email: "nikhilkandhare22@gmail.com",
    telephone: "+91 9112430021",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nanded",
      addressRegion: "Maharashtra",
      postalCode: "431604",
      addressCountry: "IN",
    },
    sameAs: [seoConfig.linkedinProfile, seoConfig.githubProfile, seoConfig.url],
    knowsAbout: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Firebase",
      "AI Integration",
      "API AI Integration",
      "Gemini AI",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Development",
      "Python",
      "PHP",
      "Tailwind CSS",
      "MongoDB",
      "MySQL",
      "C programming",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Nanded, Maharashtra, India",
      },
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Government College of Engineering Yavatmal",
    },
    award: [
      "8× Hackathon Champion",
      "5× Project Expo Winner",
      "Winner Hackathon – Codesphere, Hacksphere, Brahmax 1.0, Prabal,more",
      "Winner Expo – Technovation, Innovanza'25, Ennovate's25, Build Solo, more",
    ],
  };

  if (!isLoading) {
    return (
      <>
        <Head>
          {/* Primary Meta Tags */}
          <title>{seoConfig.title}</title>
          <meta name="title" content={seoConfig.title} />
          <meta name="description" content={seoConfig.description} />
          <meta name="keywords" content={seoConfig.keywords} />
          <meta name="author" content={seoConfig.author} />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />

          {/* Canonical URL */}
          <link rel="canonical" href={seoConfig.url} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content={seoConfig.type} />
          <meta property="og:url" content={seoConfig.url} />
          <meta property="og:title" content={seoConfig.title} />
          <meta property="og:description" content={seoConfig.description} />
          <meta property="og:image" content={seoConfig.image} />
          <meta
            property="og:image:alt"
            content={`${seoConfig.author} - Portfolio Preview`}
          />
          <meta property="og:site_name" content={seoConfig.siteName} />
          <meta property="og:locale" content={seoConfig.locale} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={seoConfig.url} />
          <meta property="twitter:title" content={seoConfig.title} />
          <meta
            property="twitter:description"
            content={seoConfig.description}
          />
          <meta property="twitter:image" content={seoConfig.image} />
          <meta property="twitter:creator" content={seoConfig.twitterHandle} />

          {/* Additional Meta Tags */}
          <meta name="theme-color" content="#1e293b" />
          <meta name="msapplication-TileColor" content="#1e293b" />
          <meta name="msapplication-navbutton-color" content="#1e293b" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />

          {/* Preconnect to external domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </Head>

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
    <>
      <Head>
        {/* Loading page meta tags */}
        <title>Loading... | Nikhil V Kandhare Portfolio</title>
        <meta
          name="description"
          content="Nikhil's portfolio is loading, please wait..."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

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
                style={{
                  animationDirection: "reverse",
                  animationDuration: "1s",
                }}
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
    </>
  );
};

export default Home;
