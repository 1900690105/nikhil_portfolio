"use client";
import React from "react";

export default function VideoSection() {
  return (
    <section className=" py-16 px-6 sm:px-10 lg:px-24 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          Here&#39;s Our Journy
        </h2>

        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <video controls className="w-full rounded-xl shadow-lg">
            <source src="/photos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
