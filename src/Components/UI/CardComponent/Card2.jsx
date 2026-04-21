import React from 'react'
import "./Card2.css"

function Card2(props) {
  return (

    <div className='card2'> 
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>


  )
}

export default Card2
