import React from 'react'
import "./Bookmarks.css"
import logo from './assets/HomeLogo.svg'
import Navbar from './components/Navbar'

const Bookmarks = () => {
  return (
    <>
      <img className='logo' src={logo} alt="Homelogo" />
      <input type="text" name="searchbar" id="sbar" />
      <span className='pm'>Lofi🎧</span>
      <audio controls src="./src/Lofi1.mp3" className='mp' ></audio>
      <Navbar title1="Home" title2="Bookmarks" title3="Create Notes" title4="About" />
      <div className="container">
        <div className="boxb">
          
        </div>
      </div>
    </>
  )
}

export default Bookmarks