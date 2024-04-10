import React from 'react'
import "./Navbar.css"

const Navbar = (props) => {
  return (
    <div className="navbar">
        <nav>
        <span className='gg' >{props.title1} </span>
        <span className='gg' >{props.title2} </span>
        <span className='gg' >{props.title3} </span>
        <span className='gg' >{props.title4} </span>
        
    </nav>
 
    </div>
    
  )
}

export default Navbar
