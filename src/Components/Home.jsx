import "./Home.css"
import React from "react"

function Home(){

    const handle = () => {
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'fw20_0085-Vishal-Rohilla-Resume.pdf';
                alink.click();
            })
        })
    }

    return(
        <div className="homeContainer" id="home">
            <div>
                <div id="user-detail-name"><h3>Hi, I am Vishal Rohilla </h3></div>
                <div id="user-detail-intro" ><h3>Full Stack Web Developer</h3></div>
                <div>
                  <a id="resume-link-2" href="https://drive.google.com/file/d/1koCnB_V1zhE8MY_KB6Fif7AjyGCYsjU-/view?usp=sharing" target='_blank'><button id="resume-button-2" onClick={handle}>Resume</button></a>  
                </div>
            </div>
            <div className="home-img">
                <img src="https://ca.slack-edge.com/T043ULJTBM5-U044ZKB5Q6N-5885efa431bd-512" alt="Vishal" />
            </div>
        </div>
    )
}

export default Home