import {useEffect } from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  
  // 🔒 Lock scroll ONLY on Hero
  <section className="min-h-screen flex items-center"/>



  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 h-screen grid md:grid-cols-2 items-center gap-16  ">

      {/* LEFT SIDE */}
      <div className="text-center md:text-left relative">

        {/* Accent line */}
        

        {/* NAME */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight
          bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent ">
          Amit Kumar Sah
        </h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-base md:text-lg text-gray-400 max-w-xl">
          Final-year CSE student · Full-Stack Developer{" "}
          <span className="text-gray-500">(Frontend-focused)</span>
        </p>

        {/* TYPEWRITER */}
        <div className="mt-6 text-xl text-gray-300">
          I am into{" "}
          <span className="text-blue-400 font-semibold">
            <Typewriter
              options={{
                strings: [
                  "Frontend Development",
                  "Backend Development",
                  "Full-Stack Development",
                  "MERN Stack",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
                pauseFor: 1600,
              }}
            />
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
          I build clean, scalable, and performance-focused web applications.
          Passionate about transforming ideas into real-world digital products
          using modern technologies.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex gap-5 justify-center md:justify-start">
          <a
            href="/Amit.pdf"
            download
            className="px-6 py-3 rounded-lg font-medium
              bg-gradient-to-r from-blue-600 to-cyan-500
              text-white shadow-lg shadow-blue-500/30
              hover:scale-[1.03] transition"
          >
            Download CV
          </a>

          <a
  href="mailto:amitkumarsah1311@gmail.com"
  className="
    px-6 py-3 rounded-lg font-medium text-white
    border border-blue-500/40
    bg-blue-500/10
    hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500
    hover:border-transparent
    shadow-md shadow-blue-500/20
    hover:scale-[1.03]
    transition
  "
  >
  Email Me
</a>

        </div>

        {/* SKILLS */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center md:justify-start">
          {["React", "Tailwind", "Node.js", "MongoDB", "MERN"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 text-sm rounded-full
                bg-white/5 border border-white/10
                text-gray-300 hover:text-white
                hover:border-blue-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center md:justify-end relative">
        {/* Glow ring */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full
          bg-gradient-to-tr from-blue-500/30 to-cyan-400/20 blur-3xl" />

        <img
          src="/portfolio.jpg"
          alt="Amit Kumar Sah"
          className="
          relative
          w-72 h-72
          md:w-96 md:h-96
          object-cover
          rounded-full
          border border-white/20
          shadow-2xl
          hover:scale-105
          transition-transform duration-300" />

      </div>
    </section>
  );
}

export default Hero;
