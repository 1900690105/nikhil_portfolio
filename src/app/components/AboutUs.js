"use client";
import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Laptop2,
  Sparkles,
  Code2,
  Brain,
  Zap,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export default function AboutMe() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [animatedText, setAnimatedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Tech Innovator",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const text = "Passionate about creating digital experiences that matter.";
    let index = 0;
    const timer = setInterval(() => {
      setAnimatedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative min-h-screen  ">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20 px-6 sm:px-10 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="mb-6">
              <h2 className=" text-5xl md:text-6xl font-bold mb-4">
                <span className=" bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  About Me
                </span>
              </h2>
              <div className="h-8 mb-4">
                <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500">
                  {roles[currentRole]}
                </p>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {animatedText}
                <span className="animate-ping text-cyan-400">|</span>
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Story */}
            <div className="space-y-8">
              <div className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Sparkles className="w-8 h-8 text-yellow-400 mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    About Me
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Full Stack Developer specializing in building scalable,
                    production-ready web applications using Next.js, React, and
                    modern backend architectures. Experienced in designing
                    secure authentication systems, optimizing performance, and
                    implementing real-time and distributed solutions using
                    technologies like PostgreSQL, Redis, and Kafka. Strong focus
                    on clean architecture, system reliability, and DevOps
                    practices. Proven ability to take projects from MVP to
                    production with high-quality standards.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <GraduationCap className="w-8 h-8 text-green-400 mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Education
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    I hold a{" "}
                    <strong className="text-green-400">
                      Bachelor&#39;s degree in Technology (BTech)
                    </strong>{" "}
                    and{" "}
                    <strong className="text-green-400">
                      Diploma in Computer science & Engineering
                    </strong>
                    , both of which laid the foundation for my problem-solving
                    mindset and technical expertise.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Brain className="w-8 h-8 text-blue-400 mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Beyond Code
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Apart from coding, I enjoy exploring new technologies,
                    learning about AI, and contributing to open-source projects.
                    I&#39;m always excited to collaborate on innovative ideas!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Highlights */}
            <div className="space-y-8">
              <div className="relative p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Code2 className="w-6 h-6 mr-3 text-purple-400" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      10+
                    </div>
                    <div className="text-gray-300 text-sm">Technologies</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      ∞
                    </div>
                    <div className="text-gray-300 text-sm">Learning</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                      AI
                    </div>
                    <div className="text-gray-300 text-sm">Powered</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-2xl">
                    <div className="text-3xl font-bold text-pink-400 mb-2">
                      24/7
                    </div>
                    <div className="text-gray-300 text-sm">Innovation</div>
                  </div>
                </div>
              </div>

              <div className="relative p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-cyan-400" />
                  Core Values
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: "⚡", text: "Ownership & Accountability" },
                    { icon: "💼", text: "Management" },
                    { icon: "🚀", text: "Innovation First" },
                    { icon: "🎯", text: "Quality Focused" },
                    { icon: "🤝", text: "Collaboration" },
                    { icon: "📚", text: "Continuous Learning" },
                    { icon: "⏱️", text: "Discipline & Time Management" },
                    { icon: "🧩", text: "Problem Solving" },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-200"
                    >
                      <span className="text-2xl mr-4">{value.icon}</span>
                      <span className="text-gray-200 font-medium">
                        {value.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
