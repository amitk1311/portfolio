export default function WhatIDo() {
  return (
    <section
  className="relative z-10 max-w-6xl mx-auto px-6 py-20"

>


      {/* ===================== */}
      {/* PAGE HEADING */}
      {/* ===================== */}
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 relative inline-block">
        What I Do
        <span className="absolute -bottom-2 left-0 h-[3px] w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
      </h1>

      {/* INTRO CARD */}
      <div className="animated-border glow-card p-6 mb-20">
        <p className="text-gray-300 leading-relaxed max-w-4xl">
          I build modern, scalable, and user-focused software applications by
          combining strong computer science fundamentals with practical full-stack
          development. My work focuses on clean architecture, performance, and
          real-world usability.
        </p>
      </div>

      {/* ===================== */}
      {/* CORE CAPABILITIES */}
      {/* ===================== */}
      <h2 className="text-2xl font-semibold text-white mb-8">
        Core Capabilities
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {[
          {
            title: "Frontend Development",
            text:
              "I design and build responsive, intuitive user interfaces using React and Tailwind CSS. I focus on component-based architecture, clean UI design, and smooth user experience across devices.",
          },
          {
            title: "Backend & API Development",
            text:
              "I develop secure and scalable RESTful APIs using Node.js and Express. My backend work includes authentication, authorization, structured routing, and clean business logic.",
          },
          {
            title: "Database Design & Management",
            text:
              "I work with MongoDB and SQL databases, focusing on schema design, efficient data storage, CRUD operations, and optimized querying for performance and scalability.",
          },
          {
            title: "AI-Integrated Applications",
            text:
              "I integrate AI capabilities into web applications using Google Gemini AI to generate intelligent, personalized outputs such as recommendations, plans, and dynamic content.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="animated-border glow-card p-7
                       hover:-translate-y-1 hover:shadow-blue-500/20
                       transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* ===================== */}
      {/* HOW I BUILD SOFTWARE */}
      {/* ===================== */}
      <h2 className="text-2xl font-semibold text-white mb-8">
        How I Build Software
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Understand the Problem",
            text:
              "I start by clearly understanding requirements and breaking complex problems into smaller, manageable parts before writing any code.",
          },
          {
            title: "Design & Implement",
            text:
              "I design clean system flows and implement solutions using best practices, focusing on correctness, readability, and scalability.",
          },
          {
            title: "Test & Improve",
            text:
              "I test features thoroughly, debug issues, and refine implementations through iteration and feedback to improve quality.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="animated-border glow-card p-6
                       hover:-translate-y-1 hover:shadow-cyan-500/20
                       transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* ===================== */}
      {/* TOOLS & TECHNOLOGIES */}
      {/* ===================== */}
      <h2 className="text-2xl font-semibold text-white mb-6">
        Tools & Technologies
      </h2>

      <div className="animated-border glow-card p-6 max-w-4xl">
        <p className="text-gray-300 leading-relaxed text-sm">
          <span className="text-white font-medium">Languages & Core:</span> JavaScript, Data Structures, OOP  
          <br />
          <span className="text-white font-medium">Frontend:</span> React, Tailwind CSS  
          <br />
          <span className="text-white font-medium">Backend:</span> Node.js, Express, REST APIs  
          <br />
          <span className="text-white font-medium">Databases:</span> MongoDB, SQL  
          <br />
          <span className="text-white font-medium">AI & Tools:</span> Google Gemini AI, Git, GitHub, Postman  
        </p>
      </div>
    </section>
  );
}
