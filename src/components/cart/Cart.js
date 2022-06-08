import { Component } from 'react';
import styled from 'styled-components';
import CartElement from './CartElement';
import { StyledSpan } from '../Global';

export default class Cart extends Component {
  render() {
    const cartProducts = [1, 2, 3, 4];

    return (
      <div>
        <StyledSpan fontSize='2.2rem' fontWeight='bolder' fontFamily='raleway'>
          CART
        </StyledSpan>
        <Container>
          {cartProducts.map((product) => (
            <CartElement />
          ))}
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
`;
