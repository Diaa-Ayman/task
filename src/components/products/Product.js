import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  ProductCard,
  ProductImage,
  Title,
  Price,
} from '../styles/category.style';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

class Product extends Component {
  render() {
    const { name, price, image, id } = this.props;

    const PRICE = `${price.amount.toFixed(2)} ${price.currency.symbol}`;
    return (
      <Link style={linkStyle} to={`/products/${id}`}>
        <ProductCard>
          <ProductImage src={image} alt='image' />
          <Title>{name}</Title>
          <Price>{PRICE}</Price>
        </ProductCard>
      </Link>
    );
  }
}

export default Product;
