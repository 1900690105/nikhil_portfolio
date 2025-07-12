"use client";
import React, { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  {
    src: "/img1.jpg",
    title: "C-Rush 1.0",
    description: "Our First Event C-Rush 1.0 organize by GCOEY Team",
  },
  {
    src: "/img2.jpg",
    title: "1st at Hackathon",
    description: "Our 1st Price at JGCOE,Jalgoan hackathon",
  },
  {
    src: "/img3.jpg",
    title: "Prabal kolhapur",
    description:
      "We got 'BEST USE OF AI' award at Prabal event at SGU kolhapur",
  },
  {
    src: "/img4.jpg",
    title: "Pragati Mumbai",
    description: "We Got 2nd Runner up at pragati event Mumbai",
  },
  {
    src: "/img5.jpg",
    title: "Hackathon at Nagpur",
    description: "We got 1st price in Hackathon at RBU nagpur",
  },
  {
    src: "/img7.jpg",
    title: "Startup Expo at SSGMCE",
    description: "We got 1st Price in Build Solo at SSGMCE shegoan",
  },
  {
    src: "/img8.jpg",
    title: "AGPT hackathon solapur",
    description: "We got good Connection at Solapur",
  },
  {
    src: "/img11.jpg",
    title: "Participated in Project Expo",
    description: "Best project expo i had ever at Shegoan",
  },
  {
    src: "/img6.jpg",
    title: "Project Expo at RBU",
    description: "We got 1st Runner Up atRBU Nagpur",
  },
  {
    src: "/img12.jpg",
    title: "Best Experince at MGM",
    description: "We had best experince of hackathon at MGM Nanded",
  },
  {
    src: "/img13.jpg",
    title: "Innovanza'25 Project Expo",
    description: "We Got 3rd Price at RBU nagpur",
  },
  {
    src: "/img15.jpg",
    title: "Brahmax 1.0 hackathon at MP",
    description: "We got 1st RunnerUp at brahmax 1.0 Jabalpur MP",
  },
  {
    src: "/img16.jpg",
    title: "Participated in Advay Hackathon",
    description: "Participated in hackathon at Bangaluru Karanataka",
  },
  {
    src: "/img17.jpg",
    title: "Participated in gitanjali college Hackathon",
    description: "Participated in hackathon at Gitanjali Hydrabad",
  },
  {
    src: "/img18.jpg",
    title: "project expo at GCOEChh.Sambhaji Nager",
    description: "Participated in project expo at GCOEChh.Sambhaji Nager",
  },

  {
    src: "/img20.jpg",
    title: "My First Price of Life",
    description: "Our Jounry Start's Here at YAvatmal where we got consolation",
  },
  {
    src: "/img21.png",
    title: "C-Rush 2.0 Event",
    description:
      "Our Event C-Rush 2.0 organize by GCOEY Team with 50 participation",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (img, index) => {
    setSelectedImage(img);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  const navigateImage = (direction) => {
    if (selectedIndex === null) return;

    let newIndex;
    if (direction === "next") {
      newIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    } else {
      newIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    }

    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20 px-6 sm:px-10 lg:px-24  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
            Gallery
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto">
            Explore our stunning collection of moments captured in time
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm bg-white/5 border border-white/10 break-inside-avoid mb-6"
              onClick={() => openLightbox(img, index)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={`/photos${img.src}`}
                  height={500}
                  width={700}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-white text-sm font-semibold mb-1">
                          {img.title}
                        </h3>
                        <p className="text-slate-300 text-xs">
                          {img.description}
                        </p>
                      </div>
                      <ZoomIn className="w-5 h-5 text-white ml-2" />
                    </div>
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              </div>

              {/* Caption always visible at bottom */}
              <div className="p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-sm font-semibold mb-1">
                  {img.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {img.description}
                </p>
              </div>

              {/* Glass morphism effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center px-4"
            onClick={closeLightbox}
          >
            {/* Enhanced Close button */}

            {/* Additional close button in top-left */}
            <button
              className="absolute top-6 left-6 z-60 text-white hover:text-red-400 transition-all duration-300 bg-black/70 hover:bg-red-500/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20 hover:border-red-400/50 text-sm font-medium"
              onClick={closeLightbox}
            >
              Close
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 z-60 text-white hover:text-cyan-400 transition-colors duration-300 bg-black/50 rounded-full p-3 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 z-60 text-white hover:text-cyan-400 transition-colors duration-300 bg-black/50 rounded-full p-3 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image container */}
            <div
              className="relative max-w-6xl max-h-[90vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/photos${selectedImage.src}`}
                height={500}
                width={700}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />

              {/* Enhanced Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-xl">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-slate-300 text-lg mb-3">
                    {selectedImage.description}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {selectedIndex + 1} of {images.length}
                  </p>
                </div>
              </div>
            </div>

            {/* ESC key hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
              Press ESC or click outside to close
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
