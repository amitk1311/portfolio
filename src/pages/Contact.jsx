import { motion } from "framer-motion";
import { useState } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const email = "amitkumarsah1311@gmail.com";
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    e.target.reset();
  };

  return (
    <>
      {/* ===================== */}
      {/* FULL WIDTH BACKGROUND */}
      {/* ===================== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"

      >
        {/* ===================== */}
        {/* CENTERED CONTENT */}
        {/* ===================== */}
        <div className="max-w-6xl mx-auto px-6 text-gray-200">

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 relative inline-block">
            Contact
            <span className="absolute -bottom-2 left-0 h-[3px] w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
          </h1>

          <p className="max-w-2xl text-gray-300 leading-relaxed mb-16">
            Feel free to reach out for opportunities, collaborations, or meaningful
            discussions around software development and technology.
          </p>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* ===================== */}
            {/* LEFT SIDE */}
            {/* ===================== */}
            <div className="space-y-6">
              <div className="animated-border glow-card p-6 flex items-center gap-4">
                <MdEmail className="text-blue-400 text-2xl" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">{email}</p>
                </div>
              </div>

              <div className="animated-border glow-card p-6 flex items-center gap-4">
                <MdLocationOn className="text-red-400 text-2xl" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">
                    Rajpura, Punjab · Open to relocation
                  </p>
                </div>
              </div>

              <div className="animated-border glow-card p-6">
                <p className="text-sm text-gray-400 mb-1">Availability</p>
                <p className="text-green-400 font-medium">
                  Open for roles, internships & collaborations
                </p>
              </div>

              <div className="pt-4">
                <p className="text-gray-400 mb-3">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/amitk1311"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full
                               bg-white/10 hover:bg-white hover:text-black
                               transition-all duration-300 shadow-md"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amitk28/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full
                               bg-blue-600/20 text-blue-400
                               hover:bg-blue-600 hover:text-white
                               transition-all duration-300 shadow-md"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            {/* ===================== */}
            {/* RIGHT SIDE — FORM */}
            {/* ===================== */}
            <div className="animated-border glow-card p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3
                               text-white placeholder-gray-500 outline-none
                               focus:border-blue-400 transition"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    required
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3
                               text-white placeholder-gray-500 outline-none
                               focus:border-blue-400 transition"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                             text-white placeholder-gray-500 outline-none
                             focus:border-blue-400 transition"
                />

                <textarea
                  rows="5"
                  placeholder="Message..."
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                             text-white placeholder-gray-500 outline-none resize-none
                             focus:border-blue-400 transition"
                />

                <button
                  type="submit"
                  className="mt-2 px-6 py-2 rounded-full border border-white/20
                             hover:bg-white hover:text-black
                             transition-all duration-300"
                >
                  Let’s talk
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===================== */}
      {/* SUCCESS MODAL */}
      {/* ===================== */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1b1f26] border border-white/10 rounded-xl p-6 w-[90%] max-w-md shadow-xl">
            <p className="text-white text-lg mb-6">
              Thank you. I will get back to you ASAP.
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded-full bg-blue-500/20 border border-blue-400
                           text-blue-300 hover:bg-blue-500 hover:text-white transition"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
