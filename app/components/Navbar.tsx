"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["about", "skills", "projects", "contact",];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          Rak<span className="text-indigo-500">shit</span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition ${
                active === item
                  ? "text-indigo-500 font-medium"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-sm text-white"
        >
          Discuss Projects
        </button>
      </div>
    </motion.nav>
  );
}
