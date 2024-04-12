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
          If P and Q are statements, then their conjunction is the statement denoted by
            P and Q.
          </li>
          <li className='list'>
          Similarly, the disjunction of P and Q is the statement denoted by
            P or Q.
          </li>
          <li className='list'>
          Uniqueness Theorem: If S is a finite set, then the number of elements in S is a
            unique number in N.
          </li>
          <li className='list'>
          Theorem: The set N × N is denumerable.
          </li>
          <li className='list'>
          If a series in R is absolutely convergent, then it is convergent.
          </li>
          <li className='list'>
          The Completeness Property of R: Every nonempty set of real numbers that has
            an upper bound also has a supremum in R.
          </li>
          <li className='list'>
          Theorem: A subset of R is closed if and only if it contains all of its cluster points.
          </li>
          <li className='list'>
          Definition: A subset K of R is said to be compact if every open cover of K has a
            finite subcover
          </li>
        </ol>
      </div>
    </div>
    
    </>
  )
}

export default Cso