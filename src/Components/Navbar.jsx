import React from "react";
// import "./Navbar.css"
import Project from './Project'

function Navbar(){

   
    return(
        <div className="navbarContainer">
            <div> <h1>Vishal Rohilla</h1> </div>
            <div>
                <div>Home</div>
                <div>About</div>
                <div>Skill</div>
                <div className="pro">Project</div>
                <div>Contact Me</div>
                <div>
                  <a href="https://drive.google.com/file/d/1koCnB_V1zhE8MY_KB6Fif7AjyGCYsjU-/view?usp=sharing" target='_blank' download>Resume</a>
                </div>
            </div>
        
        </div>
    )
}

export default Navbar