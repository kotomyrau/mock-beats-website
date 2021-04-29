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
`   
export const ProductTextWrapper = styled.div`
  height: fit-content;
  margin: 100% 0 0vh;
  z-index: 1;
`
export const ProductImage = styled.div`
  height: auto;
  margin: 0 6vw;
  position: absolute;
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
  font-size: 25px;
  line-height: 41px;
`
export const ProductButton = styled.div`
  display: inline-block;
  float: right;
`