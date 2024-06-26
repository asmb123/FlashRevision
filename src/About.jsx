import React from 'react'
import "./About.css"
import logo from './assets/HomeLogo.svg'
import Navbar from './components/Navbar'

const About = () => {
  return (
    <>
      <img className='logo' src={logo} alt="Homelogo" />
      
      <span className='pm'>Lofi🎧</span>
      <audio controls src="./src/Lofi1.mp3" className='mp' ></audio>
      <Navbar title1="Home"  title3="My Flashcards" title4="About" />
      <div className="container">
        <div className="boxa">
        
          Just as the name suggests FlashRevision is for students to have a quick and concise Revision, hours or even minutes before the exam.📝
        </div>
      </div>
    </>
  )
}

export default About