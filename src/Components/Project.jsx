import './Project.css'

const Project =() => {
    return (
        <div className='project'>
            <h1>PROJECT</h1>
            <div className='projectdiv'>
                <div><img width="90%" src='https://i.postimg.cc/VLjPnmy2/Screenshot-10.png' alt='ProjectCover'/></div>
                <div>
                    <h1>LeadIq.com</h1>
                    <p>LeadIQ is a platform of B2B sales prospecting tools. Find prospect data, track buying signals, & personalize cold outreach for outbound prospecting.</p>
                    <p>Group Project: 5 days</p>
                    <p>Tech used: HTML | Javascript | CSS</p>
                    <div>
                        <a href='https://github.com/VivBelwal/LeadiQ' target='_blank'><button>Github</button></a>
                        <a href='https://marvelous-gingersnap-a9e17d.netlify.app/' target='_blank'><button>Live</button></a>
                    </div>
                </div>
                
            </div>
            <div className='projectdiv'>
                <div><img width="90%" src='https://i.postimg.cc/J7KM2RYJ/Screenshot-12.png' alt='ProjectCover'/></div>
                <div>
                    <h1>Ayoa.com</h1>
                    <p>Ayoa.com is world’s most visual productivity app. Supercharge thinking, planning and learning with AI, mind maps, task boards and more</p>
                    <p>Individual Project: 5 days</p>
                    <p>Tech used: HTML | Javascript | CSS | Local Storage</p>
                    <div>
                        <a href='https://github.com/masai-course/vishal_fw20_0085/tree/master/unit-2/FirstProject' target='_blank'><button>Github</button></a>
                        <a href='https://gleaming-kashata-77bfec.netlify.app/' target='_blank'><button>Live</button></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Project