import React from "react";

export default function Experience() {
  const experience = [
    {
      company: "Electrosoft System",
      role: "Full Stack Web Development Intern",
      location: "Pune, Maharashtra",
      period: "July 2025 - Ongoing",
      projects: "Project- 2",
      highlights: [
        "Developed responsive webpages using React.js, Tailwind CSS, and JavaScript, Nodejs, ExpressJs, Postgresql and Render",
        "Collaborated with backend engineers to integrate REST APIs",
        "Helped improve UI usability and page load performance by 20%",
        "Fixed layout bugs and improved cross-browser compatibility.",
      ],
    },
  ];

  return (
    <section className=" py-2 px-1">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className=" text-5xl md:text-6xl font-bold mb-4">
            <span className=" bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Professional journey and Professional learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-20">
          {experience.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-cyan-500/30 hover:border-cyan-400/60 transition-colors duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"></div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold  mb-2 text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text transition-all duration-300">
                      {edu.role}
                    </h3>
                    <p className="text-purple-400 font-semibold text-lg mb-1">
                      {edu.company}{" "}
                      <span className="text-gray-400 text-sm">
                        {edu.location}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className="text-cyan-400 font-semibold mb-1">
                      {edu.period}
                    </p>
                    <p className="text-gray-300 font-medium">{edu.projects}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1.5">▹</span>
                      <p className="text-gray-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
