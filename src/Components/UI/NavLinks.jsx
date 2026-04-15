import React from 'react'
import { Link } from "react-router-dom";
import './NavLinks.css'

function NavLinks(props) {
  return (
    <div>
      <>
      <Link to={props.url}>{props.nameLink}</Link>
      </>
    </div>
  )
}

export default NavLinks
