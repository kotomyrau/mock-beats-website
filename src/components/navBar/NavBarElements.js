import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#2B2835' : 'rgba(25, 23, 32, 0.3)')};
  height: auto;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  @media screen and (max-width: 1024px) {
    background: ${({ scrollNav }) => (scrollNav ? '#2B2835' : 'transparent')};
  }
`
export const NavContainer = styled.div`
  display: flex;
  height: 78px;
  justify-content: space-between;
  margin: 0 8vw;
  `
  
export const NavLogo = styled.div`
  cursor: pointer;
  margin: auto 0;
`
export const Img = styled.img`
  height: 50px;
`
export const NavMenu = styled.div`
  height: fit-content;
  margin: auto 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.div`
  display: inline-block;
  margin: 0 4vw;
  @media screen and (max-width: 1100px) {
    margin: 0 1.8vw;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavLink = styled(Link)`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
`
export const NavIcons = styled.div`
  margin: auto 0;
  @media screen and (max-width: 768px) {
    display: none;
  }`

export const IconImg = styled.img`
  cursor: pointer;
  height: 20px;
  padding: 0 1vw;
`

export const NavToggleIcon = styled.div`
  display: none;
    
  @media screen and (max-width: 768px) {
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 4vh;
    margin: auto 0;
  }
`