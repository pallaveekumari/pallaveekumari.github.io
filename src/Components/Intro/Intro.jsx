import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

import pall from "./pal.jpeg"



import Resume from "./Pallavee_Kumari_Resume.pdf";
import { themeContext } from "../../Context";


const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkMode ? { color: "white" } : null}>Hey👋 I Am</span>
          <span>Pallavee Kumari</span>
          <span>
          I am a passionate Full Stack Web 
            Developer with the ability to 
            write clean, reusable,
             optimised code. Demonstrated problem solving and curiosity to learn new technology and domain.
          </span>
        </div>
        
        <a href={Resume} download>
          <button onClick={()=>{
            window.open("https://drive.google.com/file/d/1tNX3RQO6Xb5xrFJ_TZ1wCTh_Z2aT157T/view?usp=sharing","_blank")
          }}className="button s-button">Download Resume</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/pallaveekumari" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/pallavee-kumari-493338230/"
            target="_blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
       
        <img src={pall} alt="" />
        
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
       
      </div>
      <img className="lastImg" src={pall} alt=""/>
    </div>
  );
};

export default Intro;
