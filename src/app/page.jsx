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
import MouseTrail from "../components/MouseTrail";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip scroll-smooth bg-white font-sans text-[#172033]">
      <Welcome />
      <div className="fixed inset-0 bg-[radial-gradient(circle,rgba(14,165,233,0.13)_1px,transparent_1px)] [background-size:50px_50px]" />
      <div className="fixed inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(236,253,245,0.78)_34%,rgba(239,246,255,0.78)_68%,rgba(253,244,255,0.82))]" />
      <MouseTrail />

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
