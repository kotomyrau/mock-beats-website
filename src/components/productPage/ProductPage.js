import React, { Component } from 'react'
import ProductData from '../../data/products.json'
import { ProductsContainer,ProductsGridContainer, ProductCard, ProductImage, Img, ProductName, ProductFeatures, ProductPrice} from './ProductPageElements'

class ProductPage extends Component {

  render() {    
    return (
      <ProductsContainer>
        <ProductsGridContainer>
          <ProductCard>
            {ProductData.map((productDetail, index) => {
              return <div index={index}>
                <ProductImage><Img src={productDetail.image} /></ProductImage>
                <ProductName>{productDetail.name}</ProductName>
                <ProductFeatures>{productDetail.features[0].battery}<br />{productDetail.features[0].power}</ProductFeatures>
                <ProductPrice>{productDetail.price}</ProductPrice>
                
              </div>
            })}
          </ProductCard>
        </ProductsGridContainer>
      </ProductsContainer>
    )
  }
}

export default ProductPage
