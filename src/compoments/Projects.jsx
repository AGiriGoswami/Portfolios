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
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* ================= Project 1 ================= */}
        <div
          className="relative group bg-gradient-to-br from-gray-800/80 to-gray-900/90
                     p-8 rounded-2xl border border-gray-700 shadow-xl
                     transition-all duration-500 hover:scale-105
                     hover:shadow-indigo-500/30 animate-fadeUp"
        >
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-indigo-400 mb-3">
              User Auth App
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              A secure and scalable authentication system built using
              <span className="text-indigo-400 font-semibold"> MERN Stack</span>
              . Implements JWT-based authentication, protected routes,
              role-based access control, and user profile management with a
              responsive UI.
            </p>

            <a
              href="https://wondrous-manatee-ad7dae.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2
                         bg-gradient-to-r from-indigo-500 to-purple-600
                         px-6 py-3 rounded-xl text-white font-semibold
                         shadow-lg hover:shadow-2xl
                         transition-all duration-300 hover:scale-110"
            >
              🚀 View Live Project
            </a>
          </div>
        </div>

        {/* ================= Project 2 ================= */}
        <div
          className="relative group bg-gradient-to-br from-gray-800/80 to-gray-900/90
                     p-8 rounded-2xl border border-gray-700 shadow-xl
                     transition-all duration-500 hover:scale-105
                     hover:shadow-indigo-500/30 animate-fadeUp"
        >
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold text-indigo-400 mb-3">
              Profit & RTO Calculator
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Realistic Amazon India profit simulator including
              <span className="text-indigo-400 font-semibold">
                {" "}
                Referral Fees, Closing Fees, TCS & RTO Loss Modeling
              </span>
              . Includes live chart visualization and PDF report export.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://e-commerceprofitandloss.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                           bg-gradient-to-r from-indigo-500 to-purple-600
                           px-6 py-3 rounded-xl text-white font-semibold
                           shadow-lg hover:shadow-2xl
                           transition-all duration-300 hover:scale-110"
              >
                📊 View Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
