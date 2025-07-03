"use client";
import React from "react";
import Image from "next/image";
import { Award, Trophy, Star } from "lucide-react";

const achievements = [
  {
    title: "IEEE SSGMCE Technovation Winner",
    description:
      "Won first place for developing an AI-powered career planner at SSGMCE's prestigious IEEE photos.",
    logo: "/photos/img10.jpg",
  },
  {
    title: "Project Expo Winner Yavatmal",
    description: "Won third place.",
    logo: "/photos/img20.jpg",
  },
  {
    title: "Project Expo Winner Nagpur",
    description:
      "Won first place for developing an AI-powered career planner at SSGMCE's prestigious IEEE photossssss.",
    logo: "/photos/img13.jpg",
  },
  {
    title: "National Hackathon Winner (Hacksphere)",
    description:
      "Secured top rank for building a smart mock interview system using AI at Hacksphere Hackathon.",
    logo: "/photos/img2.jpg",
  },
  {
    title: "National Hackathon Winner (Codesphere)",
    description:
      "Awarded for developing a real-time roadmap generator for students and professionals.",
    logo: "/photos/img5.jpg",
  },
  {
    title: "Project Expo Winner",
    description:
      "Recognized for best innovation in web-based healthcare solutions during final-year expo.",
    logo: "/photos/img6.jpg",
  },
];

export default function Achievements() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20 px-6 sm:px-10 lg:px-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500">
            Achievements
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Recognition and awards that showcase dedication to innovation and
            excellence in technology
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((award, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative flex items-start gap-6">
                {/* Award Icon/Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-2 group-hover:from-yellow-400/20 group-hover:to-orange-500/20 transition-all duration-500">
                    {award.logo ? (
                      <Image
                        src={award.logo}
                        alt={award.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Award className="w-10 h-10 text-yellow-400" />
                      </div>
                    )}

                    {/* Star decoration */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {award.description}
                  </p>

                  {/* Achievement badge */}
                  <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium">
                    <Trophy className="w-4 h-4" />
                    Winner
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400/30 rounded-tr-lg group-hover:border-yellow-400/60 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-lg font-medium">
              Excellence in Innovation
            </span>
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
}
