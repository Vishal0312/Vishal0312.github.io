// import './GithubStats.css'
import GitHubCalendar from 'react-github-calendar'

const GithubStats = () => {
    return(
        <div className='github'>
            <div>
                <h1>My Github Statistics</h1>
                <div className='images'>
                    <div>
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=Vishal0312&theme=dark&hide_border=false" alt="" />
                    </div>
                    
                    <div>
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Vishal0312&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="" />
                    </div>
                
                    <div>
                        <img src="https://github-readme-stats.vercel.app/api?username=Vishal0312&theme=algolia&hide_border=false&include_all_commits=true&count_private=false&show_icons=true" alt="" />
                        
                    </div>
                
                </div>
                <GitHubCalendar username='vishal0312' blockSize={30} fontSize={30} style={{margin:'auto', marginTop:'80px', color:'rgb(193, 216, 236)', width:"90%"}}/>
                
            </div>

        </div>
    )
}

export default GithubStats