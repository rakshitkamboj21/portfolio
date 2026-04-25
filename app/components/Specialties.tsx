"use client";

import { motion } from "framer-motion";

const specialties = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, high-performance interfaces using React, Next.js, Tailwind CSS, and modern UI principles.",
  },
  {
    title: "Backend & APIs",
    description:
      "Designing secure, scalable backends with Node.js, Express, databases, and REST / AI-powered APIs.",
  },
  {
    title: "AI-Powered Solutions",
    description:
      "Integrating AI models, automation, and intelligent systems to solve real-world business problems.",
  },
];

export default function Specialties() {
  return (
    <section className="relative py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="uppercase tracking-widest text-sm text-indigo-400">
            Specialties
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            What I <span className="text-indigo-500">Do Best</span>
          </h2>
         <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            I focus on building scalable, user-centric, and performance-driven
            applications using modern technologies.
          </p>
        </motion.div>
        <div className="mt-16 h-px w-24 mx-auto bg-indigo-500/30" />

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 transition"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-indigo-600/10 opacity-0 hover:opacity-100 blur-2xl transition" />

              <h3 className="relative z-10 text-xl font-semibold">
                {item.title}
              </h3>
              <p className="relative z-10 mt-4 text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
