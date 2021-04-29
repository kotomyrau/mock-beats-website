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
height: auto;
margin: auto;
padding: 4vh 4vw;
position: relative;
display: flex;
justify-content: center;


`   
export const ProductTextWrapper = styled.h3`
// position: absolute;
// z-index: 1;
// // top: 50vh;
// bottom: 4vh;
// margin: 0 4vw 0 0;
/* position: absolute; */
z-index: 1;
/* bottom: 4vh; */
/* margin: 0 4vw 0 0; */
height: fit-content;
/* margin-bottom: 4vh; */
/* position: relative; */
/* bottom: 0; */
margin: 100% 0 0vh;

`
export const ProductImage = styled.div`
// height: auto;
// width: 80%;
// margin: 0 auto;
height: auto;
    /* width: 80%; */
    margin: 0 6vw;
    position: absolute;

`
export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`
export const ProductName = styled.h3`
font-weight: 500;
font-size: 50px;
color: #2B2835;
margin: 8vh 0 1vh;
`
export const ProductFeatures = styled.p`
font-weight: 400;
color: #030303;
font-size: 14px;
margin: 0 0 2vh;
`
export const ProductPrice = styled.h6`
color: #9D8220;
font-weight: 600;
font-size: 25px;
display: inline-block;
margin: 0 0 0;
line-height: 41px;
`

export const ProductButton = styled.div`
display: inline-block;
float: right;


`