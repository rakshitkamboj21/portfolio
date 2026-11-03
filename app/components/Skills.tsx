"use client";

import { motion, easeInOut } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: [ "Python", "C++", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs","FastAPI"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Supabase","PostgreSQL", "SQL"],
  },
  {
    title: "AI & APIs",
    skills: ["Google Gemini API", "AI Integrations",],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Render", "Vercel"],
  },
  {
    title: "Core Competencies",
    skills: ["DSA", "Debugging", "Problem Solving",],
  },
];

// Animation variants (same style as About / Projects)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 , ease: easeInOut},
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay:0.2,duration: 0.7}}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-indigo-400">
            Skills
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Technologies & Tools I{" "}
            <span className="text-indigo-500">Work With</span>
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
                variants={cardVariants}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition"
            >
              <h3 className="text-lg font-semibold mb-4 text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-full text-sm text-gray-300 border border-white/10 bg-black/40 hover:border-indigo-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}