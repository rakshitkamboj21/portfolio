"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-widest text-sm text-indigo-400"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-4xl md:text-5xl font-bold"
        >
          Let’s <span className="text-indigo-500">Build Something</span> Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-gray-400"
        >
          Have a project idea, startup concept, or need a developer to bring
          your vision to life? I’m open to opportunities and collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:rakshitkamboj21@gmail.com"
            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium"
          >
            Email Me
          </a>

          <a
            href="/Updated Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border border-gray-700 hover:border-indigo-500 transition text-gray-300"
          >
            View Resume
          </a>

        <a 
           href="/Updated Resume.pdf"
           download
           className="px-8 py-3 rounded-xl border border-gray-700 hover:border-indigo-500 transition text-gray-300"
        >
          Download Resume
        </a>
        </motion.div>
      </div>
    </section>
  );
}
