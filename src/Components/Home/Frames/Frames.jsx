import React from 'react'
import { motion } from 'framer-motion'
import "./Frames.css"
import Card2 from '../../UI/CardComponent/Card2'
import frame1 from '../../../assets/images/frame1.jpg'
import frame2 from '../../../assets/images/frame2.jpg'
import frame3 from '../../../assets/images/frame3.jpg'
import frame4 from '../../../assets/images/frame4.jpg'

function Frames() {

  const FramesCard = [
    {
      img: frame1,
      title: "Ray Ban",
      desc: "Lorem ipsum dolor sit amet..."
    },
    {
      img: frame2,
      title: "Ray Ban",
      desc: "Lorem ipsum dolor sit amet..."
    },
    {
      img: frame3,
      title: "Ray Ban",
      desc: "Lorem ipsum dolor sit amet..."
    },
    {
      img: frame4,
      title: "Ray Ban",
      desc: "Lorem ipsum dolor sit amet..."
    }
  ]

  return (
    <div className={'frames-container'}>
      <h1 className='heading-text'>Frames</h1>

      <motion.div className='under-line' initial={{opacity: 0, x: -400}} whileInView={{opacity: 1, x:0}} transition={{delay: 0.2, duration: 0.5}} viewport={{once: true}}/>

        <div className="cards-all">
        {FramesCard.map((card, index) => (
            <motion.div key={index} className='frame-card' initial={{opacity: 0}} whileInView={{opacity: 1}} whileHover={{scale: 1.05}} transition={{duration: 0.2, delay: index * 0.8}} viewport={{once: true}}>
                <Card2 title={card.title} desc={card.desc} img={card.img}/>
            </motion.div>
        ))}
        </div>

    </div>
  )
}

export default Frames