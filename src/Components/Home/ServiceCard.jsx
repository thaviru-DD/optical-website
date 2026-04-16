import React from 'react'
import './ServiceCard.css'
import { color, motion } from "framer-motion";
import { div } from 'framer-motion/client';
import { Eye } from 'lucide-react';

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

  const cards = [{title: "Eye-testing", des: "We offer manual and machine base eye testing"},
    {title: "Contact lensess", des: "We provide high qulity contact lensess"},
    {title: "High qulity galsses", des: "we provide high qulity glasses with 1 year worrenty"},
    {title: "Rapairing", des: "We rapair your glasses with in 24 hours"},
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
                    <Eye />
                    <h2 style={{color: '#0B2D72', textAlign: 'center'}}>{item.title}</h2>
                    <p>{item.des}</p>
                </motion.div>
            ))}
        </div>
            

    </motion.div>

      
    
  )
}

export default ServiceCard
