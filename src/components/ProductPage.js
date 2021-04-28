import React, { Component } from 'react'
import ProductData from '../data/products.json'

class ProductPage extends Component {
  render() {    
    return (
      <div>
        {ProductData.map((productDetail, index) => {
          return <div index={index}>
            <h1>{productDetail.name} {index}</h1>
            
          </div>
        })}
      </div>
    )
  }
}

export default ProductPage
