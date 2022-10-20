import React from "react";
// import CustomNav from "../Components/NavBar";
import { Container, Row } from "react-bootstrap";
import IconCard from "../IconCard/IconCard";
import { frontSkillsList, backSkillsList } from "../../utils/helperList";
import useWindowDimensions from "../../utils/dimensionHelper";
import { useContext } from "react";
import { themeContext } from "../../Context";
import "./Skills.css"

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { width } = useWindowDimensions();

  let imgContainerWidthClass;
  let headingMargin;
  if (width < 577) {
    imgContainerWidthClass = "textCenter";
  }
  if (width > 577) {
    headingMargin = "headingMargin";
  }

  return (
    <div className="techSkills" id="Tech" style={{ marginTop: "5rem"}}>
      <div className="p-heading ">
        <span style={darkMode ? { color: "white" } : null}>My </span>
        <span>Technical Skills</span>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur s-blur1"
          style={darkMode?{display:"none"}:{ background: "#ABF1FF94", zIndex: 1 }}
        ></div>
      </div>
      

      <Container
        className={`mt-5 ${imgContainerWidthClass}  `}
      >
       
        <Row
        className="frontend"
         style={{margin:"auto"}}
          xs={1}
          sm={2}
          md={3}
          lg={4}
        >
          {backSkillsList.map((s) => (
            <IconCard key={s.label} src={s.src} skillName={s.label} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
