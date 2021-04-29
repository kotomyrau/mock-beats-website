import React from 'react'
import {SideNav, Icon, CloseIcon, SideNavMenu, SideNavItem, SideNavLink, SideNavIcons, IconImg } from './SideNavElements'
import search from "../../images/search.png";
import profile from "../../images/profile.png";
import buy from "../../images/buy.png";

const SideNavbar = ({ isOpen, toggle }) => {
  return (
    <SideNav isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SideNavMenu>
        <SideNavItem>
          <SideNavLink to="/headphones">headphones</SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink to="/earphones">earphones</SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink to="/speakers">speakers</SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink to="/explore">explore</SideNavLink>
        </SideNavItem>
      </SideNavMenu>
      <SideNavIcons>
          <IconImg src={search} alt="magnifying glass"/>
          <IconImg src={profile} alt="person icon"/>
          <IconImg src={buy} alt="shopping cart"/>
        </SideNavIcons>
    </SideNav>
    )
}

export default SideNavbar
