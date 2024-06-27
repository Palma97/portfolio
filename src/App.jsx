import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { Home } from "./components/Home/Home.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Studies from "./components/Studies/Studies.jsx";
/* import { AnimatePresence } from "framer-motion"; */

function App() {
  return (
    <div className="App">
      {/* <AnimatePresence> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studies" element={<Studies />} />
      </Routes>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
