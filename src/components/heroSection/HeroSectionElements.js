import styled from 'styled-components'

export const HeroContainer = styled.div`
  background-color: ${({darkBg}) => (darkBg ? '#2B2835' : 'none')};
  height: 80vh;
  z-index: 0;
  top: ${({darkBg}) => (darkBg ? '-78px;' : '0vh')};
  position: relative;
`

export const HeroGrid = styled.div`
  display: grid;
  grid-template-areas: 
    "col1 col2"
    ;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  // margin-right: 4vw;
  margin: 0 6vw;

`

export const HeroImgWrapper = styled.div`
  grid-area: ${({leftImg}) => (leftImg ? 'col1' : 'col2')};
  margin: ${({leftImg}) => (leftImg ? '0' : 'auto 0')};

`


export const HeroImg = styled.img`
  // background-color: red;
  // height: 99vh;
  // width: 60vw;
  position: ${({leftImg}) => (leftImg ? 'absolute' : 'relative')};
  top: ${({leftImg}) => (leftImg ? '0' : 'none')};
  z-index: 0;
`
export const HeroTextWrapper = styled.div`
  // grid-area: text;
  grid-area: ${({leftImg}) => (leftImg ? 'col2' : 'col1')};
  color:  ${({lightText}) => (lightText ? '#FFFFFF' : '#2B2835')};
  margin: auto 0vw auto 0vw;
  padding: 0 0 0vh;
  // text-align: left;
  `
  export const HeroSubHeader = styled.h3`
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`
export const HeroHeader = styled.h1`
  font-weight: bold;
  font-size: ${({darkBg}) => (darkBg ? '40px' : '50px')};
  margin: 1vh 0 2vh;
`
export const HeroColors = styled.div`

`

export const ColorHeader = styled.h3`
  font-size: 40px;
  font-weight: 400;
  margin: 0;
`
export const FindColor = styled.p`

`
export const ColorOptions = styled.div`
display: ${({colorOptions}) => colorOptions ? 'block' : 'none'};
margin: 0 0 4vh;
`


export const HeroDetails = styled.div`
height: auto;
`
export const ProductPrice = styled.h6`
  font-size: 40px;
  font-weight: 400;
  display: inline-block;
  margin: 0 2vw 0 0 ;


`
export const ProductButton = styled.button`
display: inline-block;

`
export const HeroOffer = styled.p`
  font-size: 13px;
  color: ${({darkBg}) => darkBg ? '#FFC700' : 'rgba(0, 0, 0, 0.52)'};
  font-weight: 500;
`
export const ColorOption1 = styled.div`
  height: 4.6vh;
  width: 2.5vw;
  background-color: #FFFFFF;
  border-radius: 50px;
  cursor: pointer;
  border: 1px solid black;
  display: inline-block;
  margin-right:1vw;
  }
`

export const ColorOption2 = styled.div`
  height: 4.6vh;
  width: 2.5vw;
  background-color: #DD5656;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  margin-right:1vw;
  }
`

export const ColorOption3 = styled.div`
  height: 4.6vh;
  width: 2.5vw;
  background-color: #000000;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  margin-right:1vw;
  }
`