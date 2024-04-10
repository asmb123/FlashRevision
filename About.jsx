import React from 'react'
import "./About.css"
import logo from './assets/HomeLogo.svg'
import Navbar from './src/components/Navbar'

const About = () => {
  return (
    <>
      <img className='logo' src={logo} alt="Homelogo" />
      <input type="text" name="searchbar" id="sbar" />
      
      <Navbar title1="Home" title2="Bookmarks" title3="Create Notes" title4="About" />
      <div className="container">
        <div className="box">
          Testing About eeheehe
        </div>
      </div>
    </>
  )
}

export default About