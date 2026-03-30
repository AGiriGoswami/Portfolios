import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "React",
  "Redux-Toolkit",
  "Node.js",
  "MongoDB",
  "GitHub",
  "MySql",
  "Excel",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gray-900/60 backdrop-blur-sm"
    >
      {/* Heading */}
      <h2
        className="text-4xl font-extrabold text-center mb-14
                   bg-gradient-to-r from-indigo-400 to-purple-500
                   bg-clip-text text-transparent animate-slideDown"
      >
        Skills
      </h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className={`relative group bg-gradient-to-br from-gray-800/70 to-gray-900/80
                        py-6 text-center rounded-2xl border border-gray-700
                        shadow-lg animate-fadeUp
                        hover:scale-110 transition-all duration-500
                        hover:shadow-indigo-500/30`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0
                         group-hover:opacity-100
                         bg-gradient-to-r from-indigo-500/20 to-purple-600/20
                         blur-xl transition duration-500"
            ></div>

            {/* Text */}
            <span className="relative z-10 font-semibold text-gray-200 text-lg">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
