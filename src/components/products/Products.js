import React, { Component } from 'react';
import Product from './Product';
import testImage from '../../assets/testImage.png';
import styled from 'styled-components';
import { gql } from '@apollo/client';
// import client from '../../api/gql-client';
import fetchData from '../../api/fetchFun';
import { withRouter } from 'react-router';

const GET_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        id
        name
        gallery
      }
    }
  }
`;

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: false,
    };
  }
  async componentDidMount() {
    // const res = fetchData(GET_PRODUCTS);
    // res.then((response) => {
    //   this.setState({ products: response.data.categories[0].products });
    // });
    try {
      const data = await fetchData(GET_PRODUCTS);
      this.setState({
        products: data.data.categories,
        loading: data.loading,
      });
    } catch (error) {
      console.log('ERORR!!');
    }
  }

  render() {
    const products = this.state.products.find(
      (product) => product.name === this.props.match.params.categoryName
    );
    return (
      <ProductsContainer>
        {products?.products.map((product) => (
          <Product
            image={product.gallery[0] || product.gallery[1]}
            name={product.name}
            price={55}
            id={product.id}
            key={product.id}
          />
        ))}
      </ProductsContainer>
    );
  }
}

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 6rem 0;
`;

export default withRouter(Products);
