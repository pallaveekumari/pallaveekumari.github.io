import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useContext } from "react";
import { themeContext } from "../../Context";
import "./Githubcalendar.css";

function Github() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // console.log(window.screen.width)
  let styleObj = {
    display: "flex",
    flexDirection:"column"
  }

  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#3f0655",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <Row className="github">
      <div className="p-heading code">
        <span style={darkMode ? { color: "white" } : null}>Day </span>
        <span>I Code</span>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)", left: "15%", top: "30%" }}
        ></div>
        <div
          className="blur s-blur1"
          style={
            darkMode
              ? { display: "none" }
              : { background: "#ABF1FF94", zIndex: -1, left: "60%", top: "50%" }
          }
        ></div>
      </div>
      <GitHubCalendar
        username="pallaveekumari"
        blockSize={15}
        blockMargin={5}
        background="transparent"
        fontSize={20}
        className="calendar"
        style={window.screen.width<="480px"?styleObj:{width:"100%"}}
      />
    </Row>
  );
}

export default Github;
