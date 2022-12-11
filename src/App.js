import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import './App.css';
import Project from './Components/Project';
import GithubStats from './Components/GithubStats';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
       <Project/> 
    <GithubStats/> 
    <Skills/>
    <Contact/>
    </div>
  );
}

export default App;
