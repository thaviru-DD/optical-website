import React from 'react'
import './Hero.css'
import Heroimg from "../../assets/images/Hero-img.jpg"
import Button from '../UI/Button'
import {delay, motion, transform} from "framer-motion"

function Hero() {
  return (
    <div>

        <div className="hero-section">
            <div className="image">
                <img className="heroImage" src={Heroimg} alt="girl with glasses" />
            </div>

            <div className="text-hero">
                <motion.h1 className='heroTopic' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>Get the best version of your eyes</motion.h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis fuga ex facere, quos quaerat tenetur repudiandae sint, natus, aliquam error voluptatum incidunt? Sunt alias quos, reiciendis velit molestiae fugit? Ea, alias. Laboriosam, exercitationem iure incidunt optio ullam illo corrupti, vitae quos expedita facere sit laudantium? Maiores deleniti eveniet doloribus.</p>
                <Button name="Hello" style="hello-btn"/>
            </div>

        </div>
      
    </div>
  )
}

export default Hero
