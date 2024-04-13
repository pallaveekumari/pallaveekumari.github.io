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
<p>❤️ I have worked on several different projects collaboratively and indivisual.
Experienced web developer skilled in JavaScript, Typescript, React, and Redux. Completed a 35-week coding Bootcamp at Masai School. 
Proficient in Node.js, Express, and MongoDB. Recently worked at Razorpay for two months as a SDE Intern,and worked at Trydan Home Service Pvt Ltd as SDE gaining expertise in MERN Technologies, MySQL, Grafana, Prometheus, Datadog.
 Always eager to learn new technologies and bring value to organizations. Passionate about crafting user-friendly web applications and fostering a collaborative work culture.</p>

      </div>
      <Experience />
    </div>
  );
};

export default About;
