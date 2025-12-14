import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import BackgroundAnimado from "../components/BackgroundAnimado";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        <BackgroundAnimado />
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </MainLayout>
  );
}