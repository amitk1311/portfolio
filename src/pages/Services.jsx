import { motion } from "framer-motion";

function Services() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-semibold mb-12 text-center">
          What I Do
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition">
            <h3 className="text-xl font-semibold mb-3">
              Frontend Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building modern, responsive user interfaces using React and Tailwind CSS.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition">
            <h3 className="text-xl font-semibold mb-3">
              Backend & APIs
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designing REST APIs using Node.js and Express with authentication and logic.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition">
            <h3 className="text-xl font-semibold mb-3">
              Database Management
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Working with MongoDB and SQL for schema design and efficient queries.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition">
            <h3 className="text-xl font-semibold mb-3">
              Tools & Workflow
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Using Git, GitHub, Postman, and deployment tools to ship applications.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
