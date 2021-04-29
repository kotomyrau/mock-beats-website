import styled from 'styled-components'

export const ProductsContainer = styled.div`
`
export const ProductsGridContainer = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-areas:
        "product product product"
        "product product product"
        ; 
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background: red;
`
export const ProductCard = styled.div`
grid-area: product;
background: pink;
`   
export const ProductImage = styled.div`
`
export const Img = styled.img`
width: 30px;
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
`
