import React from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";
import "./ProjectCard.css";

const ProjectCard = ({ image,pFName, pLName,desc,tech,live,git }) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="pCard">
      <div className="pCard-content">
        <div className="pCard-left">
          <div className="pCard-image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="pCard-right">
          <div className="pCard-heading">
            <span style={darkMode?{color:"white"}:null} >{pFName} </span>
            <span>{pLName}</span>
          </div>
          <div className="pCard-right-desc">
            <p>
             {desc}
            </p>
          </div>
          <div className="tech-heading">
            <p  style={darkMode?{color:"white"}:null}  >Tech Stacks</p>
          </div>
          <div className="tech">
            <ul>
              {tech.map((el)=> <li>{el}</li> )}
            </ul>
          </div>
          <div className="but">
            <a href={live} target="_blank">
              <button className="button"> Go Live</button>
            </a>
            <a
              href={git}
              target="_blank"
            >
              <button className="button">Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
