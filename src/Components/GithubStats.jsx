import './GithubStats.css'
import GitHubCalendar from 'react-github-calendar'
import { useEffect } from 'react'

const GithubStats = () => {
console.log(window.innerWidth)

    return(
        <div className='github'>
            <div>
                <h1>My Github Statistics</h1>
                <div className='images'>
                    <div id='github-streak-stats'>
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=Vishal0312&theme=dark&hide_border=false" alt="" />
                    </div>
                    
                    <div id='github-top-langs'>
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Vishal0312&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="" />
                    </div>
                
                    <div id='github-stats-card'>
                        <img src="https://github-readme-stats.vercel.app/api?username=Vishal0312&theme=algolia&hide_border=false&include_all_commits=true&count_private=false&show_icons=true" alt="" />
                        
                    </div>
                
                </div>
                <div className='github1'>
                    <GitHubCalendar username='vishal0312' blockSize={30} fontSize={30} style={{margin:'auto', marginTop:'80px', color:'rgb(193, 216, 236)', width:"90%"}}/>
                </div>
                <div className='github2'>
                    <GitHubCalendar username='vishal0312' blockSize={10} fontSize={10} style={{margin:'auto', marginTop:'40px', color:'rgb(193, 216, 236)', width:"90%"}}/>
                </div>
                <div className='github3'>
                    <GitHubCalendar username='vishal0312' blockSize={2} fontSize={1} style={{margin:'auto', marginTop:'20px', color:'rgb(193, 216, 236)', width:"90%"}}/>
                </div>

            </div>

        </div>
    )
}

export default GithubStats