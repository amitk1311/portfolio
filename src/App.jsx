import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WhatIDo from "./pages/WhatIDo";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  // 🔒 LOCK SCROLL ONLY ON HOME
  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white overflow-x-hidden">
      <Sidebar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <About />
              </motion.div>
            }
          />

          <Route
            path="/projects"
            element={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Projects />
              </motion.div>
            }
          />

          <Route
            path="/what-i-do"
            element={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <WhatIDo />
              </motion.div>
            }
          />

          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
