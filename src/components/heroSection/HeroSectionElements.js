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
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;

`

export const HeroImgWrapper = styled.div`
  grid-area: img;
`


export const HeroImg = styled.img`
  // background-color: red;
  height: 99vh;
  // position: absolute;
  top: 0;
  z-index: 0;
`
export const HeroTextWrapper = styled.div`
  grid-area: text;
  margin: auto 8vw auto 0;
`
export const HeroSubHeader = styled.h3`

`
export const HeroHeader = styled.h1`

`
export const HeroDetails = styled.h6`

`
export const ProductPrice = styled.h6`

`
export const ProductButton = styled.div`

`
export const HeroOffer = styled.p`

`