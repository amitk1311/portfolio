import { useEffect, useRef } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WhatIDo from "./pages/WhatIDo";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const SECTION_IDS = ["home", "about", "projects", "what-i-do", "contact"];

export default function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white overflow-x-hidden flex">
      {/* Fixed sidebar */}
      <Sidebar scrollContainerRef={scrollContainerRef} sectionIds={SECTION_IDS} />

      {/* Single scrollable content area with scroll snap */}
      <main
        ref={scrollContainerRef}
        className="flex-1 h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth pb-20 md:pb-0"
        style={{ scrollBehavior: "smooth" }}
      >
        <section id="home" className="snap-start snap-always min-h-screen">
          <Home />
        </section>
        <section id="about" className="snap-start min-h-screen">
          <About />
        </section>
        <section id="projects" className="snap-start min-h-screen">
          <Projects />
        </section>
        <section id="what-i-do" className="snap-start min-h-screen">
          <WhatIDo />
        </section>
        <section id="contact" className="snap-start min-h-screen">
          <Contact />
        </section>
        <section id="footer" className="snap-start min-h-[120px] flex items-end justify-center">
          <Footer />
        </section>
      </main>
    </div>
  );
}
