import React from 'react'
import { ProductData } from '../../data/products.js'
import { ProductsContainer,ProductsGridContainer, ProductCard, ProductImage, Img, ProductName, ProductFeatures, ProductPrice, ProductTextWrapper} from './ProductPageElements'
import "../buttons/buttons.css"

class ProductPage extends React.Component {

  render() {    
    return (
      <ProductsContainer>
        <ProductsGridContainer>
            {ProductData.map((productDetail, index) => {
              return <div index={index}>
                <ProductCard>
                <ProductImage><Img src={productDetail.image} /></ProductImage>
                <ProductTextWrapper>

                <ProductName>{productDetail.name}</ProductName>
                <ProductFeatures>{productDetail.features[0].battery}<br />{productDetail.features[0].power}</ProductFeatures>
                <ProductPrice>${productDetail.price}</ProductPrice>
                <button to="#">buy now</button>
                </ProductTextWrapper>
                </ProductCard>
                
              </div>
            })}
        </ProductsGridContainer>
      </ProductsContainer>
    )
  }
}

export default ProductPage
