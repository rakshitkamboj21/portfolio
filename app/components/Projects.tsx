"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const projects = [
  {
    title: "Smart Text Summarizer AI",
    description:
      "An AI-powered application that transforms lengthy documents into concise and meaningful summaries using Google's Gemini API.",

    features: [
      "JWT Authentication",
      "Gemini API Integration",
      "Responsive UI",
      "Fast AI Summaries",
    ],

    tech: ["Next.js", "Node.js", "Gemini API", "Tailwind"],

    live: "https://silver-gumdrop-dc212b.netlify.app/login.html",

    github: "https://github.com/rakshitkamboj21/smart-text-summarizer",

    featured: true,
  },

  {
    title: "FoundrKit",

    description:
      "A productivity platform for founders combining AI tools, automation, SaaS workflows and startup management into one dashboard.",

    features: [
      "AI Productivity",
      "FastAPI Backend",
      "Supabase Database",
      "Modern SaaS UI",
    ],

    tech: ["Supabase", "FastAPI", "AI Tools", "SaaS", "Tailwind"],

    live: "https://foundrkit.vercel.app/",

    github: "https://github.com/rakshitkamboj21/Foundrkit",

    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-black overflow-hidden">
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.25em] text-sm text-indigo-400">
            Projects
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Things I&apos;ve{" "}
            <span className="text-indigo-500">Built</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-8">
            A curated collection of projects demonstrating my expertise in
            full-stack development, scalable backend systems, and AI-powered
            applications.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative h-full rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl p-8 overflow-hidden"
            >
              {/* Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-indigo-500/10 via-purple-500/10 to-transparent" />

              {/* Border Glow */}

              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-indigo-500/40 transition-all duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Badge */}

                {project.featured && (
                  <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-600/20 border border-indigo-500/30 px-4 py-2 text-xs text-indigo-300">
                    <FaStar />
                    Featured Project
                  </div>
                )}

                {/* Title */}

                <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Features */}

                <div className="mt-6 space-y-3">
                  {project.features.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <FaCheckCircle className="text-indigo-400" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Tech */}

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition group-hover:border-indigo-500/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="mt-auto pt-10 flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium transition hover:bg-indigo-500"
                  >
                    Live Demo
                    <FaExternalLinkAlt size={12} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-700 px-5 py-3 text-sm transition hover:border-indigo-500 hover:text-indigo-400"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}