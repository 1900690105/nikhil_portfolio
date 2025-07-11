"use client";
import React from "react";

const stats = [
  { label: "National photoss", value: 32 },
  { label: "Hackathons", value: 18 },
  { label: "Project Expos", value: 14 },
  { label: "Wins", value: 13 },
  { label: "States Represented", value: 3 },
  { label: "Cities Covered", value: 25 },
  { label: "Team Members", value: "45–50" },
  { label: "Organize photoss", value: "2" },
  { label: "Participation", value: "50" },
  { label: "Winners", value: "9" },
];

export default function TeamStats() {
  return (
    <section className=" py-20 px-6 sm:px-10 lg:px-24  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl sm:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
            Team GCOEY
          </h2>
          <p className="text-xl text-slate-300 font-light">In Numbers</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
              style={{
                animationDelay: `${idx * 100}ms`,
                animation: `fadeInUp 0.8s ease-out forwards ${idx * 100}ms`,
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-400/5 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-cyan-400 to-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.value}
                </div>
                <div className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                  {item.label}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-2xl rounded-tr-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
