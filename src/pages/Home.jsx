import React, { useRef } from "react";
import "../assets/css/App.css";
import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

function App() {
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const experienceRef = useRef(null);
  const introduceRef = useRef(null);
  const introduceDownRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollDown = (ref) => {
    if (ref.current) {
      const nextSection = ref.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="App">
      <Header
        handleScroll={handleScroll}
        projectRef={projectRef}
        skillRef={skillRef}
        experienceRef={experienceRef}
      />
      <Introduce
        handleScrollDown={handleScrollDown}
        introduceRef={introduceRef}
        introduceDownRef={introduceDownRef}
      />
      <Projects projectRef={projectRef} />
      <Skills skillRef={skillRef} />
      <Experience experienceRef={experienceRef} />
      <Footer />
    </div>
  );
}

export default App;
