import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #2B2835;
  height: auto;
  padding: 8vh 10vw 4vh;
`
export const FooterGrid = styled.div`
  display: grid;
  grid-gap: 0 8px;
  grid-template-areas: 
    "col1 col2 col3 col4 col5";
  grid-template-columns: 0.4fr 1fr 1.3fr 1fr 1.3fr;
  grid-template-rows: 1fr;
`
export const FooterLogo = styled.div`
  grid-area: col1;
`
export const FooterImg = styled.img`
  height: 50px;
`
export const SiteMapProducts = styled.div`
  grid-area: col2;
  margin: 0;
`
export const FooterTab = styled.div`
  background-color: pink;

`

export const SiteMapSupport = styled.div`
  grid-area: col3;
  margin: 0;
`
export const SiteMapCompany = styled.div`
  grid-area: col4;  
  margin: 0;
`
export const FooterSocials = styled.div`
  grid-area: col5;
  margin: 0;
`
export const FooterHeader = styled.h4` 
  color: #FFFFFF;
  font-size: 24px;
  margin: 0 0 2vh; 
`
export const FooterLink = styled.ul` 
display: flex;
    flex-direction: column;
    padding: 0;
  color: #B8B8B8;
  // display: block;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.8;
  list-style: none;
  text-transform: uppercase;
  text-decoration: none;
`
export const SocialMediaLink = styled.div` 
  background-color: #FFFFFF;
  border-radius: 50px;
  display: inline-block;
  font-size: 20px;
  height: 30px;
  margin: 24px 16px 0 0;
  padding: 5px;
  text-align: center;
  width: 30px;
`

