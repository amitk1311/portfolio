import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const GITHUB_URL = "https://github.com/amitk1311";
const LINKEDIN_URL = "https://www.linkedin.com/in/amitk28/";

function Hero() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16 pt-10 pb-24 md:py-0">

      {/* LEFT SIDE */}
      <div className="text-center md:text-left relative order-2 md:order-1">

        {/* NAME */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight
          bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
          Amit Kumar Sah
        </h1>

        {/* SUBTITLE */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
          Final-year CSE student · Full-Stack Developer{" "}
          <span className="text-gray-500">(Frontend-focused)</span>
        </p>

        {/* TYPEWRITER */}
        <div className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300">
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
        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">
          I build clean, scalable, and performance-focused web applications.
          Passionate about transforming ideas into real-world digital products
          using modern technologies.
        </p>

        {/* SOCIAL ICONS - GitHub & LinkedIn */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
              bg-white/10 text-gray-300 hover:bg-white hover:text-black
              transition-all duration-300 shadow-md"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl sm:text-2xl" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
              bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white
              transition-all duration-300 shadow-md"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl sm:text-2xl" />
          </a>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-5 justify-center md:justify-start">
          <a
            href="/Amit.pdf"
            download
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium
              bg-gradient-to-r from-blue-600 to-cyan-500
              text-white shadow-lg shadow-blue-500/30
              hover:scale-[1.03] transition"
          >
            Download CV
          </a>
          <a
            href="mailto:amitkumarsah1311@gmail.com"
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium text-white
              border border-blue-500/40 bg-blue-500/10
              hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500
              hover:border-transparent shadow-md shadow-blue-500/20
              hover:scale-[1.03] transition"
          >
            Email Me
          </a>
        </div>

        {/* SKILLS */}
        <div className="mt-6 sm:mt-10 flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
          {["React", "Tailwind", "Node.js", "MongoDB", "MERN"].map((skill) => (
            <span
              key={skill}
              className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full
                bg-white/5 border border-white/10
                text-gray-300 hover:text-white hover:border-blue-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center md:justify-end relative order-1 md:order-2">
        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full
          bg-gradient-to-tr from-blue-500/30 to-cyan-400/20 blur-3xl" />
        <img
          src="/portfolio.png?v=1"
          alt="Amit Kumar Sah"
          className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full
            border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}

export default Hero;
