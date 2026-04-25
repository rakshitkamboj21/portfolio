"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Understanding the Problem",
    description:
      "I start by deeply understanding the problem, user needs, and business goals before writing a single line of code.",
  },
  {
    step: "02",
    title: "Planning & Architecture",
    description:
      "I design scalable system architecture, choose the right tech stack, and plan the implementation clearly.",
  },
  {
    step: "03",
    title: "Development & Iteration",
    description:
      "I build features iteratively with clean code, performance in mind, and constant improvements.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description:
      "I test thoroughly, optimize performance, and deploy reliable solutions ready for real-world usage.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* About Me */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-24 max-w-3xl"
>
  <p className="uppercase tracking-widest text-sm text-indigo-400">
    About Me
  </p>

  <h2 className="mt-4 text-4xl md:text-5xl font-bold">
    Who <span className="text-indigo-500">I Am</span>
  </h2>

  <p className="mt-6 text-gray-400 leading-relaxed">
    I’m Rakshit Kamboj, a full-stack developer and problem solver who enjoys building
    modern web applications and AI-powered products. I’m passionate about
    turning ideas into real, usable solutions and continuously learning new
    technologies to improve my craft.
  </p>

  <p className="mt-4 text-gray-400 leading-relaxed">
    I’m currently focused on building real-world projects, exploring AI-driven
    systems, and looking for opportunities where I can contribute, grow, and
    create impact.
  </p>
</motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            My <span className="text-indigo-500">Work Process</span>
          </h2>

          <p className="mt-6 text-gray-400">
            I follow a structured yet flexible approach to building software —
            focusing on clarity, scalability, and long-term impact.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8"
            >
              <span className="absolute top-6 right-6 text-5xl font-bold text-white/5">
                {item.step}
              </span>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400 max-w-md">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
