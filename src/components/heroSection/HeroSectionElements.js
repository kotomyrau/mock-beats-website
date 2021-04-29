import styled from 'styled-components'

export const HeroContainer = styled.div`
  background-color: ${({leftImg}) => (leftImg ? '#2B2835' : 'none')};
  display: flex;
  flex-direction: ${({leftImg}) => (leftImg ? 'row' : 'row-reverse')};
  position: relative;
  top: ${({leftImg}) => (leftImg ? '-78px' : '0')};
`

export const HeroImgWrapper = styled.div`
  display: inline-block;
  margin: ${({leftImg}) => (leftImg ? '0 0 -10% 0' : '20vh 6vw 0 0')};
  width: ${({leftImg}) => (leftImg ? '60vw' : '50vw')};
`

export const HeroImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: relative;
`
export const HeroTextWrapper = styled.div`  
  color:  ${({leftImg}) => (leftImg ? '#FFFFFF' : '#2B2835')};
  display: inline-block;
  margin: ${({leftImg}) => (leftImg ? 'auto 0vw auto -10vw' : '20vh 0vw 4vh 6vw')};
  padding: 0 0 0vh;
  width: 35vw;
`
export const HeroSubHeader = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`
export const HeroHeader = styled.h1`
  font-size: ${({leftImg}) => (leftImg ? '40px' : '50px')};
  font-weight: bold;
  margin: 1vh 0 2vh;
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
  line-height: 41px;
  margin: 0 2vw 0 0;
  vertical-align: middle;
`
export const ProductButton = styled.div`
display: inline-block;

`
export const HeroOffer = styled.p`
  color: ${({leftImg}) => leftImg ? '#FFC700' : 'rgba(0, 0, 0, 0.52)'};
  font-size: 13px;
  font-weight: 500;
`
export const ColorOption1 = styled.div`
  background-color: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  margin-right:1vw;
  width: 30px;
`

export const ColorOption2 = styled.div`
  background-color: #DD5656;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  margin-right:1vw;
  width: 30px;
`

export const ColorOption3 = styled.div`
  background-color: #000000;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  margin-right:1vw;
  width: 30px;
`