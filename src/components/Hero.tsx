import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-32 flex flex-col items-center text-center px-6 relative">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold tracking-tight text-grey-100"
      >
        Rafael Barbosa Candido
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl"
      >
        Desenvolvedor web Fullstack
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-900 transition"
        >
          Ver Projetos
        </a>

        <a
          href="#about"
          className="px-6 py-3 border border-gray-400 rounded-md font-medium hover:bg-gray-900 transition"
        >
          Sobre Mim
        </a>
      </motion.div>
    </section>
  );
}
