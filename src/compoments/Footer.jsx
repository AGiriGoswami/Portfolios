import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900/80 backdrop-blur-md border-t border-gray-700
                 px-6 md:px-20 py-10 mt-20 animate-fadeIn"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Brand */}
        <div className="space-y-3">
          <h3
            className="text-2xl font-extrabold
                       bg-gradient-to-r from-indigo-400 to-purple-500
                       bg-clip-text text-transparent
                       hover:scale-105 transition-transform duration-300"
          >
            Ajay Giri Goswami
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            MERN Stack Developer focused on building modern, scalable,
            and user-friendly web applications with clean UI
            and secure backend architecture.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-indigo-400">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400">
            {["About", "Skills", "Education", "Projects", "Contact"].map(
              (link) => (
                <li
                  key={link}
                  className="hover:text-indigo-400 hover:translate-x-1
                             transition-all duration-300 cursor-pointer"
                >
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-purple-400">
            Connect With Me
          </h4>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/ajay-giri-goswami-564482227/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300
                         hover:bg-indigo-500 hover:text-white
                         hover:scale-110 transition-all duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/AGiriGoswami"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300
                         hover:bg-purple-500 hover:text-white
                         hover:scale-110 transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        className="mt-10 pt-6 border-t border-gray-700 text-center
                   text-gray-500 text-sm animate-fadeUp"
      >
        © 2026 <span className="text-indigo-400 font-semibold">
          Ajay Giri Goswami
        </span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
