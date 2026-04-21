import React from 'react'
import "./Lencess.css"
import {motion} from 'framer-motion'

import card from '../../UI/Card'

function Lencess() {

  const lenceSectionVariant = {
    hidden: {opacity: 0},
    visible: { opacity: 1, transition : {duration: 0.6 , delay: 0.3}}
  }


  const lenceCards = [
    {
      title: "Lence 1",
      image: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    },

    {
      title: "Lence 1",
      image: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    },

    {
      title: "Lence 1",
      image: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    },
    {
      title: "Lence 1",
      image: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }
  ]




  return (

    <motion.section className="lencess-section">
      
      <motion.h1 initial="hidden" whileInView="visible" variants={lenceSectionVariant}>Lencess</motion.h1>
      
    </motion.section>


  )
}

export default Lencess
