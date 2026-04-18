import React from 'react'
import './Home.css'

import Heroimg from '../assets/images/Hero-img.jpg'
import Button from '../Components/UI/Button'
import Card from '../Components/UI/Card'
import Hero from '../Components/Home/Hero'
import ServiceCard from '../Components/Home/ServiceCard'
import ContactInfo from '../Components/Contact/ContactInfo'

function Home() {
  return (
    
     <div className="container">
            
        <Hero/>
        <ServiceCard/>
        <ContactInfo/>
        
    </div>
  )
}

export default Home
