import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-20 bg-gray-900/60 backdrop-blur-sm"
    >
      {/* Heading */}
      <h2
        className="text-4xl font-extrabold text-center mb-14
                   bg-gradient-to-r from-indigo-400 to-purple-500
                   bg-clip-text text-transparent animate-slideDown"
      >
        Education
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* MCA Running */}
        <div
          className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40
                     p-8 rounded-2xl border border-indigo-500/40 shadow-xl
                     animate-fadeUp hover:scale-105 transition-all duration-500
                     hover:shadow-indigo-500/40"
        >
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">
            Master of Computer Applications (MCA)
          </h3>
          <p className="text-gray-300">
            SAGE University, Indore
          </p>
          <p className="text-sm text-gray-400 mt-1">
            2025 – 2027 (Running)
          </p>
          <span className="inline-block mt-4 px-4 py-1 rounded-full
                           bg-indigo-500/20 text-indigo-300 text-sm font-semibold">
            Current Program
          </span>
        </div>

        {/* BCA */}
        <div
          className="bg-gradient-to-br from-gray-800/70 to-gray-900/80
                     p-8 rounded-2xl border border-gray-700 shadow-lg
                     animate-fadeUp delay-150 hover:scale-105 transition-all duration-500 hover:shadow-indigo-500/40"
        >
          <h3 className="text-xl font-semibold text-indigo-400 mb-2">
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="text-gray-300">
            Vishisht School of Management
          </p>
          <p className="text-sm text-gray-400 mt-1">
            2021 – 2024
          </p>
          <p className="text-indigo-400 font-semibold mt-3">
            CGPA: 6.62 / 10
          </p>
        </div>

       

      </div>
    </section>
  );
};

export default Education;
