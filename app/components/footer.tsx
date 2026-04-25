"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Rakshit kamboj. All rights reserved.
        </p>

    {/* Right */}
<div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">

  {/* GitHub */}
  <a
    href="https://github.com/rakshitkamboj21"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="flex items-center gap-2 hover:text-white transition"
  >
    <FaGithub className="text-lg" />
    <span>GitHub</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/rakshit-kamboj-302b3b370"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex items-center gap-2 hover:text-white transition"
  >
    <FaLinkedin className="text-lg" />
    <span>LinkedIn</span>
  </a>

  {/* Email */}
  <a
    href="mailto:rakshitkamboj21@gmail.com"
    aria-label="Email"
    className="flex items-center gap-2 hover:text-white transition"
  >
    <MdEmail className="text-lg" />
    <span>rakshitkamboj21@gmail.com</span>
  </a>

  {/* Phone */}
  <a
    href="tel:+917020453001"
    aria-label="Phone"
    className="flex items-center gap-2 hover:text-white transition"
  >
    <MdPhone className="text-lg" />
    <span>7020453001</span>
  </a>

</div>
      </div>
    </footer>
  );
}
