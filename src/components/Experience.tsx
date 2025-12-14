"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "Desenvolvedor Frontend",
    company: "DBSNOOP TECNOLOGIA EM BANCO DE DADOS LTDA.",
    period: "set 2025 — nov 2025",
    description:
      "Plataforma para análise de performance de banco de dados; DBA autônomo, utilizando Machine Learning e IA integrada para Análise de query e performance de hardware;  Boas práticas de UI/UX, utilizando Vue.js e Vuetify;  PHP para criar rotas da API e melhorar o fluxo de dados entre o banco de dados, MySQL, API e frontend para exibição de informação na interface do usuário; Correção de bugs para melhoria de performance; Melhorias na estilização da interface gráfica com base em feedbacks dos clientes.",
  },
];

const education = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    school: "FATEC - Jessen Vidal",
    period: "jul 2024 — Atual",
    description: "curso orientado à prática, focado em projetar, desenvolver, testar e manter sistemas de software que resolvem problemas reais de negócio. Programação (estruturas de dados, orientação a objetos, múltiplas linguagens), Engenharia de Software (levantamento de requisitos, modelagem, UML, padrões), Banco de Dados (modelagem, SQL, normalização, SGBDs), Desenvolvimento Web e Sistemas (frontend, backend, APIs), Arquitetura e Infraestrutura (sistemas operacionais, redes, noções de cloud), Qualidade e Segurança (testes, versionamento, princípios de segurança). Gestão e Negócios (metodologias ágeis, noções de gestão de projetos e TI)", 
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-28 bg-neutral-950 text-neutral-200 border-t border-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-6">

      
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-neutral-100"
        >
          Experiência & Formação
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-neutral-200">
              Experiência
            </h3>

            <div className="relative border-l border-neutral-800 pl-6 space-y-12">

              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                 
                  <div className="absolute -left-3.5 w-3 h-3 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30" />

                  <h4 className="text-xl font-semibold text-neutral-100">
                    {item.role}
                  </h4>

                  <p className="text-neutral-400 text-sm">{item.company}</p>
                  <p className="text-neutral-500 text-xs mb-3">{item.period}</p>

                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-neutral-200">
              Formação
            </h3>

            <div className="relative border-l border-neutral-800 pl-6 space-y-12">

              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
               
                  <div className="absolute -left-3.5 w-3 h-3 bg-purple-600 rounded-full shadow-lg shadow-purple-600/30" />

                  <h4 className="text-xl font-semibold text-neutral-100">
                    {item.degree}
                  </h4>

                  <p className="text-neutral-400 text-sm">{item.school}</p>
                  <p className="text-neutral-500 text-xs mb-3">{item.period}</p>

                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
