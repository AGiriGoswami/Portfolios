import React from "react";
import "./index.css";
import ajaygirigoswami from "./assets/ajay.jpeg";
import ajaycv from "./assets/ajaycv.pdf";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-800/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700">
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent animate-fadeIn hover:animate-jump">
          Ajay Giri Goswami
        </h1>
        <ul className="hidden md:flex space-x-8 ">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-indigo-400 cursor-pointer transition-all duration-300 hover:scale-110"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen relative bg-gray-900 animate-fadeUp">
        <div className="absolute inset-0  bg-gray-800/50 backdrop-blur-sm"></div>

        <div className="relative z-10 px-6">
          {/* Name */}
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-4 
                       bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent 
                       animate-jump p-2"
          >
            Ajay Giri Goswami
          </h1>

          {/* Info */}
          <p className="text-gray-400 text-lg mb-2 animate-fadeIn">
            Indore, Madhya Pradesh, India
          </p>
          <p className="text-gray-400 text-sm mb-6 animate-fadeIn">
            📞 +91-86020-35235 | ✉️ ag124767@gmail.com |
            <a href="https://www.linkedin.com/in/ajay-giri-goswami-564482227/" className="text-indigo-400 hover:underline ml-1">
              LinkedIn
            </a>{" "}
            |
            <a href="https://github.com/AGiriGoswami" className="text-purple-400 hover:underline ml-1">
              GitHub
            </a>
          </p>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeUp">
            MERN Stack Developer with hands-on experience in full-stack web
            development. Proficient in MongoDB, Express.js, React.js, and
            Node.js. Passionate about building scalable, maintainable, and
            user-friendly web applications.
          </p>

          <a
            href={ajaycv}
            target=" "
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-xl 
                       text-white  font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 animate-fadeUp hover:shadow-indigo-500/20"
          >
            Download CV
          </a>
          <span className="m-3"></span>
        

          
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 md:px-20 bg-gray-800/50 backdrop-blur-sm"
      >
        <h2
          className="text-3xl font-bold animate-jump text-center bg-gradient-to-r from-indigo-400 to-purple-500 
               bg-clip-text text-transparent mb-10 animate-slideDown hover:animate-jump"
        >
          About Me
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 text-gray-300 bg-gray-900/50 p-8 rounded-2xl shadow-xl border border-gray-700 animate-fadeUp hover:shadow-indigo-500/20 transition-transform duration-300">
          {/* 👇 Profile Image */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500 hover:scale-105 transition-transform duration-500">
            <img
              src={ajaygirigoswami}
              alt="Ajay Giri Goswami"
              className="w-full h-full object-cover "
            />
          </div>

          {/* 👇 About Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg leading-relaxed">
              I'm a developer who loves creating user-friendly and responsive
              websites. I enjoy solving problems, learning new technologies, and
              bringing ideas to life through clean, modern code.
              <br />
              <br />
              My passion lies in building interactive, fast, and visually
              appealing web applications using{" "}
              <span className="text-indigo-400 font-semibold">MERN Stack</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-20">
        <h2
          className="text-3xl font-bold animate-jump text-center bg-gradient-to-r from-indigo-400 to-purple-500 
                     bg-clip-text text-transparent mb-10 animate-slideDown"
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Tailwind CSS",
            "Github",
            "Node.js",
            "MongoDB",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gradient-to-br from-gray-800 to-gray-900 py-6 rounded-xl shadow-md border border-gray-700 
                         text-white font-semibold hover:scale-105 transition-transform duration-300 animate-fadeUp hover:shadow-indigo-500/20"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6 md:px-20 bg-gray-800/50 backdrop-blur-sm"
      >
        <h2
          className="text-3xl animate-jump font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 
                     bg-clip-text text-transparent mb-10 animate-slideDown"
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[1, 2].map((project) => (
            <div
              key={project}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 
                         hover:scale-105 transition-transform duration-300 animate-fadeUp hover:shadow-indigo-500/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                Project {project}
              </h3>
              <p className="text-gray-400 mb-4">
                A modern web app built using React and Tailwind CSS animations.
              </p>
              <a
                href="#projects"
                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-xl text-white 
                           font-semibold shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20">
        <h2
          className="text-3xl animate-jump font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 
                     bg-clip-text text-transparent mb-10 animate-slideDown"
        >
          Contact Me
        </h2>
        <form className="max-w-xl mx-auto space-y-6 bg-gray-900/50 p-8 rounded-2xl shadow-xl border border-gray-700 animate-fadeUp">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
                       focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
                       focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 
                       focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 transition"
          ></textarea>
          <button
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-3 rounded-lg hover:shadow-xl 
                       transition font-semibold hover:scale-110 duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800/80 backdrop-blur-md text-gray-400 border-t border-gray-700 animate-fadeIn">
        © 2025 Ajay Giri Goswami. All Rights Reserved.
      </footer>
    </div>
  );
}
