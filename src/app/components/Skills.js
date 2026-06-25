"use client";
import React from "react";
import { Database, Monitor, Sparkles } from "lucide-react";

const skillsData = [
  {
    title: "Development TechStack",
    icon: <Monitor className="w-5 h-5 text-cyan-400" />,
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "Next.js",
      "PHP",
      "C",
      "Python",
      "JavaScript",
      "Typescript",
      "Java (Basic)",
    ],
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "border-cyan-500/30",
    hoverGlow: "hover:shadow-cyan-500/20",
    accent: "text-cyan-400",
    chipBg:
      "bg-cyan-500/10 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-400/40 text-cyan-100",
    dotColor: "bg-cyan-400",
  },
  {
    title: "Tools / Platforms",
    icon: (
      <svg
        className="w-5 h-5 text-amber-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      "Git GitHub / Bitbucket",
      "MySQL / PostgreSQL",
      "MongoDB / Firebase",
      "Prisma ORM",
      "Slack",
      "Docker",
      "Postman",
      "React Query",
      "TanStack Query",
      "Ollama",
      "BullMQ",
      "Socket.IO",
      "Zod",
      "Redis",
      "Upstash",
      "Apache Kafka(KafkaJS)",
      "Render, Vercel, Railway",
      "Kaggle",
      "Sentry.io",
    ],
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "border-amber-500/30",
    hoverGlow: "hover:shadow-amber-500/20",
    accent: "text-amber-400",
    chipBg:
      "bg-amber-500/10 border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-400/40 text-amber-100",
    dotColor: "bg-amber-400",
  },
  {
    title: "SYSTEM LEVEL Concept",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    skills: [
      "Auth Middleware",
      "Error Monitoring",
      "Data Auditing",
      "RBAC",
      "Logging",
      "Redis Cache",
      "Clean Architecture",
      "Scalable DB layer",
      "Ready for workers",
      "Custom logging system",
      "Audit logs",
      "API Rate Limiting",
      "Data Validation",
      "Process Queue System",
      "File Storage",
      "Hosting",
      "Real-time System",
    ],
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/30",
    hoverGlow: "hover:shadow-purple-500/20",
    accent: "text-purple-400",
    chipBg:
      "bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-400/40 text-purple-100",
    dotColor: "bg-purple-400",
  },
];

export default function Skills() {
  return (
    <section
      id="Skills"
      className="py-16 px-6 sm:px-10 lg:px-24 relative overflow-hidden "
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-amber-400/25 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className=" text-5xl md:text-6xl font-bold mb-4">
            <span className=" bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Skills & Expertise
            </span>
          </h2>

          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and core
            competencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl p-6 backdrop-blur-sm border ${category.borderColor} ${category.hoverGlow} bg-gradient-to-br ${category.color} hover:scale-[1.02] transition-all duration-500 ease-out shadow-xl`}
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-2xl transform rotate-45 translate-x-8 -translate-y-8 opacity-50 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 border border-white/20 ${category.accent}`}
                  >
                    {category.skills.length}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all duration-200 cursor-default ${category.chipBg}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${category.dotColor} opacity-70 shrink-0`}
                      ></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 backdrop-blur-sm">
            <span className="text-slate-300 font-medium text-sm">
              Continuously learning and expanding my skill set
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
