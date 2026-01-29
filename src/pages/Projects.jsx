export default function Projects() {
  const featuredProjects = [
    {
      title:
        "Introto AI — Intelligent Communication & Skill Guidance Platform",
      tech: "MERN Stack · Google Gemini AI · JWT · MongoDB · Charts.js",
      points: [
        "Built an AI-powered MERN application that generates personalized skill roadmaps based on user goals using Gemini AI.",
        "Implemented secure authentication using JWT, bcrypt, and role-based access control.",
        "Designed an interactive React frontend with dynamic AI responses and skill tracking features.",
        "Configured MongoDB to store user profiles, AI recommendations, and roadmap progress efficiently.",
        "Developed an analytics dashboard using Charts.js to visualize learning progress and AI suggestion effectiveness.",
        "Structured frontend and backend separately for scalability and maintainability.",
      ],
    },
   {
  title: "AI Fitness Coach App",
  tech: "React · Tailwind CSS · Google Gemini AI",
  description:
    "An intelligent fitness assistant that generates personalized workout and diet plans using AI based on individual user goals and health details.",
  points: [
    "AI-powered plan generation using Google Gemini AI in Markdown format",
    "Personalized input form collecting fitness goal, height, weight, experience level, and diet preference",
    "Indian-friendly diet suggestions with realistic meal planning",
    "Bodyweight-focused workout routines suitable for home training",
    "Clean, responsive UI built with Tailwind CSS for mobile and desktop",
    "Formatted AI responses rendered using react-markdown for better readability",
  ],
},


    {
      title: "Authentication System",
      tech: "React · Node.js · Express · MongoDB · JWT",
      description:
        "A complete authentication system with secure login, signup, protected routes, password hashing, JWT-based authorization, and role-based access control.",
    },
    {
      title: "News App",
      tech: "React · REST APIs · JavaScript",
      description:
        "A dynamic news application that fetches real-time news from external APIs, supports category-based filtering, and provides a clean, responsive user interface.",
    },
    {
      title: "Sorting Visualizer",
      tech: "JavaScript · HTML · CSS",
      description:
        "A visual tool to demonstrate classic sorting algorithms like Bubble, Insertion, Selection, Merge, and Quick Sort with step-by-step animations to improve algorithmic understanding.",
    },
    {
      title: "Dice Game",
      tech: "React · JavaScript",
      description:
        "A responsive and interactive dice game allowing users to select numbers, roll dice, and test their luck across desktop and mobile devices.",
    },
  ];

  return (
    <section
 className="relative z-10 max-w-6xl mx-auto px-6 py-20"

>

      {/* ===================== */}
      {/* HEADER */}
      {/* ===================== */}
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 relative inline-block">
        Projects
        <span className="absolute -bottom-2 left-0 h-[3px] w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
      </h1>

      <div
  className="relative mb-14 rounded-2xl border border-white/10 bg-white/5
             backdrop-blur p-6 shadow-xl shadow-indigo-500/20 overflow-hidden"
>
  {/* Accent gradient strip */}
   <span className="absolute left-0 top-0 h-full w-[3px]
                   bg-gradient-to-b from-blue-400 via-cyan-400 to-indigo-500" />

   {/* Soft glow overlay */}
   <span className="pointer-events-none absolute inset-0 rounded-2xl
                   bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />

   <p className="relative text-gray-300 leading-relaxed">
    I enjoy building real-world applications that combine
    <span className="text-white font-medium"> clean UI</span>,
    <span className="text-white font-medium"> structured backend logic</span>,
    and
    <span className="text-white font-medium"> practical problem-solving</span>.
    Below are some of my key projects, along with learning-based and
    experimental builds that helped strengthen my engineering fundamentals.
   </p>
  </div>


      {/* ===================== */}
      {/* FEATURED PROJECTS */}
      {/* ===================== */}
      <h2 className="text-2xl font-semibold text-white mb-8">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project, i) => (
          <div
            key={i}
            className="relative bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl
                       shadow-indigo-500/30 transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Gradient glow overlay */}
            <span className="pointer-events-none absolute inset-0 rounded-2xl
                             bg-gradient-to-br from-indigo-500/15 via-transparent to-cyan-500/15"></span>

            <div className="relative">
              <h3 className="text-lg font-semibold text-white mb-1">
                {project.title}
              </h3>

              <p className="text-sm text-cyan-400 mb-4">
                {project.tech}
              </p>

              {project.points ? (
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ===================== */}
      {/* MINI & LEARNING PROJECTS */}
      {/* ===================== */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Learning & Mini Projects
        </h2>

        <div
  className="relative rounded-2xl border border-white/10 bg-white/5
             backdrop-blur p-6 shadow-xl shadow-cyan-500/20
             overflow-hidden"
>
  {/* Left accent glow */}
  <span className="absolute left-0 top-0 h-full w-[3px]
                   bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500" />

  {/* Soft background glow */}
  <span className="pointer-events-none absolute inset-0 rounded-2xl
                   bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10" />

  <p className="relative text-gray-300 leading-relaxed">
    Alongside major projects, I have built numerous
    <span className="text-white font-medium"> mini projects</span> while
    learning
    <span className="text-white font-medium"> JavaScript</span>,
    <span className="text-white font-medium"> React</span>, and
    <span className="text-white font-medium"> web fundamentals</span>.
    These include DOM manipulation apps, logic-based games, reusable UI
    components, and small feature-based experiments that strengthened my
    understanding of core concepts and problem-solving patterns.
  </p>
</div>

      </div>

      {/* ===================== */}
      {/* CTA */}
      {/* ===================== */}
      <div className="mt-14 text-center">
        <p className="text-gray-400 mb-4">
          Explore more projects, experiments, and learning builds on my GitHub.
        </p>

        <a
          href="https://github.com/amitk1311"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-gradient-to-r from-blue-500 to-cyan-500 text-black
                     font-medium hover:opacity-90 transition"
        >
          Visit GitHub Repository
        </a>
      </div>
    </section>
  );
}
