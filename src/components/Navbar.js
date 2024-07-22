import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
      <header>
        <div className="nav-container">
            <div className="logo">
            <Link to='fablefrontend/'><h1 id='logo'>Fable Books</h1></Link>
            <p id='tag'>New and Used Books</p>
            </div>
            <div className="menu">
                <Link className='btn' to='fablefrontend/all'>All Books</Link>
                <Link className='btn'>Create Account</Link>
            </div>
            
        </div>
      </header>
    
  )
}

export default Navbar
