import React from "react";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Government College of Engineering Yavatmal",
      location: "Yavatmal, Maharashtra",
      period: "2022 - 2025",
      grade: "CGPA: 8.84",
      highlights: [
        "Specialized in AI/ML and Web Technologies",
        "Led development team for final year project",
        "Published research paper on intelligent systems",
      ],
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "GTMC",
      location: "Vishnupuri, Nanded",
      period: "2019 - 2022",
      grade: "Percentage: 82.17%",
      highlights: [
        "Science Stream with Computer Science",
        "Get basic knowledge in computer",
      ],
    },
  ];

  return (
    <section className=" py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className=" text-5xl md:text-6xl font-bold mb-4">
            <span className=" bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Academic journey and continuous learning
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-20">
          {education.map((edu, index) => (
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
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 font-semibold text-lg mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className="text-cyan-400 font-semibold mb-1">
                      {edu.period}
                    </p>
                    <p className="text-gray-300 font-medium">{edu.grade}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-center"
                    >
                      <span className="text-cyan-400">▹</span>
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
