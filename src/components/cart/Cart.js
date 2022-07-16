import { Component } from 'react';
import styled from 'styled-components';
import CartElement from './CartElement';
import { StyledSpan } from '../styles/Global';
import { connect } from 'react-redux';
import { Center } from '../styles/cart.style';
import { OrderBox } from '../styles/cart.style';
import { ActionButton } from '../styles/CartOverlay.style';

let tax = 0.21;
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
            <CartElement
              product={product}
              key={product.uid}
            />
          ))}
        </Container>
        <OrderBox>
          <StyledSpan margin='0 0 8px 0' fontSize='18px'>
            Tax 21%:{' '}
            <StyledSpan fontWeight='900'>
              {this.props.curCurrency}{' '}
              {(this.props.totalAmount * tax).toFixed(2)}
            </StyledSpan>
          </StyledSpan>
          <StyledSpan margin='0 0 8px 0' fontSize='18px'>
            Quantity:{' '}
            <StyledSpan fontWeight='900'>{this.props.totalQuantity}</StyledSpan>
          </StyledSpan>
          <StyledSpan margin='0 0 8px 0' fontSize='18px'>
            Total:{' '}
            <StyledSpan fontWeight='900'>
              {this.props.curCurrency}{' '}
              {(this.props.totalAmount * (1 - tax)).toFixed(2)}
            </StyledSpan>
          </StyledSpan>
          <ActionButton backgroundColor='#55E180' color='#fff' width='250px'>
            ORDER
          </ActionButton>
        </OrderBox>
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
    curCurrency: state.cart.priceCurrency,
    totalAmount: state.cart.totalAmount,
  };
};

export default connect(mapStateToProps)(Cart);
