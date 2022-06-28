import Modal from '../Modal';
import { Component } from 'react';
import { StyledSpan } from '../styles/Global';
import { connect } from 'react-redux';
import CartElement from './CartElement';
import { withRouter } from 'react-router';
import { hideCartOverlay } from '../../store/cart-slice';

import {
  ActionButton,
  Container,
  Actions,
  TotalAmount,
} from '../styles/CartOverlay.style';

class CartOverlay extends Component {
  openCartHandler() {
    this.props.hideOverlay();
    this.props.history.push('/my-cart');
  }
  render() {
    return (
      <Modal>
        <StyledSpan
          fontSize='1rem'
          fontWeight='bolder'
          fontFamily='raleway'
          margin='1rem 0 0 0'
        >
          My Bag: {this.props.totalQuantity} items
        </StyledSpan>
        <Container>
          {this.props?.cartProducts.map((product) => (
            <CartElement product={product} key={product.id} />
          ))}
        </Container>
        <TotalAmount>
          <StyledSpan fontSize='1.2rem' font-weight='700'>
            Total
          </StyledSpan>
          <StyledSpan>
            {this.props.currentCurrency} {this.props.totalAmount}
          </StyledSpan>
        </TotalAmount>
        <Actions>
          <ActionButton
            border='.8px solid'
            hoveredColor='#fff'
            hoveredBackgroundColor='#0f0f0f'
            onClick={this.openCartHandler.bind(this)}
          >
            VIEW BAG
          </ActionButton>
          <ActionButton backgroundColor='#55E180' color='#fff'>
            CHECK OUT
          </ActionButton>
        </Actions>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.items,
    totalQuantity: state.cart.totalQuantity,
    totalAmount: state.cart.totalAmount,
    currentCurrency: state.price.priceCurrency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideOverlay: () => dispatch(hideCartOverlay()),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartOverlay)
);
