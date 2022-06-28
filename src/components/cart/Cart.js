import { Component } from 'react';
import styled from 'styled-components';
import CartElement from './CartElement';
import { StyledSpan } from '../styles/Global';
import { connect } from 'react-redux';
import { Center } from '../styles/cart.style';
class Cart extends Component {
  render() {
    // const cartProducts = [1, 2, 3, 4];
    if (this.props.cartProducts.length === 0) {
      return <Center>Your Cart Is Empty!</Center>;
    }
    return (
      <div>
        <StyledSpan fontSize='2.2rem' fontWeight='bolder' fontFamily='raleway'>
          CART
        </StyledSpan>
        <Container>
          {this.props?.cartProducts.map((product) => (
            <CartElement product={product} key={product.id} />
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
const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.items,
    totalQuantity: state.cart.totalQuantity,
  };
};

export default connect(mapStateToProps)(Cart);
