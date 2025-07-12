"use client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "All In One Code Editor",
    techStack: ["Next.js", "Tailwind CSS", "monaco-editor", "Judge0 API"],
    description: `🚀 Just launched my own Online Code Editor — built with ❤️ using Next.js App Router, Monaco Editor, and Judge0 API!
✨ Features:
✅ Live code editing with Monaco
✅ Input support for stdin
✅ 50+ language support (auto-loaded)
✅ Syntax highlighting for top languages
✅ Backend-protected API key integration
✅ Fully responsive UI with Tailwind CSS
💡 Ideal for interview preparation & learning — because A degree ≠ a job.
👉 Check it out [nikhilkandhare.vercel.app]
💬 Drop your thoughts or suggestions!`,
    github: "https://github.com/1900690105/Code_Editor",
    live: "https://avsarmarg.vercel.app/learn/codeeditor",
  },
  {
    title: "ChatBot That intergrete with any website",
    techStack: ["Next.js", "Tailwind CSS", "Gemini AI API", "cheerio"],
    description:
      "An Lets AI answer the question asked by user,here is the platform that handle user interaction of your platform it answer the question using your website data with the help of gemini AI API.This page also contain this chatbot",
    github: "https://github.com/1900690105/chatbot",
    live: "/",
  },
  {
    title: "Modern College Website Using AI",
    techStack: ["Next.js", "Tailwind CSS", "OpenAI API"],
    description:
      "🎓 An interactive and responsive college website powered by AI — featuring smart chatbots for instant guidance, AI-generated content, and seamless navigation to help students explore their academic journey with ease.",
    github: "https://github.com/1900690105/GROUP_G1",
  },
  {
    title: "AI Resume Builder",
    techStack: ["React", "Node.js", "OpenAI", "Tailwind"],
    description:
      "An AI-powered platform that helps users generate professional resumes with content suggestions, formatting, and export to PDF.",
    github: "#",
    live: "https://avsarmarg.vercel.app/profiling/resume",
  },
  {
    title: "Mock Interview Website with AI",
    techStack: ["Next.js", "Firebase", "OpenAI", "Tailwind CSS"],
    description:
      "A tool that simulates technical interviews using AI, provides instant feedback, and highlights strengths and areas of improvement.",
    github: "#",
    live: "https://avsarmarg.vercel.app/technical/mockinterview",
  },
  {
    title: "AI Roadmap Generator",
    techStack: ["React", "OpenAI", "Tailwind"],
    description:
      "Generates personalized learning roadmaps for different tech roles using AI by understanding user goals and experience levels.",
    github: "#",
    live: "https://avsarmarg.vercel.app/careerplanning/DepartmentJobRoles",
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
          Current Top Projects
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
