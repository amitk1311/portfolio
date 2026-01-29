export default function About() {
  return (
    <section
  className="relative z-10 max-w-6xl mx-auto px-6 py-20"

>


      {/* ===================== */}
      {/* INTRO SUMMARY */}
      {/* ===================== */}
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-10 relative inline-block">
        About Me
        <span className="absolute -bottom-2 left-0 h-[3px] w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
      </h1>

      <div className="glow-card p-6 mb-16">
        <p className="leading-relaxed text-gray-300">
          I am a Computer Science Engineering graduate with a strong foundation
          in Data Structures, Object-Oriented Programming, and full-stack MERN
          development. I enjoy building real-world software solutions that are
          scalable, user-focused, and performance-driven.
        </p>
      </div>

      {/* ===================== */}
      {/* WHAT I’VE WORKED ON */}
      {/* ===================== */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-4">
          What I’ve Worked On
        </h2>

        <div className="glow-card p-6">
          <p className="text-gray-300 leading-relaxed">
            I have built and deployed multiple real-world projects such as a
            <span className="text-white font-medium"> News App</span>, a
            <span className="text-white font-medium"> Sorting Visualizer</span>,
            and interactive web applications. Through these projects, I worked
            extensively with
            <span className="text-white font-medium">
              {" "}React, Node.js, Express, and MongoDB
            </span>
            , focusing on clean UI, structured backend logic, and real-world
            problem solving.
          </p>
        </div>
      </div>

      {/* ===================== */}
      {/* EDUCATION */}
      {/* ===================== */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Education
        </h2>

        <div className="glow-card p-6">
          <p className="text-lg font-semibold text-white">
            Chitkara University, Punjab
          </p>
          <p className="text-gray-400 mt-1">
            Bachelor of Technology · Computer Science Engineering
          </p>
          <p className="text-gray-500 text-sm mt-1">
            2022 – 2026
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm">
            My academic journey strengthened my understanding of computer
            science fundamentals and prepared me to apply theory to practical,
            real-world software development.
          </p>
        </div>
      </div>

      {/* ===================== */}
      {/* MY STRENGTHS */}
      {/* ===================== */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-6">
          My Strengths
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "How I Think",
              text:
                "I approach problems logically by breaking them into smaller parts, focusing on correctness first, and then optimizing for performance and scalability.",
            },
            {
              title: "How I Learn",
              text:
                "I learn by building. I study concepts through implementation, documentation, real-world use cases, and continuous iteration.",
            },
            {
              title: "How I Work",
              text:
                "I work with discipline and consistency, write clean and readable code, test thoroughly, and actively improve through feedback.",
            },
          ].map((item, i) => (
            <div key={i} className="glow-card p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== */}
      {/* TECHNICAL OVERVIEW */}
      {/* ===================== */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Technical Overview
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Frontend", "React, Tailwind CSS, component-based architecture, performance optimization."],
            ["Backend", "REST APIs, Node.js, Express, authentication, scalable server logic."],
            ["Databases", "MongoDB, SQL, schema design, CRUD operations, query optimization."],
            ["Tools & Learning", "Git, GitHub, Postman, AI & ML exploration, continuous learning."],
          ].map(([title, text], i) => (
            <div key={i} className="glow-card p-5">
              <h3 className="text-white font-medium mb-2">{title}</h3>
              <p className="text-gray-300 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== */}
      {/* PROFESSIONAL FOCUS */}
      {/* ===================== */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Professional Focus
        </h2>

        <div className="glow-card p-6">
          <p className="text-gray-300 leading-relaxed">
            I enjoy working on real-world software systems where I can contribute
            to development, learn from experienced engineers, and improve through
            continuous iteration and feedback. My focus is on building clean,
            scalable, and user-focused solutions using modern web technologies.
          </p>
        </div>
      </div>

    </section>
  );
}
