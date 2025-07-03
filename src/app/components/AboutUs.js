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

  const techStack = [
    { name: "HTML5", color: "from-orange-400 to-red-500", level: 95 },
    { name: "CSS3", color: "from-blue-400 to-blue-600", level: 90 },
    { name: "JavaScript", color: "from-yellow-400 to-orange-500", level: 88 },
    { name: "React", color: "from-cyan-400 to-blue-500", level: 85 },
    { name: "Next.js", color: "from-gray-400 to-gray-600", level: 80 },
    { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500", level: 92 },
    { name: "Firebase", color: "from-yellow-400 to-orange-600", level: 75 },
    { name: "Node.js", color: "from-green-400 to-green-600", level: 78 },
    { name: "Python", color: "from-blue-400 to-yellow-500", level: 82 },
    { name: "AI APIs", color: "from-purple-400 to-pink-500", level: 70 },
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-20 px-6 sm:px-10 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="mb-6">
              <h2 className="text-6xl md:text-7xl font-black mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  About
                </span>
                <span className="text-white ml-4">Me</span>
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
                    My Journey
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    I&#39;m a passionate Full Stack Developer with a strong
                    focus on building scalable web applications and AI-powered
                    solutions. I love transforming complex ideas into elegant,
                    efficient systems that make real-world impact.
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
                    and a{" "}
                    <strong className="text-green-400">
                      Diploma in Engineering
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
                    { icon: "🚀", text: "Innovation First" },
                    { icon: "🎯", text: "Quality Focused" },
                    { icon: "🤝", text: "Collaboration" },
                    { icon: "📚", text: "Continuous Learning" },
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

          {/* Tech Stack Section */}
          <div className="relative">
            <h3 className="text-4xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Tech Stack
              </span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group relative"
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
                    {/* Animated background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <div className="text-lg font-semibold text-white mb-2">
                        {tech.name}
                      </div>

                      {/* Skill level bar */}
                      <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                          style={{
                            width:
                              hoveredTech === index ? `${tech.level}%` : "0%",
                            transitionDelay: `${index * 100}ms`,
                          }}
                        ></div>
                      </div>

                      {hoveredTech === index && (
                        <div className="text-sm text-gray-300 animate-fade-in">
                          {tech.level}% proficiency
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group">
              <span>Let&#39;s Build Something Amazing</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
