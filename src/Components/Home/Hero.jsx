import React from 'react'
import './Hero.css'
import Heroimg from "../../assets/images/Hero-img.jpg"
import Button from '../UI/Button'
import {delay, motion, transform} from "framer-motion"
import girlVideo from "../../assets/Videos/sunglass_girl.mp4"

function Hero() {
  return (
    <div>

        <div className="hero-section">

            <div className="image">
                <img className="heroImage" src={Heroimg} alt="girl with glasses" />
            </div>

            <div className="text-hero">

                <motion.h1 className='heroTopic' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>About-us</motion.h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis fuga ex facere, quos quaerat tenetur repudiandae sint, natus, aliquam error voluptatum incidunt? Sunt alias quos, reiciendis velit molestiae fugit? Ea, alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam.</p>
                <Button name="Contact-us" style="hello-btn"/>

                <motion.video className='hero-video' initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 2}} width="400" autoPlay loop muted>
                  <source src={girlVideo} type='video/mp4'/>
                </motion.video>

            </div>

        </div>
      
    </div>
  )
}

export default Hero
