import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: rgba(25, 23, 32, 0.3);
  height: auto;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
`
export const NavContainer = styled.div`
  display: flex;
  height: 78px;
  justify-content: space-between;
  margin: 0 8vw;
  `
  
export const NavLogo = styled.div`
  margin: auto 0;
`
export const Img = styled.img`
  height: 50px;
`
export const NavMenu = styled.div`
  height: fit-content;
  margin: auto 0;
`

export const NavItem = styled.div`
  display: inline-block;
  margin: 0 4vw;
`
export const NavLink = styled.a`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: medium;
  text-transform: uppercase;
`
export const NavIcons = styled.div`
  margin: auto 0;
`

export const IconImg = styled.img`
  padding: 0 18px;
  height: 20px;
`