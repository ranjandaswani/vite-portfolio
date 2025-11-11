import React from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import AsideLeft from "./components/AsideLeft";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <AsideLeft />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
