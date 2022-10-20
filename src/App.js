import Navbar1 from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import SoftSkills from "./components/SoftSkills/SoftSkills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode
          ? "linear-gradient(to top right,black,rgb(67, 5, 67))"
          : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar1 />
      <Intro />
      <About />

      <Skills />
      <SoftSkills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
