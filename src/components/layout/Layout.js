import { Component } from "react";
import styled from "styled-components";
import CartOverlay from "../cart/CartOverlay";
import Header from "./Header";
import { connect } from "react-redux";
import AvailableCurrencies from "./Currencies";
class Layout extends Component {
  render() {
    return (
      <OutputLayout
        cartOverlayVisible={this.props.cartOverlayVisible}
        currenciesOverlayVisible={this.props.currenciesOverlayVisible}
      >
        {this.props.cartOverlayVisible && <CartOverlay />}
        {this.props.currenciesOverlayVisible && <AvailableCurrencies />}
        <Header />
        <Main>{this.props.children}</Main>
      </OutputLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartOverlayVisible: state.overlays.cartOverlayVisible,
    currenciesOverlayVisible: state.overlays.currenciesOverlayVisible,
  };
};

export default connect(mapStateToProps)(Layout);

const OutputLayout = styled.div`
  padding: 0 8%;
  ${({ cartOverlayVisible }) =>
    cartOverlayVisible &&
    `
    overflow-y: hidden;
    height: 100vh;
  `}
  ${({ currenciesOverlayVisible }) =>
    currenciesOverlayVisible &&
    `
    overflow-y: hidden;
    height:100vh;
  `}
`;

const Main = styled.div`
  margin-top: 4rem;
  font-family: "Raleway", sans-serif;
`;
