import React from 'react'
import "./Footer.css"
import { FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


function Footer() {
  return (
    <div className='footer-content'>

      <div className="section-one">
        <div>
            <h1 className='footer-address'>ADDRESS</h1>
            <p className='p-footer'>349, Gall Road, Ratmalana</p>
        </div>
        <div>
            <h1 className='footer-tel'>TELEPHONE</h1>
            <p className='p-footer'>011-2738618</p>
            <p className='p-footer'>077-4793659</p>
        </div>
        <div>
            <h1 className='footer-email'>EMAIL</h1>
            <p className='p-footer'>tsathmira@gmail.com</p>
        </div>
      </div>

      <div className="section-two">
        <FaWhatsappSquare  fill='white' className='icon'/>
        <FaFacebookSquare fill='white' className='icon'/>
        <FaInstagramSquare fill='white' className='icon'/>
        <AiFillTikTok fill='white' className='icon'/>
        <FaTwitterSquare fill='white' className='icon'/>
      </div>

      <div className="section-three">
        <p className='p-footer copyright'>Copyright 2024. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer
