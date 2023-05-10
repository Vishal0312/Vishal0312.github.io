import './Contact.css'


const Contact = () => {
    return(
        <div id='contact' className="contact">
             <h1>Contact</h1>
            <div>
                <div id='contact-github'>
                    <a href="https://github.com/Vishal0312">
                        <img width="50px" src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="" />
                    </a>
                </div>
                <div id='contact-linkedin'>
                    <a href="https://www.linkedin.com/in/vishal-rohilla-44200320a/">
                        <img width="50px" src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" alt="" />
                    </a>
                </div>
                <div id='contact-phone'>
                    <p>&#128222; +91-9310158190</p>
                </div>
                <div id='contact-email'>
                        <p>&#128231; rohillavishal10@gmail.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default Contact