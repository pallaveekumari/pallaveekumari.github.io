import React from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
const Services = () => {
  return (
    <div className='services' >

    
        <div className='awesome'>
                <span>My Awesome</span>
                <span>Softskills</span>
                <div className='blur s-blurl' style={{background:"#ABF1FF94"}}></div>
        </div>
<div className='cards'>


<div style={{left:"14rem"}}>
    <Card
    emoji={HeartEmoji}
    heading={"Team Work"}/>
</div>
<div style={{top:"12rem",left:"-4rem"}}>
    <Card
    emoji={Glasses}
    heading={"Time Management"}
    />
</div>
<div style={{top:"19rem",left:"12rem"}}>
<Card
emoji={Humble}
heading={"Adaptability"}
/>
</div>


<div className='blur s-blur2' style={{background:"var(--purple)"}}></div>


</div>
    </div>
  )
}

export default Services