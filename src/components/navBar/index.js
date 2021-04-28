import React from 'react'
import { NavContainer } from './NavBarElements'

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>

        </NavLogo>
        <NavMenu> 
          <NavItem>
            <NavLink to="#">headphones</NavLink>
          </NavItem> 
          <NavItem>
            <NavLink to="#">earphones</NavLink>
          </NavItem> 
          <NavItem>
            <NavLink to="#">speakers</NavLink>
          </NavItem> 
          <NavItem>
            <NavLink to="#">explore</NavLink>
          </NavItem> 
        </NavMenu>
        <NavIcons>
          
        </NavIcons>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
