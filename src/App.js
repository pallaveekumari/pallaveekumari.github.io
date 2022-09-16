import "./App.css"
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";
import {themeContext} from "./Context"
import {useContext} from "react"

function App() {

const theme=useContext(themeContext)
const darkMode=theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color:darkMode?"white":""
    }} 
    >
     <Navbar/>
     <Intro/>
     <About/>
     <Services/>
     <Work/>
     <Portfolio/>
     <Experience/>
     <Contact/>
    </div>
  );
}

export default App;
