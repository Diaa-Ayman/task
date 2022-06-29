import React, { Component } from 'react';
import Product from './Product';
import { gql } from '@apollo/client';
// import client from '../../api/gql-client';
import fetchData from '../../api/fetchFun';
import { withRouter } from 'react-router';
import { ProductsContainer } from '../styles/category.style';
import { connect } from 'react-redux';

const GET_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        id
        name
        gallery
        prices {
          currency {
            symbol
            label
          }
          amount
        }
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
        {products?.products.map((product) => {
          const price = product?.prices.find(
            (price) => price.currency.symbol === this.props.curCurrency
          );

          return (
            <Product
              image={product.gallery[0] || product.gallery[1]}
              name={product.name}
              price={price}
              id={product.id}
              key={product.id}
            />
          );
        })}
      </ProductsContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curCurrency: state.cart.priceCurrency,
  };
};

export default withRouter(connect(mapStateToProps)(Products));
