import React from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Experience from "../Experience/Experience";
import "./About.css";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about" id="About" >
      <div className="p-heading" style={{ height: "auto" }}>
        <span style={darkMode ? { color: "white" } : null}>About </span>
        <span>Myself</span>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur s-blur1"
          style={
            darkMode
              ? { display: "none" }
              : { background: "#ABF1FF94", zIndex: 1 }
          }
        ></div>
      </div>
      <div className="card about-card">
      <p>🏡 I am from Gaya, Bihar.</p>
<p>🤝 I think of myself as a DownToEarth person.</p>
<p>❤️ I love designing websites and I am looking for more opportunities to work in coding.</p>
<p>🤗 I have worked on several different projects collaboratively and solely.
   I am a self-driven and passionate web developer skilled in JavaScript, React, and Redux and familiar with front-end frameworks like 
   chakraUI. Gone through 35 weeks of coding Bootcamp at Masai School.Also, worked on NodeJs, Express, MongoDB DataBase.
   Always eager to learn new technologies to enhance my skills and bring value to the organization</p>

      </div>
      <Experience />
    </div>
  );
};

export default About;
