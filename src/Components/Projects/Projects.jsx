import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

import { useContext } from "react";
import { themeContext } from "../../Context";

import bellavitta from "../../img/bellavitta.png"
import dnaindia from "../../img/dnaindia.png"
import zoomcar from "../../img/zoomcar.png"
import naturesbasket from "../../img/naturesbasket.png"
import bestbuy from "../../img/bestbuy.png"
import waytogloble from "../../img/waytoglobe.png"
import dribble from "../../img/dribble.png"
const Projects = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id="Project">
      <div className="p-heading projectHead ">
        <span style={darkMode?{color:"white"}:null} >My </span>
        <span>Projects</span>
        <div className="blur s-blur2" style={{background:"var(--purple)"}} ></div>
        <div className='blur s-blur1' style={{background:"#ABF1FF94"}} ></div>

        {/* <div className='blur s-blur1' style={{background:"#ABF1FF94",zIndex:1}} ></div> */}
      </div>
      <div className="p-mainDiv">
      <ProjectCard
          live="https://bellavitaaorganiccloneproject.netlify.app/"
          git="https://github.com/pallaveekumari/BellavitaOrganic-Clone"
          tech={["HTML", "CSS", "Javascript", "React", "Chakra UI","GitHub","render","MongoDb","Express","Nodejs"]}
          desc="This project is an individual endeavor that replicates all the functionalities found on the BellaVitaOrganic website. Users can explore various pages, purchase products, utilize the login/signup features, and enjoy many other aspects present on the original website."
          pFName="BellaVitta Organic"
          pLName="Clone"
          image={bellavitta}
        />
      <ProjectCard
          live="https://waytoglobe.vercel.app/"
          git="https://github.com/Mohammadzaki0027/hurried-hospital-4011"
          tech={["HTML", "CSS", "Javascript", "React","Redux","MongoDB","Express","Chakra UI","GitHub","Render"]}
          desc="The Website is use to book the Flight, Cars, Hotels, at reasonable price and it is vary on customer expectation."
          pFName="Expedia"
          pLName="Clone"
          image={waytogloble}
        />
        <ProjectCard
         live="https://aumntik.netlify.app/"
         git="https://github.com/pallaveekumari/Agumentik_Landing_Page"
         tech={["HTML", "CSS", "Javascript", "React","MongoDB","NodeJS","GitHub","Render"]}
         desc="This is my individual Project. where user can login and signup . admin can change all the contents and images from admin panel and can make another user admin."
         pFName="dribble"
         pLName="Clone"
         image={dribble}
        />
      
        <ProjectCard
          live="https://dnaindiaproject.vercel.app/"
          git="https://github.com/pallaveekumari/DNA-India-Clone"
          tech={["HTML", "CSS", "Javascript", "React", "Chakra UI","GitHub","Heroku"]}
          desc="  DNA is known for its incisive reporting, investigative journalism,
          breaking stories and 360 degree coverage of an issues.Dna is an English broadsheet daily owned Media."
          pFName="DNA India"
          pLName="Clone"
          image={dnaindia}
          
        />
        <ProjectCard
          live="https://jazzy-yeot-106d56.netlify.app/"
          git="https://github.com/pallaveekumari/zoomcar"
          tech={["HTML", "CSS", "Javascript","GitHub","LocalStorage"]}
          desc="Zoomcar, is the Largest car sharing platform, headquartered in Bangalore, India. The company was founded in 2013 by David Back and Greg Moran.
          It currently operates in 34+ cities."
          pFName="ZoomCar"
          pLName="Clone"
          image={zoomcar}
         
        />
        <div className="blur s-blur2" style={{background:"var(--purple)",left:"70%",top:"50%"}} ></div>
        <ProjectCard
          live="https://nature-basket-clone-488ad1.netlify.app/"
          git="https://github.com/premsg1610/Nature-s-Basket-Clone"
          tech={["HTML", "CSS", "Javascript","GitHub","Bootstrap","LocalStorage"]}
          desc="Nature's Basket is an Indian grocery delivery chain of retail stores focused in gourmet food. It has a range of organic food,
          imported ingredients and exotic foods."
          pFName="Project-Nature-s-Basket"
          pLName="Clone"
           image={naturesbasket}
        />
        <ProjectCard
          live="https://fanciful-unicorn-61bc77.netlify.app/"
          git="https://github.com/rajashree27/bestbuy_Clone"
          tech={["HTML", "CSS", "Javascript","jQuery","Bootstrap","GitHub","LocalStorage"]}
          desc="Best Buy is an American multinational consumer electronics retailer headquartered in Richfield, Minnesota.It was originally found as an audio specialty store called Sound of Music."
          pFName="Best Buy"
          pLName="Clone"
          image={bestbuy}
        />
        
      </div>
    </div>
  );
};

export default Projects;
