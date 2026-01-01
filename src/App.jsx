import React from "react";
import "./index.css";

import Navbar from "./compoments/Navbar";
import Hero from "./compoments/Hero";
import About from "./compoments/About";
import Skills from "./compoments/Skills";
import Education from "./compoments/Education";
import Projects from "./compoments/Projects";
import Contact from "./compoments/Contact";
import Footer from "./compoments/Footer";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </>
  );
};

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
        <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}