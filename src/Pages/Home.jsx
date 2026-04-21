import React from 'react'
import './Home.css'

import Heroimg from '../assets/images/Hero-img.jpg'
import Button from '../Components/UI/Button'
import Card from '../Components/UI/Card'
import Hero from '../Components/Home/Hero'
import ServiceCard from '../Components/Home/ServiceCard'
import ContactInfo from '../Components/Contact/ContactInfo'
import Lencess from '../Components/Home/Lencess/Lencess'
import About from '../Components/Home/About/About'

function Home() {
  return (
    
     <div className="container">
            
        <Hero/>
        <ServiceCard/>
        <ContactInfo/>
        <Lencess/>

      </div>
  )
}

export default Home
