// import "./Home.css"
import React from "react"

function Home(){
    return(
        <div className="homeContainer">
            <div>
                <div><h3>Hi, I am Vishal Rohilla </h3></div>
                <div><h3>Full Stack Web Developer</h3></div>
                <div>
                  <a href="https://drive.google.com/file/d/1koCnB_V1zhE8MY_KB6Fif7AjyGCYsjU-/view?usp=sharing" target='_blank'><button>Resume</button></a>  
                </div>
            </div>
            <div>
                <img width='100px' src="https://ca.slack-edge.com/T043ULJTBM5-U044ZKB5Q6N-5885efa431bd-512" alt="Vishal" />
            </div>
        </div>
    )
}

export default Home