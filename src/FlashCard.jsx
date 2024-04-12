import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import logo from './assets/HomeLogo.svg'
import "./FlashCard.css"

const FlashCard = () => {

  const[note, setNote] = useState("")
  const[notes, setNotes] = useState([])

  const add=()=>{
    setNotes([...notes, {note, done: false}])
    setNote("")
  }
  const change=(e)=>{
    setNote(e.target.value)
    
  }
  const edit=()=>{

  }
  const deletee=()=>{

  }
  
  return (
    <>
      
      <img className='logo' src={logo} alt="Homelogo"/>   
      
      <span className='pm'>Lofi🎧</span>    
      <audio controls src="./src/Lofi1.mp3" className='mp' ></audio>
      <Navbar title1="Home" title2="Bookmarks" title3="My FlashCards" title4="About" />
      
      <div className="cont">
        <div className="cont1">
          
          <input className='text' type="text" onChange={change} value={note}/>
          <button className='add' onClick={add}>Add</button>
        </div>
        <div className="cont2">
          {notes.map(item=>{
           return <>
           <div className="display">{item.note}</div>
            <button className='add' onClick={edit}>Edit</button>
             <button className='add' onClick={deletee}>Delete</button>
           </>
            
          })}

        </div>
      
      </div>
    </>
  )
}

export default FlashCard