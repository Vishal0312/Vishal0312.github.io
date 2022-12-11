import React from "react";
import "./Navbar.css";
import {
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
                <div>Home</div>
                <div>About</div>
                <div>Skill</div>
                <div className="pro">Project</div>
                <div>Contact Me</div>
                <div className="resume">
                  <a href="https://drive.google.com/file/d/1koCnB_V1zhE8MY_KB6Fif7AjyGCYsjU-/view?usp=sharing" target='_blank' download>Resume</a>
                </div>
            </div>
            <div className="dropdown">
            <Menu>
  <MenuButton
    px={4}
    py={2}
    borderRadius='md'
    borderWidth='1px'
    _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: 'blue.400' }}
    _focus={{ boxShadow: 'outline' }}
  as={Button} rightIcon={<HamburgerIcon />}>
  </MenuButton>
  <MenuList>
    <MenuItem>Home</MenuItem>
    <MenuItem>About</MenuItem>
    <MenuItem>Skills</MenuItem>
    <MenuItem>Projects</MenuItem>
    <MenuItem>Resume</MenuItem>
  </MenuList>
</Menu>
            </div>
        
        </div>
    )
}

export default Navbar