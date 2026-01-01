import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gray-900/60 backdrop-blur-sm"
    >
      {/* Heading */}
      <h2
        className="text-4xl font-extrabold text-center mb-14
                   bg-gradient-to-r from-indigo-400 to-purple-500
                   bg-clip-text text-transparent animate-slideDown"
      >
        Project
      </h2>

      {/* Card */}
      <div className="max-w-xl mx-auto">
        <div
          className="relative group bg-gradient-to-br from-gray-800/80 to-gray-900/90
                     p-8 rounded-2xl border border-gray-700 shadow-xl
                     transition-all duration-500 hover:scale-105
                     hover:shadow-indigo-500/30 animate-fadeUp"
        >
          {/* Glow Effect */}
          <div
            className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100
                       bg-gradient-to-r to-purple-600 blur-xl
                       transition duration-500"
          ></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-indigo-400 mb-3">
              User Auth App
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              A secure and scalable authentication system built using
              <span className="text-indigo-400 font-semibold">
                {" "}
                MERN Stack
              </span>
              . Includes user registration, login, protected routes, JWT
              authentication, and profile management.
            </p>

            <a
              href="https://wondrous-manatee-ad7dae.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2
                         bg-gradient-to-r from-indigo-500 to-purple-600
                         px-8 py-3 rounded-xl text-white font-semibold
                         shadow-lg hover:shadow-2xl
                         transition-all duration-300
                         hover:scale-110 animate-pulse"
            >
              🚀 View Live Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
