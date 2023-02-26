import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import {Facebook,Instagram,LinkedIn} from "@material-ui/icons"


import "./Contact.css"
const Contact = () => {
  return (
    <Element className = "contact" id = "contact">
    <h1>Contact</h1>
  <div className="contact_container">
    <p>
        Email : <span>naveennayak0903@gmail.com</span>
    </p>
    <p>
        Github Username : <span>Naveen3339</span>
    </p>
    <div className='contact__icons'>
    <a href="google.com">
    <IconButton >
        <Facebook className='button1'/>
        </IconButton>
        
    </a>
    <a href="google.com">
        <IconButton>
        <Instagram className='button2'/>
        </IconButton>
    </a>
    <a href="google.com">
        <IconButton>
        <LinkedIn className='button3'/>
        </IconButton>
    </a>
    </div>
  </div>
    </Element>
  
  )
}

export default Contact