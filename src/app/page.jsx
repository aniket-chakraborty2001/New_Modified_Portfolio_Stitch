import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden scroll-smooth bg-[#03162d] font-sans text-slate-100">
      <div className="fixed inset-0 bg-[radial-gradient(circle,rgba(32,202,218,0.12)_1px,transparent_1px)] [background-size:50px_50px]" />
      <div className="fixed inset-0 bg-[linear-gradient(180deg,rgba(3,22,45,0.2),rgba(3,22,45,0.95))]" />

      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Certificates />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
