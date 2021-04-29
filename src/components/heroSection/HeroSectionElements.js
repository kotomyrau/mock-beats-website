import styled from 'styled-components'

export const HeroContainer = styled.div`
  background-color: ${({leftImg}) => (leftImg ? '#2B2835' : 'none')};
  display: flex;
  flex-direction: ${({leftImg}) => (leftImg ? 'row' : 'row-reverse')};
  position: relative;
  top: ${({leftImg}) => (leftImg ? '-78px' : '0')};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    background-color: #FFFFFF;
  }
`


export const HeroImgWrapper = styled.div`
  display: inline-block;
  margin: ${({leftImg}) => (leftImg ? '0 0 -10% 0' : '20vh 6vw 0 0')};
  width: ${({leftImg}) => (leftImg ? '60vw' : '50vw')};
  @media screen and (max-width: 768px) {
    width: 100vw;
    background-color: ${({leftImg}) => (leftImg ? '#2B2835' : 'none')};
    padding: 0 4vw;
  }
`

export const HeroImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: relative;
  margin-bottom: -20%;
`
export const HeroTextWrapper = styled.div`  
  color:  ${({leftImg}) => (leftImg ? '#FFFFFF' : '#2B2835')};
  display: inline-block;
  margin: ${({leftImg}) => (leftImg ? 'auto 0vw auto -10vw' : '20vh 0vw 4vh 6vw')};
  padding: 0 0 0vh;
  width: 45vw;
  @media screen and (max-width: 1024px) {
    margin: auto 0vw auto -10vw;
    width: 55vw;
  }
  @media screen and (max-width: 768px) {
    margin: 30% 8vw 0;
    width: 100vw;
    color: #2B2835;
  }
`
export const HeroSubHeader = styled.h6`
  color: #FFFFFF;
  @media screen and (max-width: 768px) {
    color: #2B2835;
  }
`
export const HeroHeader = styled.h1`
  font-size: ${({leftImg}) => (leftImg ? '40px' : '50px')};
  margin: 1vh 0 2vh;
  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`
export const ColorHeader = styled.h3`
  color: #000000;
`
export const FindColor = styled.p`
  color: #2B2835;
  font-size 16px;
`
export const ColorOptions = styled.div`
  display: ${({colorOptions}) => colorOptions ? 'block' : 'none'};
  margin: 0 0 4vh;
`

export const HeroDetails = styled.div`
  height: auto;
`
export const ProductPrice = styled.h3`
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
  margin-top: 2vh;

  @media screen and (max-width: 768px) {
    color: rgba(0, 0, 0, 0.52);
  }
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