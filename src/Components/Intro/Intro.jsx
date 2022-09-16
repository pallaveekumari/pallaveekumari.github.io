import React from 'react'
import "./Intro.css"
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"

import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
// import {motion} from "framer-motion"
const Intro = () => {

  const transition ={duration:2 ,type:"spring"}

  return (
    <div className='intro' id='About'>
      <div className='i=left'>
        <div className='i-name'>
        <span>Hey I'm Pallavee</span>
        <span>Welcome to my portfolio!</span>
        <span>I am a passionate Full Stack Web 
            Developer with the ability to 
            write clean, reusable,
             optimised code.
        </span>
        </div>
        {/* <a href={Resume} download></a> */}
        <button className='button i-button'>Resume</button>
      


   <div className='i-icons'>
    <a href="https://github.com/pallaveekumari" target="_blank">

    <img src={Github} alt="" />
    </a>
    <a href="https://www.linkedin.com/in/pallavee-kumari-493338230/" target="_blank">

    <img src={LinkedIn} alt="" />
    </a>
    
   </div>
      
      
      </div>




      <div className='i-right'>
<div></div>
<div></div>
         {/* <img src={Vector1} alt="" />
         <img src={Vector2} alt="" /> */}
         {/* <img src="" alt="" /> */}
         <img src={glassesimoji} alt="" />
<div style={{top:"-4%",left:"68%"}} className="floating-div">
    <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
</div>



{/* <div>
    <FloatingDiv image={thumbup} txt1=""/>
</div> */}

<div className='blur' style={{background:"#C1F5FF",
top:"17rem",
width:"21rem",
height: "11rem",
left: "-9rem"
}}>

</div>
      </div>
    </div>
  )
}

export default Intro
