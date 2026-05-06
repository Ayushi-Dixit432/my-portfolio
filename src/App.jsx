import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
 
  return (
    <>
      {/* Navbar */}
      <Navbar />
      

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </>
   );
}

export default App;