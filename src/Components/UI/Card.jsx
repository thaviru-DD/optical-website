import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
import { ShieldAlert, HeartHandshake, Users, Zap } from "lucide-react";



// card animation (bottom → top)
const scaleIn = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const services = [
  {
    icon: <ShieldAlert size={32} />,
    title: "Incident Reporting",
    desc: "A secure channel for members to report issues seamlessly.",
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Donation Processing",
    desc: "Transparent, fast, and reliable tools to fund your mission.",
  },
  {
    icon: <Users size={32} />,
    title: "Member Management",
    desc: "Keep track of contacts, companies, and roles all in one place.",
  },
  {
    icon: <Zap size={32} />,
    title: "Task Automation",
    desc: "Turn emails and notes into actionable tasks instantly.",
  },
];

function Card() {
  return (
    <motion.div
      className="card-grid"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {services.map((item, index) => (
        <motion.div
          key={index}
          className="card"
          variants={scaleIn}
        >
          <div className="card-icon">{item.icon}</div>

          <h3 className="card-title">{item.title}</h3>

          <p className="card-desc">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Card;