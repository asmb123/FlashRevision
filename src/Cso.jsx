import React from 'react'
import Navbar from './components/Navbar'
import logo from './assets/HomeLogo.svg'
import "./Cso.css"
const Cso = () => {
  return (
    <>
    <img className='logo' src={logo} alt="Homelogo"/>

    <span className='pm'>Lofi🎧</span>
    <audio controls src="./src/Lofi1.mp3" className='mp' ></audio>
    <Navbar title1="Home"  title3="My Flashcards" title4="About" />
    <div className="container">
      <div className="box">
        <ol>
          
          <li className='list'>
          Core of the OS is called kernel.
          </li>
          <li className='list'>
          On top of this is a command line interpreter (CLI) also called shell.
          </li>
          <li className='list'>
          Compiler: Translates source code from a high-level programming language to a lower level language (e.g., assembly language, object code, or machine code).
          </li>
          <li className='list'>
          IDE  - Software application that provides comprehensive facilities to computer programmers for software development.
          </li>
          <li className='list'>
          Pointers store the address of the memory location.
          </li>
          <li className='list'>
          If a function does not return any value we can omit return statement.
          </li>
          <li className='list'>
          Strings are character arrays.
          </li>
          <li className='list'>
          They always end with a null character ‘\0’. Can you guess why ?.
          </li>
        </ol>
      </div>
    </div>
    
    </>
  )
}

export default Cso