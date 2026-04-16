import React from 'react'
import './ServiceCard.css'
import { color, motion } from "framer-motion";
import { div } from 'framer-motion/client';

// lucide-react icons
import { Eye } from 'lucide-react';
import {Glasses} from 'lucide-react'
import {EyeClosed} from 'lucide-react'
import {Wrench} from 'lucide-react'

function ServiceCard() {

    // Parent container animation (controls stagger)
const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between cards
      },
    },
  };
  
  // Card animation (bottom → top)
  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 80, // start from bottom
    },
    visible: {
      opacity: 1,
      y: 0, // move to normal position
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cards = [
    {icon: <Eye color='#0B2D72' size={100}/>, title: "Eye-testing"},
    {icon: <EyeClosed color='#0B2D72' size={100}/>, title: "Contact lensess"},
    {icon: <Glasses color='#0B2D72' size={100}/>, title: "High qulity galsses"},
    {icon: <Wrench color='#0B2D72' size={100}/>, title: "Rapairing"}
  ]



  return (
    

    <motion.div className="service-card" variants={staggerContainer} initial="hidden" whileInView="visible"  viewport={{ once: true, amount: 0.3 }}>

        <div className="card-hedding">
            <h1 className='title'>Our services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat itaque autem est accusantium enim blanditiis laudantium? Labore, id quaerat atque nisi nobis sint, maiores ipsa earum impedit in possimus eos.</p>
        </div>

        {/* for cards for servicess */}
        <div className="all-cards">
            {cards.map((item, index)=>(
                <motion.div className="cards" key={index} variants={cardAnimation}>
                    <p style={{textAlign: "center", marginTop: "2rem"}}>{item.icon}</p>
                    <h2 style={{color: '#0B2D72', textAlign: 'center', marginTop: "2rem"}}>{item.title}</h2>
                </motion.div>
            ))}
        </div>
            

    </motion.div>

      
    
  )
}

export default ServiceCard
