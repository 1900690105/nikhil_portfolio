"use client";
import React from "react";
import {
  Code,
  Database,
  Monitor,
  MessageCircle,
  Tool,
  Sparkles,
  ToolCase,
} from "lucide-react";

export default function Skills() {
  const skillsData = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8 text-emerald-400" />,
      skills: ["C", "Python", "JavaScript", "PHP", "Java (Basic)"],
      color: "from-emerald-500/20 to-emerald-600/5",
      borderColor: "border-emerald-500/30",
      hoverGlow: "hover:shadow-emerald-500/20",
    },
    {
      title: "Frontend",
      icon: <Monitor className="w-8 h-8 text-cyan-400" />,
      skills: ["HTML5", "CSS3", "React.js", "Next.js"],
      color: "from-cyan-500/20 to-cyan-600/5",
      borderColor: "border-cyan-500/30",
      hoverGlow: "hover:shadow-cyan-500/20",
    },
    {
      title: "Backend / Database",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      skills: ["Firebase", "PHP", "MySQL", "MongoDB"],
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "border-purple-500/30",
      hoverGlow: "hover:shadow-purple-500/20",
    },
    {
      title: "Tools",
      icon: <ToolCase className="w-8 h-8 text-amber-400" />,
      skills: ["Git", "VS Code", "Firebase Console"],
      color: "from-amber-500/20 to-amber-600/5",
      borderColor: "border-amber-500/30",
      hoverGlow: "hover:shadow-amber-500/20",
    },
    {
      title: "Soft Skills",
      icon: <MessageCircle className="w-8 h-8 text-rose-400" />,
      skills: ["Communication (English, Marathi, Hindi)"],
      color: "from-rose-500/20 to-rose-600/5",
      borderColor: "border-rose-500/30",
      hoverGlow: "hover:shadow-rose-500/20",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20 px-6 sm:px-10 lg:px-24 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-amber-400/25 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-violet-400 mr-3 animate-pulse" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <Sparkles className="w-8 h-8 text-violet-400 ml-3 animate-pulse" />
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and core
            competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl p-8 backdrop-blur-sm border ${category.borderColor} ${category.hoverGlow} bg-gradient-to-br ${category.color} hover:scale-105 transition-all duration-500 ease-out shadow-xl`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    {category.icon}
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/skill"
                    >
                      <div className="w-2 h-2 rounded-full bg-current opacity-60 mr-3 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-slate-200 font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-2xl transform rotate-45 translate-x-10 -translate-y-10 opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 backdrop-blur-sm">
            <span className="text-slate-300 font-medium">
              Continuously learning and expanding my skill set
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
