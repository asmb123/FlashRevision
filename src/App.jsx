import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import logo from './assets/HomeLogo.svg'


function App() {

  return (
    <>
    
      <img className='logo' src={logo} alt="Homelogo" />
      <input type="text" name="searchbar" id="sbar" />
      
      <Navbar title1="Home" title2="Bookmarks" title3="Create Notes" title4="About"/>
      <div className="container">
        <div className="box">
          <Cards subject="MA101"/>
          <Cards subject="CSO101"/>
          <Cards subject="subject"/>
          <Cards subject="subject"/>
          <Cards subject="subject"/>
        </div>
      </div>

    </>
  )
}

export default App
