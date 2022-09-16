import React from 'react'
import "./Experience.css"
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Experience = () => {


    const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  
  return (
    <div className='experience'>
        <div className='achievement' style={{color:darkMode? "var(--black)" : ""}}>
            <div className='circle' style={{color:darkMode? "border:5px solid var(--blueCard)" : ""}}>1200+</div>
            <span>Hours</span>
            <span>of Full Stack Coding</span>
        </div>
        <div className='achievement' style={{color:darkMode? "var(--black)" : ""}}>
            <div className='circle'>240+</div>
            <span>DSA</span>
            <span>Problems</span>
        </div>
        <div className='achievement' style={{color:darkMode? "var(--black)" : ""}}>
            <div className='circle'>100+</div>
            <span>Git</span>
            <span>Commits</span>
        </div>
        <div className='achievement' style={{color:darkMode? "var(--black)" : ""}}>
            <div className='circle'>5+</div>
            <span>Projects</span>
            <span>Done</span>
        </div>
        <div className='achievement' style={{color:darkMode? "var(--black)" : ""}}>
            <div className='circle'>100+</div>
            <span>Hours</span>
            <span>of Soft Skills Sessions</span>
        </div>






    </div>
  )
}

export default Experience