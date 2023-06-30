
import React from "react";
 import "./Navbar.css";
import {
  Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon
  } from '@chakra-ui/icons';


function Navbar(){

  const handle = () => {
    
    fetch('resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Vishal-Rohilla-Resume.pdf';
            alink.click();
        })
    })
}
   
    return(
        <div className="navbarContainer" id="nav-menu">
            <div> <h1>Vishal Rohilla</h1> </div>
            <div>
                <a href="#home"><div className="nav-link home">Home</div></a>
                <a href="#about"><div className="nav-link about">About</div></a>
                <a href="#skills"><div className="nav-link skills1">Skill</div></a>
                <a href="#projects"><div className="nav-link projects">Project</div></a>
                <a href="#contact"><div className="nav-link contact1">Contact Me</div></a>
                <div className="nav-link resume">
                  <a id="resume-link-1" href="https://drive.google.com/file/d/1koCnB_V1zhE8MY_KB6Fif7AjyGCYsjU-/view?usp=sharing" target='_blank' rel="noreferrer"><button id="resume-button-1" onClick={handle} >Resume</button></a>
                  
                  
                </div>
            </div>
            <div className="dropdown">
              <Box>
                <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    mr={['10px','20px','30px','40px']}
                    borderRadius='md'
                    borderWidth='1px'
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'outline' }}
                  as={Button} rightIcon={<HamburgerIcon />}>
                  </MenuButton>
                  <MenuList>
                  <MenuItem><a href="#home" className="nav-link home" style={{textDecoration:'none',color:"black"}}>Home</a></MenuItem>
                <MenuItem><a href="#about" className="nav-link about" style={{textDecoration:'none',color:"black"}}>About</a></MenuItem>
                <MenuItem><a href="#skills" className="nav-link skills1" style={{textDecoration:'none',color:"black"}}>Skills</a></MenuItem>
                <MenuItem><a href="#projects" className="nav-link projects" style={{textDecoration:'none',color:"black"}}>Projects</a></MenuItem>
                <MenuItem><a href="#contact" className="nav-link contact1" style={{textDecoration:'none',color:"black"}}>Contact</a></MenuItem>
                <MenuItem><a id="resume-link-1" className="nav-link resume" href="https://drive.google.com/file/d/1koCnB_V1zhE8MY_KB6Fif7AjyGCYsjU-/view?usp=sharing" target='_blank' rel="noreferrer" onClick={handle} style={{textDecoration:'none',color:"black"}} download>Resume</a></MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            
            </div>
        
        </div>
    )
}

export default Navbar