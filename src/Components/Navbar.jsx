
import React from "react";
import "./Navbar.css";
import {
  Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';
  import {
    ChevronDownIcon,
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
                  <a href="https://drive.google.com/file/d/1koCnB_V1zhE8MY_KB6Fif7AjyGCYsjU-/view?usp=sharing" target='_blank' download>Resume</a>
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
                  <a href="#home"><MenuItem>Home</MenuItem></a>
                <a href="#about"><MenuItem>About</MenuItem></a>
                <a href="#skills"><MenuItem>Skills</MenuItem></a>
                <a href="#projects"><MenuItem>Projects</MenuItem></a>
                <a href="#contact"><MenuItem>Contact</MenuItem></a>
                <a href="https://drive.google.com/file/d/1koCnB_V1zhE8MY_KB6Fif7AjyGCYsjU-/view?usp=sharing" target='_blank' download><MenuItem>Resume</MenuItem></a>
                  </MenuList>
                </Menu>
              </Box>
            
            </div>
        
        </div>
    )
}

export default Navbar