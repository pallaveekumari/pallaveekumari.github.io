import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Contact = () => {
  const [done, setDone] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
//   const [data, setData] = useState({ name: "", message: "", email: "" });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z3k9wcr",
        "template_7dvrov1",
        form.current,
        "4bMslFVI7aboS52k6"
      )
      .then(
        (result) => {
            setName("");
            setEmail("");
            setMessage("");
            setDone(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(()=>{
    console.log(done)
    setTimeout(()=>{
        setDone(false)
    },5000)
  },[setDone,done])

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id="Contact" >
      <div className="w-left">
        <div className="awesome cont">
          <span style={darkMode?{color:"white"}:null} >Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
            type="text"
            name="user_name"
            className="user"
            placeholder="Name "
          />
          <input
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
           value={message}
           onChange={(e)=>setMessage(e.target.value)}
            name="message"
            className="user"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          <span style={{zIndex:1}} >{done?"Thanks for contacting me!":null}</span>
        </form>
        
      </div>
    </div>
  );
};

export default Contact;
