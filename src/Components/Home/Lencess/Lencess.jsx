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
      title: "Lence 2",
      image: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    },

    {
      title: "Lence 3",
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
      <p className="phara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, libero consequatur? Velit sapiente iste ab aliquam assumenda facere nulla, animi quo perferendis sed voluptate id, non culpa sequi rem repellat! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, reiciendis!</p>

      <div className="cards-lences">
        {lenceCards.map((card, index) => (
          <motion.div key={index} className="card" initial={{opacity: 0, y:50}} whileInView={{opacity:1, y:0, delay: 5}} whileHover={{y: -5, scale: 1.1}} transition={{duration: 0.1}}> 
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
      
    </motion.section>


  )
}

export default Lencess
