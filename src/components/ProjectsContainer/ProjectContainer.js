import React from 'react'
import { Element } from "react-scroll";
//import  Project from './Project./Project'
import "./ProjectContainer.css"


const ProjectContainer = () => {
    const projects = [
        {
            img:"https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg",
            title : "ECommerce",
            desc : "this is my project description",
            link :" www.google.com",

        },
        {
            img:"https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg",
            title : "Car Rental Services",
            desc : "this is my project description",
            link :" www.google.com",

        },
        {
            img:"https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg",
            title : "Flight Booking",
            desc : "this is my project description",
            link :" www.google.com",

        },
        {
            img:"https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg",
            title : "ECommerce",
            desc : "Travel and Tour Booking",
            link :" www.google.com",

        },

]

  return(
    <Element className = "ProjectContainer" id="Projects">
        <h1>Projects</h1>
        <p> Here are some projects which i have done</p>
        <div className="ProjectContainer_projects">
        {
            projects.map((project,index) => {
                return(<project 
                    key={index}
                    img={project.img}
                    link={project.link}
                    title={project.title}
                    desc={project.desc}
                />);
         } )
        }
        
        </div>
      
    </Element>
  );
}

export default ProjectContainer