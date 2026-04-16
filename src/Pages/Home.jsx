import React from 'react'
import './Home.css'

import Heroimg from '../assets/images/Hero-img.jpg'
import Button from '../Components/UI/Button'
import Card from '../Components/UI/Card'
import Hero from '../Components/Home/Hero'
import ServiceCard from '../Components/Home/ServiceCard'

function Home() {
  return (
    
     <div className="container">
            
        <Hero/>
        <ServiceCard/>
        
    </div>
  )
}

export default Home
