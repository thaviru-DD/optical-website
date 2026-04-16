import React from 'react'
import NavLinks from '../UI/NavLinks'
import './Header.css'
import Button from '../UI/Button'

function Header() {
  return (
    <div>
      <>
      <div className="container">
        <nav>
            <h1>R.A. Jayasinghe Opticians</h1>
            <div className="navLinks">
                <NavLinks nameLink = "Home" url="/"/>
                <NavLinks nameLink = "Stocks" url="/stock"/>
                <NavLinks nameLink = "Location" url="/location"/>
                <NavLinks nameLink = "About us" url="/about"/>
            </div>
            <div className="contact">
                <Button name="Contact" style="contact-btn"/>
            </div>
        </nav>
      </div>
      </>

    </div>
  )
}

export default Header
