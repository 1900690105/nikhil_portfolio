"use client";
import React from "react";
import { Github, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 px-6 sm:px-10 lg:px-24 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {/* Left: Navigation */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="#home" className="hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-cyan-400">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-cyan-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-cyan-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Middle: Social */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-white mb-3">Follow Me</h4>
          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right: Location */}
        <div className="flex items-start justify-end text-sm text-right">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-pink-400" />
            <span className="text-gray-300">Nanded, MH, India</span>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-xs text-gray-500">
        © {new Date().getFullYear()} Nikhil Kandhare. All rights reserved.
      </p>
    </footer>
  );
}
