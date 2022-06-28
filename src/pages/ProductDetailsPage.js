import React, { Component } from 'react';
// import Products from '../components/products/Products';
// import styled from 'styled-components';
import ProductDetails from '../components/products/productDetails/ProductDetails';
import { withRouter } from 'react-router';
class ProductDetailsPage extends Component {
  render() {
    const productId = this.props.match.params.productId;
    return (
      <div>
        <ProductDetails id={productId} />
      </div>
    );
  }
}

export default withRouter(ProductDetailsPage);
