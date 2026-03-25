"use client";
import React from "react";
import Image from "next/image";
import { Award, Trophy, Star } from "lucide-react";

const achievements = [
  {
    title: "IEEE SSGMCE Technovation Winner",
    description:
      "Secured First Prize at Technovation Project Expo, a prestigious project competition organized by IEEE SB SSGMCE, Shegaon!",
    logo: "/photos/w1.png",
  },
  {
    title: "We are the HackSphere 2.0 Champions! 🏆🏅",
    description:
      "A huge shoutout to The CodeBreakers RCOEM for organizing an amazing experience filled with innovation, collaboration, and top-tier management",
    logo: "/photos/img5.jpg",
  },
  {
    title:
      "🚀 Innovating for Success – Proud 3rd Place Winners at Pragati 2025! 🏆🎯",
    description:
      "I clinched 3rd place 🥉 at the Pragati - National Level Business Plan Competition, hosted by St. Francis Institute Of Technology (SFIT), Mumbai! 🎉",
    logo: "/photos/w4.png",
  },
  {
    title: "UNNATI 2K25 at Priyadarshini College of Engineering",
    description:
      "Won consolation price. Had an incredible time at Priyadarshini College of Engineering! A special thanks to the Mechanical Engineering Department for their support and hospitality.",
    logo: "/photos/w5.png",
  },
  {
    title: "2nd Prize in the IDEA-THON at TECH-AXION 2K25",
    description:
      "National Level Event organized by the Department of Information Technology, Tulsiramji Gaikwad Patil College of Engineering and Technology, Nagpur. 🌟",
    logo: "/photos/w6.png",
  },
  {
    title: "🎉 Victory at Tech-Carvaan 2025 – Codesphere Hackathon! 🏆",
    description:
      "We're thrilled to announce that our team emerged as Winners of the National Level Technical Fest – Tech-Carvaan 2025, in the 24-hour Codesphere Hackathon, organized by Government College of Engineering, Jalgaon!",
    logo: "/photos/w7.png",
  },
  {
    title: "🚀 From Idea to Victory – HackSphere 2.0 Champions! 🏆🏅",
    description:
      "A huge shoutout to The CodeBreakers RCOEM for organizing an amazing experience filled with innovation, collaboration, and top-tier management.",
    logo: "/photos/w8.png",
  },
  {
    title: "🏆 1st Runner-Up at Tech-Fusion 2K25",
    description:
      "Our team secured the 1st Runner-Up position at Tech-Fusion 2K25, brilliantly organized by ETSA & CESA at the Government College of Engineering, Yavatmal!",
    logo: "/photos/w9.png",
  },
  {
    title: "🚀 PRABAL 2025 – The Ultimate Game of Codes ⚔️",
    description:
      "The Grand Offline 40-hour non-stop coding battle Hackathon hosted by the Google Developer Group (GDG On Campus SGU) at Sanjay Ghodawat University was nothing short of EPIC!",
    logo: "/photos/w10.jpg",
  },
  {
    title: "INNOVANZA 2K25 Project Expo – Ramdeobaba College, Nagpur",
    description:
      "We are incredibly proud to announce that our project, AI-Powered Career Coach Guidance, secured the 2nd Runner-Up position!",
    logo: "/photos/img13.jpg",
  },
  {
    title: "1st Runner-Up at Brahmax 1.0 – Global, Jabalpur",
    description:
      "24 hours. One idea. Zero sleep. Countless bugs. And a prototype we're truly proud of. Grateful for the opportunity, the adrenaline, and the memories!",
    logo: "/photos/img19.jpg",
  },
  {
    title: "Our Innovation at Ramdev Baba University, Nagpur!",
    description:
      "Won 2nd place for amazing opportunity to present our project at the Project Exhibition 2025 held at Ramdev Baba University, Nagpur.",
    logo: "/photos/img6.jpg",
  },
  {
    title: "Build Solo Winner",
    description:
      "Won 1st prize at SSGMCE – a National Level Business Plan Competition. Showcasing our project alongside many talented minds and witnessing groundbreaking ideas was truly inspiring!",
    logo: "/photos/img7.jpg",
  },
  {
    title: "Jagdamba College Project Expo Yavatmal",
    description:
      "Consolation Position (3rd Rank) in the Nation-Level Project Model Presentation Competition at the prestigious X-Plore25, hosted by Jagadambha College of Engineering & Technology, Yavatmal.",
    logo: "/photos/img20.jpg",
  },
];

export default function Achievements() {
  return (
    <section className=" py-14 sm:py-20 px-4 sm:px-8 lg:px-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4 sm:mb-6">
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500">
            Achievements
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto px-2">
            Recognition and awards that showcase dedication to innovation and
            excellence in technology
          </p>
        </div>

        {/* Achievements Grid — 1 col mobile, 2 col tablet+, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((award, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

              {/* Image — fixed height container, image absolutely fills it */}
              <div className="relative w-full h-48 flex-shrink-0 overflow-hidden">
                {award.logo ? (
                  <Image
                    src={award.logo}
                    alt={award.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <Award className="w-12 h-12 text-yellow-400" />
                  </div>
                )}
                {/* Star badge over image */}
                <div className="absolute top-3 right-3 w-7 h-7 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-20">
                  <Star className="w-3.5 h-3.5 text-white fill-current" />
                </div>
                {/* Gradient fade at bottom of image into card */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              {/* Text content */}
              <div className="relative z-10 flex flex-col flex-1 p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 leading-snug line-clamp-2">
                  {award.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3">
                  {award.description}
                </p>

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 mt-3 self-start px-3 py-1.5 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-medium">
                  <Trophy className="w-3 h-3" />
                  Winner
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-yellow-400/30 rounded-tl-lg group-hover:border-yellow-400/60 transition-colors duration-300 z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";
// import { Award, Trophy, Star } from "lucide-react";

// const achievements = [
//   {
//     title: "IEEE SSGMCE Technovation Winner",
//     description:
//       "Secured First Prize at Technovation Project Expo, a prestigious project competition organized by IEEE SB SSGMCE, Shegaon!",
//     logo: "/photos/w1.png",
//   },
//   {
//     title: "We are the HackSphere 2.0 Champions! 🏆🏅",
//     description:
//       "A huge shoutout to The CodeBreakers RCOEM for organizing an amazing experience filled with innovation, collaboration, and top-tier management",
//     logo: "/photos/img5.jpg",
//   },
//   {
//     title:
//       "🚀 Innovating for Success – Proud 3rd Place Winners at Pragati 2025! 🏆🎯",
//     description:
//       "I—clinched 3rd place 🥉 at the Pragati - National Level Business Plan Competition, hosted by St. Francis Institute Of Technology (SFIT), Mumbai! 🎉",
//     logo: "/photos/w4.png",
//   },
//   {
//     title: "UNNATI 2K25 at Priyadarshini College of Engineering",
//     description:
//       "Won consolation price.Had an incredible time at Priyadarshini College of Engineering! A special thanks to the Mechanical Engineering Department for their support and hospitality. The experience was truly valuable, filled with learning and inspiration.",
//     logo: "/photos/w5.png",
//   },
//   {
//     title: "2nd Prize in the IDEA-THON at TECH-AXION 2K25",
//     description:
//       "National Level Event organized by the Department of Information Technology, Tulsiramji Gaikwad Patil College of Engineering and Technology, Nagpur (An Autonomous Institute).🌟",
//     logo: "/photos/w6.png",
//   },

//   {
//     title: "🎉 Victory at Tech-Carvaan 2025 – Codesphere Hackathon! 🏆",
//     description:
//       "We’re thrilled to announce that our team emerged as Winners of the National Level Technical Fest – Tech-Carvaan 2025, in the 24-hour Codesphere Hackathon, organized by Government College of Engineering, Jalgaon!",
//     logo: "/photos/w7.png",
//   },
//   {
//     title:
//       "🚀 From Idea to Victory – We are the HackSphere 2.0 Champions! 🏆🏅",
//     description:
//       "A huge shoutout to The CodeBreakers RCOEM for organizing an amazing experience filled with innovation, collaboration, and top-tier management. The event was flawlessly executed, providing us with a platform to showcase our skills and creativity!",
//     logo: "/photos/w8.png",
//   },
//   {
//     title:
//       "🏆 1st Runner-Up at Tech-Fusion 2K25 – A Journey Worth Remembering!",
//     description:
//       "our team secured the 1st Runner-Up position at Tech-Fusion 2K25, brilliantly organized by ETSA & CESA at the Government College of Engineering, Yavatmal!",
//     logo: "/photos/w9.png",
//   },
//   {
//     title: "🚀 𝗣𝗥𝗔𝗕𝗔𝗟 𝟮𝟬𝟮𝟱 – 𝗧𝗵𝗲 𝗨𝗹𝘁𝗶𝗺𝗮𝘁𝗲 𝗚𝗮𝗺𝗲 𝗼𝗳 𝗖𝗼𝗱𝗲𝘀 ⚔️",
//     description:
//       "The 𝗚𝗿𝗮𝗻𝗱 𝗢𝗳𝗳𝗹𝗶𝗻𝗲 𝟰𝟬-𝗵𝗼𝘂𝗿 non-stop coding battle 𝗛𝗮𝗰𝗸𝗮𝘁𝗵𝗼𝗻 hosted by the Google Developer Group (GDG On Campus SGU) at Sanjay Ghodawat University (SGU) was nothing short of 𝗘𝗣𝗜𝗖!",
//     logo: "/photos/w10.jpg",
//   },
//   {
//     title:
//       "INNOVANZA 2K25 Project Expo competition held at Ramdeobaba College in Nagpur",
//     description:
//       "we are incredibly proud to announce that our project, Al-Powered Career Coach Guidance, secured the 2nd Runner-Up position!",
//     logo: "/photos/img13.jpg",
//   },
//   {
//     title:
//       "1st Runner-Up spot at Brahmax 1.0 – Global, Jabalpur, Madhya Pradesh!",
//     description:
//       "24 hours. One idea. Zero sleep. Countless bugs. And a prototype we’re truly proud of Grateful for the opportunity, the adrenaline, and the memories!",
//     logo: "/photos/img19.jpg",
//   },
//   {
//     title: "Our Innovation at Ramdev Baba University, Nagpur!",
//     description:
//       "Won 2nd place for amazing opportunity to present our project at the Project Exhibition 2025 held at Ramdev Baba University, Nagpur",
//     logo: "/photos/img6.jpg",
//   },

//   {
//     title: "Build Solo winner",
//     description:
//       "I win 1st price at SSGMCE a National Level Business Plan Competition Showcasing our project alongside many talented minds and witnessing groundbreaking ideas was truly inspiring!",
//     logo: "/photos/img7.jpg",
//   },
//   {
//     title: "jagdamba college Project Expo Yavatmal",
//     description:
//       "Consolation Position (3rd Rank) in the Nation-Level Project Model Presentation Competition at the prestigious National-Level Technical Event X-Plore25, hosted by Jagadambha College of Engineering & Technology, Yavatmal.",
//     logo: "/photos/img20.jpg",
//   },
// ];

// export default function Achievements() {
//   return (
//     <section className=" py-20 px-6 sm:px-10 lg:px-24 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
//             <Trophy className="w-8 h-8 text-white" />
//           </div>
//           <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500">
//             Achievements
//           </h2>
//           <p className="text-xl text-slate-300 max-w-2xl mx-auto">
//             Recognition and awards that showcase dedication to innovation and
//             excellence in technology
//           </p>
//         </div>

//         {/* Achievements Grid */}
//         <div className="grid lg:grid-cols-2 gap-8">
//           {achievements.map((award, index) => (
//             <div
//               key={index}
//               className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
//             >
//               {/* Glow effect on hover */}
//               <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Content */}
//               <div className="relative flex items-start gap-6">
//                 {/* Award Icon/Image */}
//                 <div className="flex-shrink-0">
//                   <div className="relative w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-2 group-hover:from-yellow-400/20 group-hover:to-orange-500/20 transition-all duration-500">
//                     {award.logo ? (
//                       <Image
//                         src={award.logo}
//                         alt={award.title}
//                         width={64}
//                         height={64}
//                         className="w-full h-full object-cover rounded-xl"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center">
//                         <Award className="w-10 h-10 text-yellow-400" />
//                       </div>
//                     )}

//                     {/* Star decoration */}
//                     <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                       <Star className="w-3 h-3 text-white fill-current" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Text Content */}
//                 <div className="flex-1 min-w-0">
//                   <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
//                     {award.title}
//                   </h3>
//                   <p className="text-slate-300 leading-relaxed text-lg">
//                     {award.description}
//                   </p>

//                   {/* Achievement badge */}
//                   <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium">
//                     <Trophy className="w-4 h-4" />
//                     Winner
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative corner accent */}
//               <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400/30 rounded-tr-lg group-hover:border-yellow-400/60 transition-colors duration-300"></div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom decorative element */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300">
//             <Star className="w-5 h-5 text-yellow-400 fill-current" />
//             <span className="text-lg font-medium">
//               Excellence in Innovation
//             </span>
//             <Star className="w-5 h-5 text-yellow-400 fill-current" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
