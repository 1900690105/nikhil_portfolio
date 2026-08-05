"use client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "PharmacogenomicAI-Genetic Drug Analysis",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "AI API"],
    description:
      "PharmacogenomicAI provides pre-prescription genomic drug validation.Upload patient genomic data → AI predicts drug response → Doctor chooses safest therapy.By combining CPIC pharmacogenomic guidelines with LLM medical reasoning, our system gives clinicians actionable, evidence-backed guidance before the first prescription is written.",
    github: "https://github.com/1900690105/RIFTGCOEY",
    live: "https://riftgcoey.vercel.app/",
  },

  {
    title: "PeriodCare – AI-Powered Menstrual Health Companion",
    techStack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Gemini AI API",
      "Ollama (Local LLM)",
      "FastAPI (Optional Backend)",
    ],
    description:
      "An AI-driven menstrual health platform offering multi-language education, symptom guidance, personalized recommendations, myth-busting, partner mode support, and more to improve menstrual awareness and comfort.",
    github: "https://github.com/1900690105/periodcare",
    live: "https://periodcareforyou.vercel.app/",
  },

  {
    title: "Together, We Can Stop Food Waste",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Map API", "Firebase"],
    description:
      "Our platform aims to eliminate food wastage by bridging the gap between those who have surplus food and those in need — using technology for a better tomorrow.",
    github: "https://github.com/1900690105/ZeroWasteBite",
    live: "https://zerowastebite.vercel.app/",
  },

  {
    title: "Avsarmarg - Your Journey from Campus to Company Starts Here",
    techStack: [
      "React.js",
      "Next.js",
      "Firebase",
      "Gemini",
      "Tailwind CSS",
      "github",
      "Vercel+CI/CD",
      "monaco-editor",
      "Judge0 API",
      "cheerio",
      "Job Listing Fetch  API",
    ],
    description:
      "Personalized career paths, skills development,interview preparation and job opportunities tailored for students.",
    github: "#",
    live: "https://avsarmarg.com",
  },
  {
    title: "File Xerox - Upload->Print->Pickup",
    techStack: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Vercel+CI/CD",
      "Cloudinary",
    ],
    description: `Revolutionary cloud printing that connects you to thousands of Xerox centers. No USB drives. No waiting.`,
    github: "https://github.com/1900690105/filexerox",
    live: "https://filexerox.vercel.app/",
  },
  {
    title: "BodhaBot - One Chatbot,Infinite Possibilities",
    techStack: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Gemini AI API",
      "Vercel+CI/CD",
    ],
    description:
      "Integrate intelligent conversations into your website by simply sharing your URL, JSON data, or PDF documents. Let AI handle the rest.",
    github: "#",
    live: "https://bodhabot.vercel.app/",
  },

  {
    title: "Easy-mailer",
    techStack: ["nodejs", "javascript", "api", "npm-package"],
    description:
      "A simple and powerful email SDK for Node.js with bulk sending, templates, and multi-provider support.",
    github: "https://github.com/1900690105/send_mail_package",
    live: "https://www.npmjs.com/package/@graminpoly123/easy-mailer",
  },
  {
    title: "Cardamom House - Premium Café Menu & Reservation Platform",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "EmailJS",
      "Motion",
    ],
    description:
      "A modern, responsive café website featuring an interactive digital menu, dietary filters, live search, table reservation with email confirmation, order token generation, dark mode, smooth animations, and an accessibility-focused user experience.",
    github: "https://github.com/1900690105/frontend_rial_task",
    live: "https://cardamomhouse.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className=" text-5xl text-center md:text-6xl font-bold mb-4">
          <span className=" bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Current Top Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                <strong className="text-gray-300">Tech Stack:</strong>{" "}
                {project.techStack.join(", ")}
              </p>
              <p className="mb-4 text-base text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-4 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700/70 text-white text-sm rounded-full hover:bg-gray-600 transition-all duration-200 hover:scale-105"
                  >
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white text-sm rounded-full hover:from-cyan-500 hover:to-cyan-400 transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
