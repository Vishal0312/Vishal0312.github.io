
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

   
    return(
        <div className="navbarContainer">
            <div> <h1>Vishal Rohilla</h1> </div>
            <div>
                <a href="#home"><div>Home</div></a>
                <a href="#about"><div>About</div></a>
                <a href="#skills"><div>Skill</div></a>
                <a href="#projects"><div className="pro">Project</div></a>
                <a href="#contact"><div>Contact Me</div></a>
                <div className="resume">
                  <a href="https://drive.google.com/file/d/1koCnB_V1zhE8MY_KB6Fif7AjyGCYsjU-/view?usp=sharing" target='_blank' rel="noreferrer" download>Resume</a>
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
                  <MenuItem><a href="#home" style={{textDecoration:'none',color:"black"}}>Home</a></MenuItem>
                <MenuItem><a href="#about" style={{textDecoration:'none',color:"black"}}>About</a></MenuItem>
                <MenuItem><a href="#skills" style={{textDecoration:'none',color:"black"}}>Skills</a></MenuItem>
                <MenuItem><a href="#projects" style={{textDecoration:'none',color:"black"}}>Projects</a></MenuItem>
                <MenuItem><a href="#contact" style={{textDecoration:'none',color:"black"}}>Contact</a></MenuItem>
                <MenuItem><a href="https://drive.google.com/file/d/1koCnB_V1zhE8MY_KB6Fif7AjyGCYsjU-/view?usp=sharing" target='_blank' rel="noreferrer" style={{textDecoration:'none',color:"black"}} download>Resume</a></MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            
            </div>
        
        </div>
    )
}

export default Navbar