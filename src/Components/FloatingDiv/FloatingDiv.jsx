import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import "./FloatingDiv.css"

const FloatingDiv = ({image,txt1,txt2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="floatingDiv">
        <img src={image} alt="" />
        <span style={darkMode?{color:"black"}:null} >
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv;