import React from 'react'
import "./FloatingDiv.css"
import { themeContext } from '../../Context'
import { useContext } from 'react'
const FloatingDiv = ({image ,txt1,txt2}) => {
  
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  
  return (
    <div className='floatingdiv'>
<img src={image} alt="" />
<span style={{color:darkMode? "var(--black)" : ""}}>
    {txt1}
   
    {txt2}
</span>
    </div>
  )
}

export default FloatingDiv