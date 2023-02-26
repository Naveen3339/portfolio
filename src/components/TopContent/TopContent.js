import React from "react";
import { Link } from "react-scroll";

import "./TopContent.css";




const TopContent = () => {
  return (
    <div className="TopContent">
    <div className="topContainer_container">
      <h1>Mr.Naveen
      </h1>
      <p>A Professional Web Developer</p>
      <a href="www.google.com">
        <button className="topContent_download">Download CV</button>
      </a>
      <Link to="projects" smooth={true} duration={500}>
   
      </Link>
     
    </div>

    </div>
  )
}

export default TopContent