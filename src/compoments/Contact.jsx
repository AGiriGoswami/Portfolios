import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gray-900/60 backdrop-blur-sm"
    >
      {/* Heading */}
      <h2
        className="text-4xl font-extrabold text-center mb-14
                   bg-gradient-to-r from-indigo-400 to-purple-500
                   bg-clip-text text-transparent animate-slideDown"
      >
        Contact Me
      </h2>

      {/* Form Card */}
      <form
        className="max-w-xl mx-auto space-y-6
                   bg-gradient-to-br from-gray-800/70 to-gray-900/80
                   p-10 rounded-2xl border border-gray-700 shadow-xl
                   animate-fadeUp hover:shadow-indigo-500/30
                   transition-all duration-500"
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700
                     text-white placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition-all duration-300 animate-fadeIn"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700
                     text-white placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition-all duration-300 animate-fadeIn delay-100"
        />

        {/* Message */}
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700
                     text-white placeholder-gray-400 resize-none
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     transition-all duration-300 animate-fadeIn delay-200"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600
                     py-4 rounded-xl text-white font-semibold
                     shadow-lg hover:shadow-2xl
                     transition-all duration-300
                     hover:scale-110 animate-pulse"
        >
          🚀 Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
