import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import pal from "../../img/pal.jpeg";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Navbar1 = () => {
  const [show, setShow] = useState(false);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={
        darkMode
          ? { background: "linear-gradient(to top right,black,rgb(67, 5, 67))" }
          : { background: "white" }
      }
      className="n-wrapper"
      id="Navbar1"
    >
      <div className="n-left">
    
        <div className="n-name">Pallavee</div>

      
        <span>
          <Toggle />
        </span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="intro"
              smooth={true}
               activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="About" smooth={true}>
              <li>About</li>
            </Link>
            <Link spy={true} to="Tech" smooth={true}>
              <li>Technical Skills</li>
            </Link>
            <Link spy={true} to="Soft" smooth={true}>
              <li>Soft Skills</li>
            </Link>
            <Link spy={true} to="Project" smooth={true}>
              <li>Projects</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
        <div className="burger">
          <i
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={handleShow}
            className="fa-solid fa-bars"
          ></i>

          {/* ---------------------------------------------------------------------------------------- */}

          {/* <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}

          {/* --------------------------------------------------------------------------------- */}

          <Offcanvas
            style={{
              background: darkMode
                ? "linear-gradient(to top right,black,rgb(67, 5, 67))"
                : "",
              color: darkMode ? "white" : "",
            }}
            className="sidebarMain"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img
                  src={pal}
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    color: "var(--black)",
                  }}
                  alt=""
                />
                Pallavee
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="sidebar">
                <Link
                  spy={true}
                  to="Navbar"
                  smooth={true}
                  activeClass="activeClass"
                >
                  <p>Home</p>
                </Link>
                <Link spy={true} to="About" smooth={true}>
                  <p>About</p>
                </Link>
                <Link spy={true} to="Tech" smooth={true}>
                  <p>Technical Skills</p>
                </Link>
                <Link spy={true} to="Soft" smooth={true}>
                  <p>Soft Skills</p>
                </Link>
                <Link spy={true} to="Project" smooth={true}>
                  <p>Projects</p>
                </Link>
                <Link spy={true} to="Contact" smooth={true}>
                  <p>Contact</p>
                </Link>
                <p style={{ fontSize: "12px" }}>pallaveeratnakar1714@gmail.com</p>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
