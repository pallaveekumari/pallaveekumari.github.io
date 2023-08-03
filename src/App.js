import Navbar1 from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import SoftSkills from "./Components/SoftSkills/SoftSkills";
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";

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
