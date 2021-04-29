import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export const SideNav = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #2B2835;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => ( isOpen ) ? '0' : '-100%'};
`

export const Icon = styled.div`
  background: transparent;
  cursor: pointer;
  font-size: 4vh;
  outline: none;
  position: absolute;
  right: 8vw;
  top: 3vh;
` 
export const CloseIcon = styled(FaTimes)`
  color: #FFFFFF;
`
export const SideNavMenu = styled.div`
  text-align: center;
  height: auto;
` 
export const SideNavItem = styled.div`
  margin: 8vh 0;
` 
export const SideNavLink = styled(Link)`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
` 

export const SideNavIcons = styled.div`
  text-align: center;
  height: 30px;

` 

export const IconImg = styled.img`
  margin: 0 4vw;
  max-height: 100%;
  max-width: 100%;
` 
