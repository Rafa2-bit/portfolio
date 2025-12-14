import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-12 bg-neutral-950 text-gray-100 overflow-hidden"
    >
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-indigo-950/25 rounded-full blur-3xl top-7 left-10" />
        <div className="absolute w-72 h-72 bg-purple-950/25 rounded-full blur-3xl bottom-5 right-10" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
       
        <h2 className="text-4xl md:text-5xl font-semibold mb-6  translate-y-4 animate-fade-up">
          Entre em Contato
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-12 translate-y-4 animate-fade-up animation-delay-200">
          Pode me chamar diretamente pelos canais abaixo. Respondo rápido.
        </p>


        <div className="flex flex-col gap-6 translate-y-4 animate-fade-up animation-delay-300">

           <ContactItem
            icon={<Phone className="w-6 h-6" />}
            label="Telefone"
            value="Whatsapp"
            href="https://wa.me/5512996418192"
          />

     
          <ContactItem
            icon={<Mail className="w-6 h-6" />}
            label="Email"
            value="faelbc10@gmail.com"
            href="mailto:faelbc10@gmail.com"
          />

      
          <ContactItem
            icon={<Linkedin className="w-6 h-6" />}
            label="LinkedIn"
            value="Rafael Candido"
            href="http://www.linkedin.com/in/rafael-candido-155705317"
          />


          <ContactItem
            icon={<Github className="w-6 h-6" />}
            label="GitHub"
            value="Rafa2-bit"
            href="https://github.com/Rafa2-bit"
          />

        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        group
        flex items-center gap-4
        bg-gray-900/60 border border-white/10
        rounded-xl p-5 
        hover:border-indigo-500/30
        hover:bg-gray-900/80
        transition-all duration-300
        backdrop-blur-lg
      "
    >
 
      <div
        className="
          p-3 rounded-lg bg-gray-800/50 
          text-indigo-400 
          transition-all duration-300 
          group-hover:text-indigo-300 
          group-hover:scale-110 
          group-hover:shadow-[0_0_20px_-4px_rgba(99,102,241,0.5)]
        "
      >
        {icon}
      </div>

      <div className="text-left">
        <span className="text-gray-400 text-sm">{label}</span>
        <div className="text-lg text-indigo-400 group-hover:text-indigo-300 transition">
          {value}
        </div>
      </div>
    </a>
  );
}
