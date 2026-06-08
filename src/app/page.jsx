import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Welcome from "../components/Welcome";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip scroll-smooth bg-[#050505] font-sans text-white">
      <Welcome />
      <div className="fixed inset-0 bg-[radial-gradient(circle,rgba(250,204,21,0.09)_1px,transparent_1px)] [background-size:50px_50px]" />
      <div className="fixed inset-0 bg-[linear-gradient(135deg,#050505_0%,#111111_42%,#1d1d1d_72%,#2a2a2a_100%)]" />

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
