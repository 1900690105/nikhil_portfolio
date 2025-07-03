"use client";
import React from "react";
import { BadgeCheck, Award, Calendar, Building2 } from "lucide-react";

const certifications = [
  {
    title: "AWS Services Training",
    date: "July 2021",
    issuer: "Amazon Web Services (AWS)",
  },
  // Add more certifications below if needed
];

export default function Certifications() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 sm:px-10 lg:px-24 text-gray-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-400/20">
              <Award className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
              Certifications
            </h2>
          </div>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            Professional credentials and achievements that validate expertise
            and commitment to excellence
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: `slideInLeft 0.8s ease-out forwards ${
                  index * 200
                }ms`,
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-blue-400/5 to-cyan-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Content */}
              <div className="relative z-10 flex items-start gap-6">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-400/30 group-hover:scale-110 transition-transform duration-300">
                      <BadgeCheck className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-2xl bg-green-400/20 animate-ping opacity-0 group-hover:opacity-75"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300 mb-3 group-hover:from-green-200 group-hover:to-cyan-200 transition-all duration-300">
                    {cert.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span className="font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                        {cert.issuer}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="font-medium text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400/10 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-tr-3xl rounded-bl-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/20 rounded-full text-green-300 font-medium">
            <Award className="w-5 h-5" />
            <span>More certifications coming soon</span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 w-full max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
