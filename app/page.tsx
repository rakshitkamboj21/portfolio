import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialties  from "./components/Specialties";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer"
import Skills from "./components/Skills";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specialties/>
      <About />
       <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
