"use client";
import React, { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
  "/img13.jpg",
  "/img15.jpg",
  "/img16.jpg",
  "/img17.jpg",
  "/img18.jpg",
  "/img19.jpg",
  "/img20.jpg",
  "/img21.jpg",
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
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen py-20 px-6 sm:px-10 lg:px-24 text-white relative overflow-hidden">
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
                  src={`/photos${img}`}
                  height={500}
                  width={700}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">
                        Image {index + 1}
                      </span>
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              </div>

              {/* Glass morphism effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center px-4">
            {/* Close button */}
            <button
              className="absolute top-6 right-6 z-60 text-white hover:text-red-400 transition-colors duration-300 bg-black/50 rounded-full p-2 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 z-60 text-white hover:text-cyan-400 transition-colors duration-300 bg-black/50 rounded-full p-3 backdrop-blur-sm"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 z-60 text-white hover:text-cyan-400 transition-colors duration-300 bg-black/50 rounded-full p-3 backdrop-blur-sm"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image container */}
            <div className="relative max-w-6xl max-h-[90vh] mx-auto">
              <Image
                src={`/photos${selectedImage}`}
                width={700}
                height={500}
                alt={`Enlarged Image ${selectedIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Image {selectedIndex + 1}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {selectedIndex + 1} of {images.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Keyboard shortcuts hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
              Use ← → keys or click arrows to navigate
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
