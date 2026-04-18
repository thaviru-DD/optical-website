import React from 'react'
import './ContactInfo.css'
import { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import ContactImg from '../../assets/images/contactSection-image.jpg'
import { motion} from 'framer-motion'

function ContactInfo() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !name) {
            alert("Please enter both name and email.");
            return;
        }
    }


  return (
    <div className='contact-container'>

        <motion.div className="contact-info" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true, amount: 0.2 }}>
            <form onSubmit={handleSubmit}>
                <motion.h1 className='contact-text'>Contact us</motion.h1>

                <div className="labels-inputs">
                    <label htmlFor="name">Name:</label>
                    <Input type="text" placeholder='Enater your name here' value={name} onChange={e => setName(e.target.value)}/>

                    <label htmlFor="email">Email:</label>
                    <Input type="email" placeholder='abc@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="number">Mobil number:</label>
                    <Input type="tel" placeholder='+94 ........' value={number} onChange={e => setNumber(e.target.value)}/>

                    <label className='textArea-text' htmlFor="number">Message:</label>
                    <textarea name="message" id=""/>

                    <Button className="submit" name="Submit" type="submit"/> 
                </div>
                    
                
                    
            </form>
        </motion.div>

        <div className="image-contact">
            <img className='contact-image' src={ContactImg} alt="cuple in optical" />
        </div>
      
    </div>
  )
}

export default ContactInfo
