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
                   bg-clip-text text-transparent"
      >
        About Me
      </h2>

      {/* Card */}
      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12
                   bg-gradient-to-br from-gray-800/70 to-gray-900/80
                   p-10 rounded-2xl border border-gray-700 shadow-xl
                   hover:shadow-indigo-500/30 transition-all duration-500"
      >
        {/* Image */}
        <div className="w-300 h-100 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
          <img
            src={ajayimg}
            alt="Ajay Giri Goswami"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="text-gray-300 text-lg leading-relaxed space-y-4 text-center md:text-left">
          <p>
            I am a passionate
            <span className="text-indigo-400 font-semibold">
              {" "}
              MERN Stack Developer
            </span>
            with hands-on experience in building scalable, secure, and
            performance-driven web applications.
          </p>

          <p>
            I specialize in developing full-stack solutions using
            <span className="text-indigo-400 font-semibold">
              {" "}
              MongoDB, Express.js, React.js, and Node.js
            </span>
            , focusing on clean architecture, optimized APIs, and responsive
            user interfaces.
          </p>

          <p>
            Alongside technical development, I bring real-world business
            exposure through my experience as an
            <span className="text-indigo-400 font-semibold">
              {" "}
              E-Commerce Account Manager
            </span>
            , where I managed Amazon & Flipkart operations, optimized ads
            performance, and improved marketplace growth.
          </p>

          <p>
            I enjoy transforming ideas into real-world digital products by
            combining intuitive UI design, secure backend systems, and
            data-driven decision making.
          </p>

          <p>
            My goal is to continuously grow as a professional developer while
            contributing to impactful projects that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
