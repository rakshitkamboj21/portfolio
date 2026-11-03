"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

// ---- Your content: unchanged ----
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
    featured: false,
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
    featured: true,
  },
];

// ---- Animation variants ----
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.92, filter: "blur(12px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: i * 0.2,
      ease,
      when: "beforeChildren",
      staggerChildren: 0.09,
      delayChildren: 0.25,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 18 },
  },
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const reduce = useReducedMotion();

  // Mouse position inside the card (px) and normalised (0..1)
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const nx = useMotionValue(0.5);
  const ny = useMotionValue(0.5);

  // 3D tilt that follows the cursor, smoothed with springs
  const spring = { stiffness: 180, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(ny, [0, 1], [9, -9]), spring);
  const rotateY = useSpring(useTransform(nx, [0, 1], [-9, 9]), spring);

  // Spotlight that follows the cursor + a border that lights up near it
  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mx}px ${my}px, rgba(129,140,248,0.22), transparent 65%)`;
  const borderMask = useMotionTemplate`radial-gradient(240px circle at ${mx}px ${my}px, black, transparent 70%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    mx.set(x);
    my.set(y);
    nx.set(x / r.width);
    ny.set(y / r.height);
  }

  function onLeave() {
    mx.set(-300);
    my.set(-300);
    nx.set(0.5);
    ny.set(0.5);
  }

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      style={{ perspective: 1100 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduce ? undefined : { rotateX, rotateY }}
        whileHover={reduce ? undefined : { y: -10, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative h-full rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl p-8 overflow-hidden"
      >
        {/* Cursor spotlight */}
        <motion.div
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        />

        {/* Border that lights up around the cursor */}
        <motion.div
          style={{ WebkitMaskImage: borderMask, maskImage: borderMask }}
          className="pointer-events-none absolute inset-0 rounded-3xl border border-indigo-400/70 opacity-0 group-hover:opacity-100 transition duration-300"
        />

        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-indigo-500/10 via-purple-500/10 to-transparent" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Badge */}
          {project.featured && (
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-600/20 border border-indigo-500/30 px-4 py-2 text-xs text-indigo-300"
            >
              <motion.span
                className="inline-flex"
                animate={
                  reduce
                    ? undefined
                    : { rotate: [0, 72, 0], scale: [1, 1.35, 1] }
                }
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatDelay: 2.4,
                  ease: "easeInOut",
                }}
              >
                <FaStar />
              </motion.span>
              Featured Project
            </motion.div>
          )}

          {/* Title */}
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold group-hover:text-indigo-400 transition"
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-5 text-gray-400 leading-7"
          >
            {project.description}
          </motion.p>

          {/* Features: slide in one by one */}
          <div className="mt-6 space-y-3">
            {project.features.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={reduce ? undefined : { x: 6 }}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <FaCheckCircle className="text-indigo-400" />
                {item}
              </motion.div>
            ))}
          </div>

          {/* Tech: spring pop-in */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                variants={pillVariants}
                whileHover={reduce ? undefined : { y: -3, scale: 1.08 }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition group-hover:border-indigo-500/40"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-auto pt-10 flex gap-4"
          >
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              whileTap={{ scale: 0.95 }}
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium transition hover:bg-indigo-500"
            >
              {/* Light sweep on hover */}
              <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/25 transition-transform duration-700 group-hover/btn:translate-x-[350%]" />
              Live Demo
              <FaExternalLinkAlt
                size={12}
                className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
              />
            </motion.a>

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              whileTap={{ scale: 0.95 }}
              className="group/btn inline-flex items-center gap-2 rounded-xl border border-gray-700 px-5 py-3 text-sm transition hover:border-indigo-500 hover:text-indigo-400"
            >
              GitHub
              <FaGithub className="transition-transform duration-500 group-hover/btn:rotate-360" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  // Background glow drifts as you scroll through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [-80, 120]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Background Glow (your original) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]" />

      {/* Floating orbs */}
      {!reduce && (
        <>
          <motion.div
            style={{ y: glowY }}
            animate={{ x: [0, 50, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl"
          />
        </>
      )}

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
            <span className="relative inline-block text-indigo-500">
              Built
              {/* Underline draws itself */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="absolute left-0 -bottom-1 h-0.75 w-full origin-left rounded-full bg-indigo-500"
              />
            </span>
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
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}