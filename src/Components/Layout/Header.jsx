import React, { useEffect } from 'react'
import NavLinks from '../UI/NavLinks'
import './Header.css'
import Button from '../UI/Button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Header() {

  const [open, setOpen] = useState(false);

  // document.querySelector('.stocks-link').addEventListener('mouseover', () => {
  //   document.querySelector('.box').style.display = 'block';
  // })




  return (

      <div className="container">

        <nav className={open? "active-nav" : "nav"}>
            <h1 className={open? "heddingText-active" : ""}>R.A. Jayasinghe Opticians</h1>
            {open? <X className='close-icon' onClick={() => setOpen(!open)}/> :  <Menu className="ham-burger-icon" onClick={() => setOpen(!open)}/>}
            
            
            
            <div className={open? "active-navLinks" :"navLinks"}>
                <NavLinks nameLink = "Home" url="/"/>
                <div>
                  <NavLinks className="stocks-link" nameLink = "Stocks" url="/stock"/>
                  <div className='box'></div>
                </div>
                
                <NavLinks nameLink = "Location" url="/location"/>
                <NavLinks nameLink = "About us" url="/about"/>
            </div>
            <div className="contact">
                <Button name="Contact" style="contact-btn"/>
            </div>
        </nav>

        {/* <div className={open? "active-links-mobile" : "links-mobile"}>
          <h1>R.A. Jayasinghe Opticians</h1>
            <div>
                <NavLinks nameLink = "Home" url="/"/>
                  <NavLinks nameLink = "Stocks" url="/stock"/>
                  <NavLinks  nameLink = "Location" url="/location"/>
                  <NavLinks  nameLink = "About us" url="/about"/>
            </div>
            <button>Contact</button>
        </div> */}




      </div>



  )
}

export default Header
