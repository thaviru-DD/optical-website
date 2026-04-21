import React from 'react'
import './About.css'
import {motion} from 'framer-motion'
import aboutimg from '../../../assets/images/about-img.jpg'

function About() {

    const aboutSection = {
        hidden: {opacity:0},
        visible: {opacity:1, transition:{duration:2, ease:"easeInOut"}}

    }



  return (
    <div className="about-section" style={{ backgroundImage: `url(${aboutimg})` }}>

        <div className="about-text">
            <motion.h1 initial="hidden" whileInView={"visible"} variants={aboutSection} viewport={{once: true}}>About-us</motion.h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate. Doloribus, voluptate.</p>
        </div>


    </div>
  )
}

export default About
