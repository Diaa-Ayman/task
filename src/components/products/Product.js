import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

class Product extends Component {
  render() {
    const { name, price, image, id } = this.props;

    const PRICE = `${price.toFixed(2)}$`;
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

const ProductCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 15px;
  border-left: 0.2px solid #eee;
  transition: 0.3s;
  /* padding: 10px;
  margin: 6px; */
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.3s;
    text-decoration: underline;
  }
`;

const ProductImage = styled.img`
  width: 280px;
  height: 300px;
  object-fit: cover;
  object-position: top right;
  margin-bottom: 20px;
  transition: 0.6s;
  &:hover {
    transition: 0.6s;
  }
`;

const Title = styled.span`
  margin: 10px 0;
  font-size: 19px;
  font-weight: 450;
  text-transform: capitalize;
  letter-spacing: 2px;
`;
const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export default Product;
