import React from "react";
import "./SoftSkills.css";
import Heart from "../../img/heartemoji.png";
import Glasses from "../../img/glassesimoji.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { useContext } from "react";
import { themeContext } from "../../Context";

const SoftSkills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Soft">
      <div className="awesome softskill">
        <span style={darkMode ? { color: "white" } : null}>My Soft</span>
        <span>Skills</span>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div className="team">
          <Card
            image="https://media.csesoc.org.au/content/images/2019/10/learn11.gif"
            heading="Team Work"
          />
        </div>
        <div className="time">
          <Card
            image="https://c.tenor.com/FgO2V5QVEysAAAAC/time-clock.gif"
            heading="Time Management"
          />
        </div>
        <div className="adapt">
          <Card image={Humble} heading="Adaptability" />
        </div>
        <div className="adapt">
          <Card
            image="https://cdn4.vectorstock.com/i/1000x1000/79/48/project-management-icon-flat-design-vector-14247948.jpg"
            heading="Project Management"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default SoftSkills;
