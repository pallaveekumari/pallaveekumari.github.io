import React from 'react'
import "./Portfolio.css"
import bellavitta from "../../img/bellavitta.png"
const Portfolio = () => {
  return (
    <div className='portfolio' id="Projects">
       <div className='awesome'>
                <span>My Recent</span>
                <span>Projects</span>
                <div className='blur s-blurl' style={{background:"#ABF1FF94"}}></div>
                <div className='blur s-blurl' style={{background:"var(--purple)",left:"-30%",top:"50%"}}></div>
        </div>

       

       <div className='maindiv'>
          <h2>BellaVitta Organic Clone</h2>
          <div className='imgdiv'>
        <img src={bellavitta} alt="" />
          </div>
          <p className='bella'>Bella Vita Organic is a natural skincare brand in India.
            They create handcrafted natural beauty products
                 which can solve all your skin concerns.</p>
          <p >Tech Stack : <span> HTML/CSS,JavaScript ,React,Chakra UI,
            GitHub,Heroku.</span></p>
          <div className='gitbtn'>

         
           <a href="https://github.com/pallaveekumari/BellavitaOrganic-Clone" target="_blank">
           <span>Code</span>
           </a>
           <a href="https://www.linkedin.com/in/pallavee-kumari-493338230/" target="_blank">
            <span>Live</span>
          </a>
          </div>
         
         
          
       </div>



       <div className='maindiv'>
          <h2>DNA India Clone</h2>
          <div className='imgdiv'>
          <img src="https://github.com/pallaveekumari/celestial-wound-3463/raw/master/dnaindiaPhotos/Homepage.png?raw=true" alt="" />
          </div>
          <p> DNA is known for its incisive reporting, investigative journalism,
             breaking stories and 360 degree coverage of an issues.Dna is an English broadsheet daily owned Media.
          </p>
             <p >Tech Stack : <span>  React,Chakra UI,HTML,CSS5 ,Javascript ,ES6.
            GitHub, Heroku .</span></p>


            <div className='gitbtn'>
              <a href="https://github.com/pallaveekumari/DNA-India-Clone" target="_blank">
              <span>Code</span>
              </a>
              <a href="https://www.linkedin.com/in/pallavee-kumari-493338230/" target="_blank">
              <span>Live</span>
              </a>
            </div>
       </div>



       <div className='maindiv'>
          <h2>ZoomCar Clone</h2>
          <div className='imgdiv'>
          <img src="https://github.com/pallaveekumari/zoomcar/raw/master/IndivisualProject/carphotos/homepage.png?raw=true" alt="" />
          </div>
          <p>Zoomcar, is the Largest car sharing platform, headquartered in Bangalore, India. The company was founded in 2013 by David Back and Greg Moran.
            It currently operates in 34+ cities.</p>
          <p >Tech Stack : <span> HTML/CSS,JavaScript,IMPORT & EXPORT
            GitHub,Local Storage.</span></p>
          <div className='gitbtn'>
              <a href="https://github.com/pallaveekumari/zoomcar" target="_blank">
              <span>Code</span>
              </a>
              <a href="https://www.linkedin.com/in/pallavee-kumari-493338230/" target="_blank">
              <span>Live</span>
              </a>
            </div>
       </div>



       


       <div className='maindiv'>
          <h2>Project-Nature-s-Basket</h2>
          <div className='imgdiv'>
          <img src="https://user-images.githubusercontent.com/101566046/167378276-5991087a-472b-47ff-ac0b-d47a1de0523a.png" alt="" />
          </div>
          <p>Nature's Basket is an Indian grocery delivery chain of retail stores focused in gourmet food. It has a range of organic food,
            imported ingredients and exotic foods .</p>
          <p >Tech Stack:<span> HTML/CSS,JavaScript,Bootstrap,
            GitHub,Local Storage.</span></p>
          <div className='gitbtn'>
              <a href="" target="_blank">
              <span>Code</span>
              </a>
              <a href="https://www.linkedin.com/in/pallavee-kumari-493338230/" target="_blank">
              <span>Live</span>
              </a>
            </div>
       </div>


       <div className='maindiv'>
          <h2>Best Buy Clone</h2>
          <div className='imgdiv'>
          <img src="https://github.com/rajashree27/bestbuy_Clone/raw/master/Screenshots/HomePage1.png?raw=true" alt="" />
          </div>
          <p>Best Buy is an American multinational consumer electronics retailer headquartered in Richfield, Minnesota.It was originally found as an audio specialty store called Sound of Music.</p>
          <p >Tech Stack:<span> HTML/CSS,JavaScript,jQuery,Bootstrap
            GitHub,Local Storage.</span></p>
          <div className='gitbtn'>
              <a href="https://github.com/rajashree27/bestbuy_Clone" target="_blank">
              <span>Code</span>
              </a>
              <a href="https://www.linkedin.com/in/pallavee-kumari-493338230/" target="_blank">
              <span>Live</span>
              </a>
            </div>
       </div>
    </div>
  )
}

export default Portfolio