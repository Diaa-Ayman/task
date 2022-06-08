import React, { Component } from 'react';
import Products from '../components/products/Products';
import styled from 'styled-components';
import ProductDetails from '../components/products/productDetails/ProductDetails';
import { withRouter } from 'react-router';
class ProductDetailsPage extends Component {
  render() {
    console.log(this.props.match.params.productId);
    return (
      <div>
        <ProductDetails />
      </div>
    );
  }
}

export default withRouter(ProductDetailsPage);
