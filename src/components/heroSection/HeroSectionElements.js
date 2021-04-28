import styled from 'styled-components'

export const HeroContainer = styled.div`
  background-color: #2B2835;
  height: 85vh;
  z-index: 0;
  top: -78px;
  position: relative;
`

export const HeroGrid = styled.div`
  display: grid;
  grid-template-areas: 
    "img text"
    ;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100%;

`

export const HeroImgWrapper = styled.div`
  grid-area: img;
`


export const HeroImg = styled.img`
  // background-color: red;
  height: 99vh;
  position: absolute;
  top: 0;
  z-index: 0;
`
export const HeroTextWrapper = styled.div`
  grid-area: text;
  margin: auto 8vw auto 6vw;
`
export const HeroSubHeader = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: white;
`
export const HeroHeader = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: #FFFFFF;

`
export const HeroDetails = styled.div`

`
export const ProductPrice = styled.h6`
  font-size: 40px;
  font-weight: 400;
  color: white; 
  display: inline-block;
  margin: 0;
`
export const ProductButton = styled.button`
display: inline-block;
float: right;
`
export const HeroOffer = styled.p`
  font-size: 13px;
  color: #FFC700;
  font-weight: 500;
`