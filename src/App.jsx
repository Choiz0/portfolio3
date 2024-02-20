import "./App.css";
import Hero from "./Hero";
import { useRef } from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-200 text-gray-800">
      {/* Pass refs and scrollToSection as props to Home */}
      <div ref={homeRef} id="home">
        {" "}
        <Home
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
          homeRef={homeRef}
          scrollToSection={scrollToSection}
        />
      </div>

      <div ref={skillsRef} id="skills">
        <Skills />
      </div>
      <div ref={projectsRef} id="projects">
        <Hero />
      </div>

      <div ref={aboutRef} id="about">
        <About />
      </div>
    </div>
  );
}

export default App;
