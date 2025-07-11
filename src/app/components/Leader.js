"use client";
import React from "react";
import Image from "next/image";
import { Trophy, Users, Star, Zap, Target, Award } from "lucide-react";

export default function TeamLeaderSection() {
  return (
    <section
      id="team"
      className=" py-20 px-6 sm:px-10 lg:px-24 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-cyan-500/30 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-cyan-300">
              Leadership Excellence
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-tight">
            Leading Team GCOEY
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Spearheading innovation and excellence in competitive programming at
            Government College of Engineering, Yavatmal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-8 rounded-2xl border border-slate-600/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Team Leadership
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I proudly lead{" "}
                <span className="text-cyan-400 font-semibold">Team GCOEY</span>{" "}
                — the premier competitive programming team representing{" "}
                <span className="text-purple-400 font-semibold">
                  Government College of Engineering, Yavatmal
                </span>
                . Our mission is to cultivate algorithmic thinking and foster
                innovation through collaborative problem-solving.
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-xl border border-cyan-500/20">
                <Target className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">
                  Technical Excellence
                </h4>
                <p className="text-gray-300 text-sm">
                  Algorithmic problem solving, advanced data structures, and
                  optimization techniques
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-xl border border-purple-500/20">
                <Zap className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">
                  Innovation Hub
                </h4>
                <p className="text-gray-300 text-sm">
                  Hackathons, Ideathons, and cutting-edge project development
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/20 p-8 rounded-2xl border border-slate-600/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                Our Achievements
              </h4>
              <p className="text-gray-300 mb-4">
                Under my leadership, Team GCOEY consistently excels at
                prestigious contests and hackathons across India, establishing
                ourselves as a formidable force in the competitive programming
                landscape.
              </p>
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border-l-4 border-cyan-400">
                <p className="text-gray-300">
                  Our flagship photos,{" "}
                  <span className="text-cyan-400 font-semibold">
                    C-Rush 1.0 & 2.0
                  </span>
                  , has become a cornerstone for nurturing young talent and
                  building a thriving culture of competitive programming on
                  campus.
                </p>
              </div>
            </div>

            {/* Stats/Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                <Trophy className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-medium">
                  National Hackathons
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30">
                <Trophy className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 font-medium">
                  Project Expos
                </span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-pink-600/20 to-pink-500/10 px-4 py-2 rounded-full border border-pink-500/30">
                <Users className="w-4 h-4 text-pink-400" />
                <span className="text-pink-300 font-medium">
                  Team Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 p-4 rounded-2xl shadow-2xl">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/photos/gcoey.jpg"
                  alt="Team GCOEY - Leading innovation in competitive programming"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Floating achievement badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-2xl shadow-xl border-4 border-slate-900">
                <div className="text-center">
                  <Trophy className="w-8 h-8 text-white mx-auto" />
                  <p className="text-white font-bold text-sm mt-1">
                    Excellence
                  </p>
                  <p className="text-yellow-100 text-xs">Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA or additional info */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <span className="text-sm">
              Building the future of competitive programming
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
