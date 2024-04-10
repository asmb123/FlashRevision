import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    
          <div className="cards">
            {props.subject}
            <span className='bmark'>
              Add to Bookmarks⭐
            </span>
          </div>
          
          
       
  )
}

export default Cards