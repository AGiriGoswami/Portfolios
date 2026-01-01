import React from "react";
import ajayimg from "../assets/Ajay_.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-gray-900/60 backdrop-blur-sm"
    >
      {/* Heading */}
      <h2
        className="text-4xl font-extrabold text-center mb-14
                   bg-gradient-to-r from-indigo-400 to-purple-500
                   bg-clip-text text-transparent animate-slideDown"
      >
        About Me
      </h2>

      {/* Content */}
      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12
                   bg-gradient-to-br from-gray-800/70 to-gray-900/80
                   p-10 rounded-2xl border border-gray-700 shadow-xl
                   animate-fadeUp hover:shadow-indigo-500/30 transition-all duration-500"
      >
        {/* Image */}
        <div
          className="w-60 h-60 md:w-56 md:h-60 rounded-full overflow-hidden
                     border-4 border-indigo-500 shadow-lg
                     hover:scale-110 transition-transform duration-500"
        >
          <img
            src={ajayimg}
            alt="Ajay Giri Goswami"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-gray-300 text-lg leading-relaxed text-center md:text-left space-y-3">
          <p className="animate-fadeIn">
            I am a passionate <span className="text-indigo-400 font-semibold">MERN Stack Developer</span> 
            with a strong interest in building modern, scalable, and user-centric web applications.
          </p>

          <p className="animate-fadeIn delay-100">
            I specialize in developing full-stack solutions using 
            <span className="text-indigo-400 font-semibold">
              {" "}MongoDB, Express.js, React.js, and Node.js
            </span>, focusing on clean architecture and performance.
          </p>

          <p className="animate-fadeIn delay-200">
            I enjoy transforming ideas into real-world applications with intuitive UI,
            secure backend systems, and smooth user experiences.
          </p>

          <p className="animate-fadeIn delay-300">
            Problem-solving, continuous learning, and writing maintainable code
            are core values that drive my development approach.
          </p>

          <p className="animate-fadeIn delay-500">
            My goal is to grow as a professional developer while contributing to impactful
            projects that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
