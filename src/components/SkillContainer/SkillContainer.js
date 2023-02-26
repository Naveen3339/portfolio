import React from "react";
import { Element } from "react-scroll";
import Skilling from "../../assets/skill.jpg";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./SkillContainer.css" ;

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
    <div className = "skillContainer_image">
        <img src={Skilling} alt=""/>
    </div>
    <div className = "skillContainer_text"> 
    <h2>SKILLSET</h2>
   <div className = "skillContainer_skillSet">
    <h5 >HTML</h5>
    <div className = "skillContainer_slider skillContainer_slider1">
        <LinearProgress variant="determinate" value={90}/>
    </div>
    
   </div>
   <div className = "skillContainer_skillSet">
    <h5 >CSS</h5>
    <div className = "skillContainer_slider skillContainer_slider2">
        <LinearProgress variant="determinate" value={90}/>
    </div>
</div>
  <div className = "skillContainer_skillSet">
    <h5 >BOOTSTRAP</h5>
    <div className = "skillContainer_slider skillContainer_slider3">
        <LinearProgress variant="determinate" value={80}/>
    </div>
</div>
  <div className = "skillContainer_skillSet">
    <h5 >JAVASCRIPT</h5>
    <div className = "skillContainer_slider skillContainer_slider4">
        <LinearProgress variant="determinate" value={75}/>
    </div>
</div>
  <div className = "skillContainer_skillSet">
    <h5 >React JS</h5>
    <div className = "skillContainer_slider skillContainer_slider5">
        <LinearProgress variant="determinate" value={70}/>
    </div>
</div>
    </div>
    </Element>
  )
}

export default SkillContainer;