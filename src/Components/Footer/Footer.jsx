import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>pallaveeratnakar1714@gmail.com</span>
        <span>+91 9801209952</span>
        <div className="f-icons">
          <a href="https://github.com/pallaveekumari" target="_blank">
            
            <Github className="git" color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/pallavee-kumari-493338230/" target="_blank">
            <Linkedin className="git" color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
