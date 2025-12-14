"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-transparent backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
      
        <a href="#" className="text-xl font-semibold text-grey-500">
         Portfólio - Rafael Barbosa
        </a>

      
        <div className="hidden md:flex items-center gap-8 text-neutral-300">
          <NavLink href="#about" label="Sobre" />
          <NavLink href="#projects" label="Projetos" />
          <NavLink href="#experience" label="Experiência" />
          <NavLink href="#contact" label="Contato" />
        </div>

      </div>
    </motion.nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      className="relative group"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.1 }}
    >
      <span className="text-neutral-300 group-hover:text-neutral-100 transition-colors">
        {label}
      </span>

     
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-200" />
    </motion.a>
  );
}
