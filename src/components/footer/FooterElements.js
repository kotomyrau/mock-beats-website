import styled from 'styled-components'

export const FooterContainer = styled.div`
height: auto;
background-color: red;
`

export const FooterGrid = styled.div`
  display: grid;
  // background-color: red;
  grid-template-areas: 
    "col1 col2 col3 col4 col5";
  grid-template-rows: 1fr;
  grid-template-columns: 0.6fr 1fr 1.2fr 1fr 1.2fr;
  margin: 0 8vw;
  `
export const FooterLogo = styled.div`
  grid-area: col1;
  background-color: pink;
`
export const FooterImg = styled.img`

`
export const SiteMapProducts = styled.div`
grid-area: col2;
background-color: orange;
`

export const SiteMapSupport = styled.div`
grid-area: col3;
background-color: yellow;
`

export const SiteMapCompany = styled.div`
grid-area: col4;  
background-color: blue;
`

export const FooterSocials = styled.div`
grid-area: col5;
background-color: green;
`


