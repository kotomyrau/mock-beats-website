import React, { useState, useEffect } from 'react'
import { Nav, NavContainer, NavToggleIcon, NavLogo, Img, NavMenu, NavItem, NavLink, NavIcons, IconImg } from './NavBarElements'
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import profile from "../../images/profile.png";
import buy from "../../images/buy.png";
import {FaBars} from 'react-icons/fa';

// import { animateScroll as scroll } from 'react-scroll';

const NavBar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 10) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo>
          <Img src={logo} alt="beats logo"/>
        </NavLogo>
        <NavToggleIcon scrollNav={scrollNav}>
              <FaBars onClick={toggle} />
        </NavToggleIcon>
        <NavMenu> 
          <NavItem>
            <NavLink to="/headphones">headphones</NavLink>
          </NavItem> 
          <NavItem>
            <NavLink to="/earphones">earphones</NavLink>
          </NavItem> 
          <NavItem>
            <NavLink to="/speakers">speakers</NavLink>
          </NavItem> 
          <NavItem>
            <NavLink to="/explore">explore</NavLink>
          </NavItem> 
        </NavMenu>
        <NavIcons>
          <IconImg src={search} alt="magnifying glass"/>
          <IconImg src={profile} alt="person icon"/>
          <IconImg src={buy} alt="shopping cart"/>
        </NavIcons>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
