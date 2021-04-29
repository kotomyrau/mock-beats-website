import React from 'react'
import "../buttons/buttons.css"

// OPTION 2
import { ProductData } from '../../data/products.js'
import { ProductsContainer,ProductsGridContainer, ProductCard, ProductImage, Img, ProductName, ProductFeatures, ProductPrice, ProductTextWrapper, ProductButton} from './ProductPageElements'

class ProductPage extends React.Component {
  // OPTION 3 DOCS: https://reactjs.org/docs/faq-ajax.html
  
//   constructor(props) {
//     super(props);

//     // define state
//     this.state = {
//       items: [],
//       isLoaded: false
//     }
//   }

//   componentDidMount() {
//     // fetch data from API
//     fetch('https://product-api-project.herokuapp.com/products')
//       // convert results to json
//       .then(res => res.json())
//       .then(json => {
//         // define new state
//         this.setState({
//           products: json,
//           isLoaded: true, 
//         })
//       }).catch((err) => {
//         console.log(err);
//       });
//   }

//   render() {

//     const { isLoaded, products } = this.state;

//     if (!isLoaded)
//       return <div>Loading...</div>;
//     else {
//       return (
//         <div>
//           <ul>
//             {products.map(product => (
//               <li key={product.id}>
//                 Name: {product.name}<br/>
//                 Price: {product.price}<br/>
//                 Image: {product.image}<br/>
//                 <img src={product.image}/>
//               </li>
//             ))}
//           </ul>
//         </div>
//       );
//     }
//   }
// }
  // OPTION 2: JSON FILE IN PROJECT FOLDER
  render() {    
    return (
      <ProductsContainer>
        <ProductsGridContainer>
            {/* iterate through data */}
            {ProductData.map((productDetail) => {
              return <div>
                <ProductCard>
                  <ProductImage><Img src={productDetail.image} /></ProductImage>
                  <ProductTextWrapper>
                    <ProductName>{productDetail.name}</ProductName>
                    <ProductFeatures>{productDetail.features[0].battery}<br />{productDetail.features[0].power}</ProductFeatures>
                    <ProductPrice>${productDetail.price}</ProductPrice>
                      <ProductButton>
                      <button to="#">buy now</button>
                    </ProductButton>
                  </ProductTextWrapper>
                </ProductCard>
              </div>
            })}
        </ProductsGridContainer>
      </ProductsContainer>
    )
  }
}

// OPTION 1: FETCHING FROM JSON URL
  // default state
  // state = {
  //   loading: true,
  //   products: null,
  // }
  // async componentDidMount() {
  //   const url = 'https://product-api-project.herokuapp.com/products';
  //   const response = await fetch(url);

  //   // 
  //   const data = await response.json();
  //   this.setState({ product: data[0], loading: false});
  //   console.log(data[0]);
  // }
  // render() {
  //   return (
  //     <div>
  //       {this.state.loading || !this.state.product ? (
  //         <div>loading...</div> 
  //       ) : ( 
  //         <div>
  //           <div>{this.state.product.name}</div>
  //           <div>{this.state.product.price}</div>
  //           <img src={this.state.product.image}/>
  //         </div>
  //       )}
  //   </div>
  // );
  // }
  // }


export default ProductPage
