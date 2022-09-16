import React from 'react'
import "./Portfolio.css"
import bellavitta from "../../img/bellavitta.png"
const Portfolio = () => {
  return (
    <div className='portfolio'>
       <span> Projects</span>




       <div className='maindiv'>
          <h2>BellaVitta Organic Clone</h2>
          <div className='imgdiv'>
        <img src={bellavitta} alt="" />
          </div>
          <p className='bella'>Bella Vita Organic is a natural skincare brand in India.
They create handcrafted natural beauty products
which can solve all your skin concerns.</p>
          <p >Tech Stack : <span> HTML /CSS , JavaScript ,React,Chakra UI ,
GitHub , Heroku .</span></p>
          <button className='gitbtn'>

           {/* <img src="https://portfolio-saravanakumarjn.vercel.app/static/media/github-icon.04ed74f3.svg" alt="" /> */}
           <span>Code</span>

          </button>
          <button className='livebtn'>
            Live
          </button>
       </div>
    </div>
  )
}

export default Portfolio