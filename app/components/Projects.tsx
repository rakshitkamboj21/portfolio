"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Smart Text Summarizer AI",
    description:
      "An AI-powered web app that summarizes long documents into concise, meaningful text using modern NLP models.",
    tech: ["Next.js", "Node.js", "Gemini API", "Tailwind"],
    live: "https://silver-gumdrop-dc212b.netlify.app/login.html",
    github: "https://github.com/rakshitkamboj21/smart-text-summarizer",
  },
  {
    title: "AI Career Counselor",
    description:
      "An intelligent career guidance system that helps users choose career paths based on skills, interests, and goals.",
    tech: ["React", "Python", "Gemini API", "MongoDB"],
    live: "null",
    github: "null",
  },
  {
    title: "FoundrKit",
    description:
      "An all-in-one productivity and AI toolkit designed to help solo founders manage ideas, execution, and growth.",
    tech: ["SupaBase" , "FastApi", "AI Tools", "SaaS", "Tailwind"],
    live: "https://foundrkit.vercel.app/",
    github: "https://github.com/rakshitkamboj21/Foundrkit",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-widest text-sm text-indigo-400">
            Projects
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Things I’ve <span className="text-indigo-500">Built</span>
          </h2>
          <p className="mt-6 text-gray-400">
            A selection of projects that showcase my ability to design, build,
            and ship real-world applications.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col justify-between"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-indigo-600/10 opacity-0 hover:opacity-100 blur-2xl transition" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="relative z-10 mt-8 flex gap-4">
                <a
                  href={project.live}
                  className="text-sm px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-indigo-500 transition"
                  aria-label="Linkdein"
                >
                  GitHub
                  <FaGithub className="inline ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
