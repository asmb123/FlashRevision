import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import logo from './assets/HomeLogo.svg'
import { Link } from 'react-router-dom'


function App() {
  
  return (
    <>
      <img className='logo' src={logo} alt="Homelogo"/>

      <span className='pm'>Lofi🎧</span>
      <audio controls src="./src/Lofi1.mp3" className='mp' ></audio>
      <Navbar title1="Home" title2="Bookmarks" title3="My Flashcards" title4="About" />
      <div className="container">
        <div className="box">
        <div className="cards" >
            CS0-101
            <Link className='link' to="/Maths">Click me</Link>
          </div>
        <div className="cards" >
            MA-101
            <Link className='link' to="/Maths">Click me</Link>
          </div>
        <div className="cards" >
        Subject
            <Link className='link' to="/Maths">Click me</Link>
          </div>
        <div className="cards" >
            Subject
            <Link className='link' to="/Maths">Click me</Link>
          </div>
        <div className="cards" >
            Subject
            <Link className='link' >Click me</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
