import React from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
const Contact = () => {


    const form = useRef();

const [done,setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_z3k9wcr', 'template_7dvrov1', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }






  return (
    <div className='contact-form' id="contact">
            <div className='w-left'>
                <div className='awesome'>
                    <span>Get in touch</span>
                <span>Contact me</span>
                <span className='phone'> <i class="fa-solid fa-phone"></i>+919801209952</span>
                <span className='email'><i class="fa-solid fa-envelope"></i>pallaveeratnakar1714@gmail.com</span>
                <div className='blur s-blur1'
                style={{background:"#ABF1FF94"}}>

                </div>
                </div>
            </div>





            <div className='i-icons'>
           
    <a href="https://github.com/pallaveekumari" target="_blank">

    <img src={Github} alt="" />
    </a>
    <a href="https://www.linkedin.com/in/pallavee-kumari-493338230/" target="_blank">

    <img src={LinkedIn} alt="" />
    </a>
    
   </div>





<div className='c-right'>
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" className='user' placeholder='Name'/>
        <input type="email" name="user_email" className='user' placeholder='Email'/>
        <textarea name="message" className='user' placeholder='Message'/>
         <input type="submit" value="Send" className='button'/>
         <span>{done && "Thanks for contacting me!"}</span>
         <div
         className='blur c-blur' style={{background:"var(--purple)"}}>

         </div>
       
    </form>
</div>


    </div>
  )
}

export default Contact