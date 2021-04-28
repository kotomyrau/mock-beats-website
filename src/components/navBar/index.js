import React from 'react'
import { Nav, NavContainer, NavLogo, Img, NavMenu, NavItem, NavLink, NavIcons, IconImg } from './NavBarElements'
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import profile from "../../images/profile.png";
import buy from "../../images/buy.png";

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <Img src={logo} alt="beats logo"/>
        </NavLogo>
        <NavMenu> 
          <NavItem>
            <NavLink to="/headphones">headphones</NavLink>
          </NavItem> 
          <NavItem>
            <NavLink to="#/earphones">earphones</NavLink>
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
