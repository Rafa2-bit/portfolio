import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-28 bg-neutral-950 text-neutral-200 border-t border-neutral-900"
    >
   
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div className="relative z-10">

          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-6 text-neutral-100"
          >
            Sobre mim
          </motion.h2>

  
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-neutral-400 leading-relaxed mb-8 text-lg"
          >
            Me chamo Rafael Barbosa Candido, tenho 20 anos, nasci e cresci na cidade de São José dos Campos, SP, Brasil. Sou estudante de Análise e Desenvolvimento de Sistemas na Fatec-Jessen Vidal, em SJC.
                    Sou uma pessoa apaixonada por tecnologia desde criança e sempre me interessei pela área de TI, principalmente na área de programação. O que me despertou esse interesse, foi quando, ainda criança, me fazia a pergunta:"Como essas coisas realmente funcionam?". Desde então eu venho cada vez mais estudando e me atualizando em programação e finalmente desenvolver os meus próprios projetos.
                    Cada vez mais que me aprofundo na área, mais me interesso e cada vez mais sinto essa fome de participar de novos desafios e projetos.
          </motion.p>


          
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="space-y-4"
          >
            {[
              "Python, JavaScript, TypeScript, PHP",
              "React, Vue.js, Node.js, Next.js, React.js, Nuxt.js, Tailwind, Bootstrap, Vuetify",
              "MySQL, PostgreSQL, MongoDB",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="group flex items-start gap-3 p-3 rounded-lg border border-neutral-800/50 hover:border-blue-500/50 transition-colors"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-500/80 group-hover:bg-blue-400 transition" />
                <span className="text-neutral-300 group-hover:text-neutral-100 transition">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            href="/src/assets/Currículo_Rafael.pdf"
            className="inline-block mt-10 px-6 py-3 rounded-lg border border-neutral-700 hover:border-blue-500 text-neutral-200 hover:text-blue-400 transition-colors"
          >
           Ver Currículo
          </motion.a>
        </div>


        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex ps-40 justify-center relative z-10"
        >
          <div className="relative group">
          
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 blur transition-all" />

              <img src="/src/assets/20241216_124225.jpg" alt="" className="relative bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-600"/>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

