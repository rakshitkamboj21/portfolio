"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home"className="relative min-h-screen flex items-center bg-black overflow-hidden">
      
      {/* Floating glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-purple-600/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base md:text-lg uppercase tracking-widest text-white font-semibold">
            This is your developer
        </p>


         <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Rakshit <br />
          <span className="block mt-2 text-4xl md:text-5xl font-bold 
            bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent animate-gradient">
            Full-Stack Developer
          </span>
        </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            I design and build modern web applications, AI-powered systems,
            and digital products that solve real-world problems.
          </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
  {/* Discuss Projects */}
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white"
  >
    Discuss Projects
  </motion.button>

  {/* View Portfolio */}
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={() =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="px-6 py-3 rounded-xl border border-gray-700 hover:border-indigo-500 transition text-gray-300"
  >
    View Portfolio →
  </motion.button>
</div>
        </motion.div>

        {/* Right (image placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
 <div className="relative w-80 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-lg hover:shadow-indigo-500/40 transition-shadow duration-300">
 <motion.div 
     whileHover={{scale:1.03}}/>
  <Image
    src="/profile.jpeg"
    width={500}
    height={500}
    alt="Rakshit profile photo"
    className="object-cover object-top"
    priority
  />
</div>

</motion.div>

</div>
  </section>
  );
}
