import React from 'react'
import "./Cards.css"
import { Link } from 'react-router-dom'
const Cards = (props) => {
  return (
    
          
          
          <>
          <div className="cards" >
            {props.subject}
            <Link to="/Maths">Click me</Link>
          </div>
          <div className="cards" >
            {props.subject}
            <Link to="/Maths">Click me</Link>
          </div>
          </>
          
       
  )
}

export default Cards