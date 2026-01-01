import React from "react";
import ajaycv from "../assets/Ajay Giri Goswami.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center
                 h-screen bg-gray-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 px-6 animate-fadeUp">
        {/* Name */}
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4
                     bg-gradient-to-r from-indigo-400 to-purple-500
                     bg-clip-text text-transparent
                     animate-slideDown"
        >
          Ajay Giri Goswami
        </h1>

        {/* Location */}
        <p className="text-gray-400 mt-3 animate-fadeIn delay-100">
          Indore, Madhya Pradesh, India
        </p>

        {/* Description */}
        <p
          className="text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed
                     animate-fadeIn delay-200"
        >
          MERN Stack Developer with hands-on experience in building scalable,
          secure, and user-friendly web applications using{" "}
          <span className="text-indigo-400 font-semibold">
            React, Node.js, Express, and MongoDB
          </span>.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fadeUp delay-300">
          <a
            href={ajaycv}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-purple-600
                       px-8 py-4 rounded-xl font-semibold text-white
                       shadow-lg hover:shadow-2xl
                       hover:scale-110 transition-all duration-300"
          >
            📄 Open CV
          </a>

          <a
            href="#projects"
            className="px-8 py-4 rounded-xl font-semibold
                       border border-indigo-500 text-indigo-400
                       hover:bg-indigo-500 hover:text-white
                       hover:scale-110 transition-all duration-300"
          >
            🚀 View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
