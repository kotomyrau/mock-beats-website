import styled from 'styled-components'

export const FooterContainer = styled.div`
height: auto;
background-color: #2B2835;
padding: 4vh 10vw;
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-areas: 
    "col1 col2 col3 col4 col5";
  grid-template-rows: 1fr;
  grid-template-columns: 0.4fr 1fr 1.3fr 1fr 1.3fr;
  grid-gap: 0 8px;
  `
export const FooterLogo = styled.div`
  grid-area: col1;
  // background-color: pink;
`
export const FooterImg = styled.img`
  height: 50px;

`
export const SiteMapProducts = styled.ul`
grid-area: col2;
// background-color: orange;
`

export const SiteMapSupport = styled.ul`
grid-area: col3;
// background-color: yellow;
`

export const SiteMapCompany = styled.ul`
grid-area: col4;  
// background-color: blue;
`

export const FooterSocials = styled.ul`
grid-area: col5;
background-color: green;
`


export const FooterHeader = styled.h6` 
font-weight: 600;
font-size: 24px;
color: #FFFFFF;
margin: 0;
`

export const FooterLink = styled.a` 
  display: block;
  text-transform: uppercase;
  list-style: none;
  font-size: 12px;
  font-weight: 500;
  color: #B8B8B8;
  text-decoration: none;
  line-height: 1.8;
`

export const SocialMediaLink = styled.a` 

`
