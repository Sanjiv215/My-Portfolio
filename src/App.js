import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import SepAbout from "./components/sep_about";
import SepContact from "./components/sep_contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Projects />
            </>
          }
        />

        <Route path="/sep_about" element={<SepAbout />} />
        <Route path="/sep_contact" element={<SepContact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
