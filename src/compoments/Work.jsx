import React from "react";
import { Briefcase } from "lucide-react";

const Work = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Heading */}
      <h2
        className="text-4xl font-extrabold text-center mb-16
                     bg-gradient-to-r from-indigo-400 to-purple-500
                     bg-clip-text text-transparent"
      >
        Work Experience
      </h2>

      <div className="max-w-5xl mx-auto relative  border-gray-700 pl-8 space-y-16">
        {/* Experience Item */}
        <div className="relative group">
          <div className="bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700 hover:shadow-indigo-500/20 transition duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold text-indigo-400 flex items-center gap-2">
                <Briefcase size={20} className="items-center" />
                Aquadpure
              </h3>
              <span className="text-gray-400 text-sm mt-2 md:mt-0">
                Feb 2025 – Present
              </span>
            </div>

            <h4 className="text-lg font-semibold text-gray-200 mb-4">
              E-Commerce Account Manager
            </h4>

            {/* Description */}
            <ul className="text-gray-400 space-y-3 leading-relaxed list-disc pl-5">
              <li>
                Managed Amazon & Flipkart seller accounts end-to-end, including
                catalog, pricing & performance optimization.
              </li>
              <li>
                Optimized Sponsored Ads campaigns and reduced ACOS through
                data-driven strategy.
              </li>
              <li>
                Handled FBA shipment planning & inventory forecasting to prevent
                stock-outs.
              </li>
              <li>
                Generated daily, weekly & 15-day performance analytics reports.
              </li>
              <li>Improved product ranking via SEO & keyword optimization.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
