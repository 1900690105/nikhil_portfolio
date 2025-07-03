"use client";
import React from "react";
import { FileText, Mail, Github, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base md:text-lg text-cyan-400 mb-2 font-medium tracking-wide">
                  Hi, I&#39;m
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse">
                    Nikhil Kandhare
                  </span>
                </h1>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 font-light leading-relaxed">
                Full Stack Developer passionate about building{" "}
                <span className="text-cyan-400 font-medium">AI-powered</span>{" "}
                web solutions.
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I develop scalable, intelligent applications using{" "}
                <span className="text-purple-400 font-medium">Next.js</span>,{" "}
                <span className="text-orange-400 font-medium">Firebase</span>,{" "}
                <span className="text-green-400 font-medium">Python</span>, and{" "}
                <span className="text-pink-400 font-medium">AI tools</span> —
                blending front-end precision with back-end logic.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="/Nikhil_Kandhare_WE9112430021.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-sm sm:text-base"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                  View Resume
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 text-purple-400 font-medium rounded-full hover:bg-purple-400 hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:bounce transition-transform" />
                  Contact Me
                </a>

                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-500 text-gray-300 font-medium rounded-full hover:bg-gray-700 hover:border-gray-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-slate-950"></div>
                </div>

                {/* Main Image Container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 p-1 hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    {/* Placeholder for image - replace with your actual image */}
                    {/* <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
                        NK
                      </div>
                    </div> */}
                    {/* Uncomment and use when you have the image */}
                    <Image
                      src="/hero3.jpg"
                      height={500}
                      width={700}
                      alt="Nikhil Kandhare"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center animate-bounce">
              <span className="text-xs text-gray-400 mb-2">Scroll Down</span>
              <ArrowDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
