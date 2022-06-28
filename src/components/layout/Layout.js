import { Component } from 'react';
import styled from 'styled-components';
import CartOverlay from '../cart/CartOverlay';
import Header from './Header';
import { connect } from 'react-redux';

class Layout extends Component {
  render() {
    return (
      <OutputLayout>
        {this.props.cartOverlayVisible && <CartOverlay />}
        <Header />
        <Main>{this.props.children}</Main>
      </OutputLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartOverlayVisible: state.cart.cartOverlayVisible,
  };
};

export default connect(mapStateToProps)(Layout);
const OutputLayout = styled.div`
  padding: 0 8%;
`;

const Main = styled.div`
  margin-top: 4rem;
  font-family: 'Raleway', sans-serif;
`;
