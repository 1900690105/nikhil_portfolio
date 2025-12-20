"use client";
import React from "react";

export default function VideoSectionIframe({
  cloudName = "dwkizoqok",
  publicId = "gcoey_larvhj",
}) {
  const src = `https://player.cloudinary.com/embed/?cloud_name=dwkizoqok&public_id=kjxbb0mpcafq68xscfgl&profile=cld-default`;

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          Here&apos;s Our Journey
        </h2>

        <div className="relative overflow-hidden rounded-xl shadow-lg flex justify-center items-center">
          {/* Responsive iframe wrapper (16:9) */}
          <div className="w-full max-w-[900px] aspect-video">
            <iframe
              src={src}
              title="Cloudinary Video"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              loading="lazy"
              className="w-full h-full rounded-xl border-0"
              sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React from "react";

// export default function VideoSection() {
//   return (
//     <section className=" py-16 px-6 sm:px-10 lg:px-24 ">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
//           Here&#39;s Our Journy
//         </h2>

//         <div className="relative overflow-hidden rounded-xl shadow-lg flex justify-center items-center">
//           <video controls className="w-[800px] h-[500px] rounded-xl shadow-lg ">
//             <source src="/gcoey.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     </section>
//   );
// }
