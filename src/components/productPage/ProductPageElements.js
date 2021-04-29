import styled from 'styled-components'

export const ProductsContainer = styled.div`
`
export const ProductsGridContainer = styled.div`
    display: grid;
    grid-gap: 2vh 2vw;
    grid-template-areas:
        "product product product"
        "product product product"
        ; 
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background: red;
    margin: 0 6vw;
`
export const ProductCard = styled.div`
grid-area: product;
background: pink;
width: auto;
height: 100vh;
margin: auto;
padding: 4vh 4vw;
position: relative;
`   
export const ProductTextWrapper = styled.h3`
position: absolute;
z-index: 999;
top: 40%;

`
export const ProductImage = styled.div`
height: 100%;
width: auto;
`
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`
export const ProductName = styled.h3`
font-weight: 500;
font-size: 50px;
color: #2B2835;
`
export const ProductFeatures = styled.p`
font-weight: 400;
color: #030303;
font-size: 14px;
`
export const ProductPrice = styled.h6`
color: #9D8220;
font-weight: 600;
font-size: 25px;
display: inline-block;
margin-right: 4vw;
`
