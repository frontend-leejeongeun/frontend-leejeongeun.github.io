import "../assets/css/App.css";
import Header from "../components/Header";
import Introduce from "../components/Introduce";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduce />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
