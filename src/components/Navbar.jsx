import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className='gg'>{props.title1}</Link>
        <Link className='gg'>{props.title2}</Link>
        <Link className='gg'>{props.title3}</Link>
        <Link to="/About" className='gg'>{props.title4}</Link>

      </nav>

    </div>

  )
}

export default Navbar
