import React from "react";
import userAuthQR from "../assets/userAuthQR.jpeg";

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
              <span className="text-indigo-400 font-semibold"> MERN Stack</span>.
              Includes JWT authentication, protected routes, and profile
              management.
            </p>

              {/* QR Code */}
            <div className="mt-4 flex flex-col items-center mb-6">
              <img
                src={userAuthQR}
                alt="User Auth App QR Code"
                className="w-47 h-40 rounded-xl border border-gray-600
                           hover:scale-110 transition-transform duration-300"
              />
              {/* <p className="text-sm text-gray-400 mt-2">
                Scan QR to open project
              </p> */}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://wondrous-manatee-ad7dae.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                           bg-gradient-to-r from-indigo-500 to-purple-600
                           px-6 py-3 rounded-xl text-white font-semibold
                           shadow-lg hover:shadow-2xl
                           transition-all duration-300
                           hover:scale-110"
              >
                🚀 View Live Project
              </a>

              <a
                href="https://wondrous-manatee-ad7dae.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                           border border-indigo-500 text-indigo-400
                           px-6 py-3 rounded-xl font-semibold
                           hover:bg-indigo-500 hover:text-white
                           transition-all duration-300 hover:scale-110"
              >
                📱 Open via QR
              </a>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
