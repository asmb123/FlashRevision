import React from 'react'
import "./Cards.css"
// import { useState } from 'react'

// const[count,setcount]=useState("Add to Bookmarks⭐")
// setcount=()=>{
//   document.getElementsByClassName(".bmark").innerHTML="Bookmark Added!"
// }
const Cards = (props) => {
  return (
    
          <div className="cards">
            {props.subject}
            <span className='bmark'>
              Add to Bookmarks
            </span>
          </div>
          
          
       
  )
}

export default Cards