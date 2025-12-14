import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
      <Navbar/>
      <main className="py-20 pb-0">
        {children}
      </main>
    <Footer/>
    </div>
  );
}