import styled from 'styled-components'

export const ProductsContainer = styled.div`
  padding: 0 6vw
`
export const ProductsGridContainer = styled.div`
  display: grid;
  grid-gap: 4vh 2vw;
  grid-template-areas:
    "product product product"
    "product product product"
    ; 
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "product"
      "product"
      "..."
      ; 
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }

`
export const ProductCard = styled.div`
  display: flex;
  grid-area: product;
  justify-content: center;
  height: auto;
  margin: auto;
  padding: 4vh 4vw;
  position: relative;
  width: auto;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
  height: fit-content;
}
`   
export const ProductTextWrapper = styled.div`
  height: fit-content;
  margin: 100% 0 0vh;
  z-index: 1;
`
export const ProductImage = styled.div`
  height: auto;
  margin: 0 auto;
  position: absolute;
  width: 55%;

  @media screen and (max-width: 768px) {
    margin: 4vh auto;
  }
`
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`
export const ProductName = styled.h1`
  color: #2B2835;
  font-weight: 500;
  margin: 8vh 0 1vh;
`
export const ProductFeatures = styled.p`
  color: #030303;
  margin: 0 0 2vh;
`
export const ProductPrice = styled.h4`
  color: #9D8220;
  display: inline-block;
  float: left;
  font-size: 25px;
  line-height: 41px;
  @media screen and (max-width: 1024px) {
    float: none;
  }
  @media screen and (max-width: 768px) {
    float: left;
  }
`
export const ProductButton = styled.div`
  display: inline-block;
  float: right;
  @media screen and (max-width: 1024px) {
    float: none;
  }
  @media screen and (max-width: 768px) {
    float: right;
  }
`