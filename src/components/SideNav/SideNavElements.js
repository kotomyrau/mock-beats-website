import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SideNav = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #FEFAE0;
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
  right: 3vw;
  top: 4vh;
` 
  export const CloseIcon = styled(FaTimes)`
    color: #6B705C;
  `