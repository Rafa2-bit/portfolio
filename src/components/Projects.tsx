"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "EasyScrum",
    description: "Site informativo e educacional sobre a métodologia Scrum.",
    image: "/assets/LogoEasyScrum.png",
    tags: ["HTML", "CSS", "Javascript", "Python", "Flask", "MySQL"],
    github: "https://github.com/EquipeEcho/EasyScrum",
  },
  {
    title: "BotEcho",
    description: "Ambiente de Desenvolvimento Integrado com suporte a IA para análise de código e geração de gráficos com Python e Matplotlib.",
    image: "/assets/logoBotecho.png",
    tags: ["Java", "Ollama", "MySQL"],
    github: "https://github.com/EquipeEcho/botEcho",
  },
  {
    title: "EchoNova",
    description: "Uma plataforma com o objetivo de aplicar entrevistas estruturadas com empresas reais para gerar diagnósticos automáticos e inteligentes que apoiem decisões estratégicas no mercado de treinamentos corporativos.",
    image: "/assets/logoEchonova.png",
  tags: ["Javascripyt", "TypeScript", "React", "Node.js", "MongoDB", "Ollama"],
    github: "https://github.com/EquipeEcho/EchoNova",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-28 bg-neutral-950 text-neutral-200 border-t border-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-neutral-100"
        >
          Projetos
        </motion.h2>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  index,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all"
    >
     
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-linear-to-br from-blue-600 to-purple-600 blur-xl" />

   
      <div className="w-full h-80 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={title}
          className=" w-full h-full object-cover"
        />
      </div>

   
      <div className="p-5">
        <h3 className="text-xl font-semibold text-neutral-100 mb-2">
          {title}
        </h3>

        <p className="text-neutral-400 text-sm mb-4">{description}</p>

    
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded bg-neutral-800 text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        
        <div className="flex gap-4">
         

          {github && (
            <a
              href={github}
              className="flex-1 py-2 text-center rounded border border-neutral-700 hover:border-neutral-500 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
