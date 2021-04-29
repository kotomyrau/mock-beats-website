import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #2B2835;
  height: auto;
  padding: 8vh 10vw 4vh;

  @media screen and (max-width: 1024px) {
    padding: 2vh 2vw 4vh;
  }

  @media screen and (max-width: 768px) {
    padding: 2vh 4vw 4vh;
  }
`
export const FooterGrid = styled.div`
  display: grid;
  grid-gap: 0 8px;
  grid-template-areas: 
    "col1 col2 col3 col4 col5";
  grid-template-columns: 0.5fr 1fr 1.25fr 1fr 1.25fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 768px) {
    grid-template-areas: 
      "col1"
      "col2 "
      "col3" 
      "col4" 
      "col5";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
  }
`
export const FooterLogo = styled.div`
  grid-area: col1;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    margin: 2vh auto;
  }
`
export const FooterImg = styled.img`
  height: 50px;
`
export const SiteMapProducts = styled.div`
  grid-area: col2;
  margin: 0;
`
export const FooterTab = styled.div`
  @media screen and (max-width: 768px) {
    border-bottom: 1px solid rgba(0,0,0, 0.39)
  }
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
  
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    margin: 2vh 0;
  }
`
export const FooterLink = styled.ul` 
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  list-style: none;
  padding: 0;
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

  @media screen and (max-width: 1024px) {
    margin: 2vh 8px 0 0;
  }
`