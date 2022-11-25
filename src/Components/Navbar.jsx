import React from "react";
import "./Navbar.css"

function Navbar(){
    return(
        <div className="navbarContainer">
            <div> <h1>Vishal Rohilla</h1> </div>
            <div>
                <div>Home</div>
                <div>About</div>
                <div>Skill</div>
                <div>Project</div>
                <div>Contact Me</div>
                <div>Resume</div>
            </div>
        </div>
    )
}

export default Navbar