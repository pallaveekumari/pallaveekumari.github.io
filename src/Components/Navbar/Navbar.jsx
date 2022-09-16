import React from 'react'
import Toggle from '../Toggle/Toggle'
import "./Navbar.css"
import {Link} from "react-scroll"
const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>Pallavee</div>
        <Toggle/>
      </div>
      <div className='n-right'>

        <div className='n-list'>
            <ul style={{listStyleType:"none"}}>
              <Link spy={true} to="Navbar" smooth={true} activeClass='activeClass'>
                <li>Home</li>
                </Link>
                <Link spy={true} to="About" smooth={true} activeClass='activeClass'>

                <li>About</li>
                </Link>
                <Link spy={true} to="Tech skills" smooth={true} activeClass='activeClass'>

                <li>Tech skills</li>
                </Link>
                <Link spy={true} to="Soft skills" smooth={true} activeClass='activeClass'>

                <li>Soft skills</li>
                </Link>
                <Link spy={true} to="Projects" smooth={true} activeClass='activeClass'>

                <li>Projects</li>
                </Link>
               

            </ul>
        </div>
        <button className='button n-button' >
            contact
        </button>
      </div>
    </div>
  )
}

export default Navbar
