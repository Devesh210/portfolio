import NavbarComp from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

function App() {
  return (
    <>
      <NavbarComp />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
