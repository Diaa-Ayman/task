import React, { Component } from "react";
import logo from "../../assets/logo.png";
import cartLogo from "../../assets/cartLogo.png";
import topArrow from "../../assets/top.png";
import bottomArrow from "../../assets/bottom.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  showCartOverlay,
  showCurrenciesOverlay,
} from "../../store/overlays-slice";
import {
  HeaderContainer,
  Nav,
  NavItem,
  ActionsLogo,
  Actions,
  CartLogo,
  Badge,
  Logo,
  CurrentCurrency,
} from "../styles/header.style";
import fetchData from "../../api/fetchFun";
import { GET_CATEGORIES_NAME } from "../../api/queries";
// const linkStyle = {
//   textDecoration: 'none',
//   color: 'inherit',
// };

class Header extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }
  showCartOverlay() {
    this.props.showCartOverlay();
  }
  showCurrenciesOverlay() {
    this.props.showCurrenciesOverlay();
  }
  async componentDidMount() {
    try {
      const data = await fetchData(GET_CATEGORIES_NAME);
      this.setState({
        categories: data.data.categories,
      });
    } catch (error) {
      console.log("ERORR!!");
    }
  }
  render() {
    return (
      <HeaderContainer>
        <Nav>
          {this.state.categories.map((category) => (
            <NavItem key={category.name}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to={`/${category.name}`}
              >
                {category.name.toUpperCase()}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <Logo src={logo} alt="logo" />
        <Actions>
          <div>
            {/* <ActionsLogo src={dollar} alt='logo' /> */}
            <CurrentCurrency onClick={this.showCurrenciesOverlay.bind(this)}>
              <span>{this.props.currentCurrency}</span>
              {this.props.currenciesOverlayVisible ? (
                <img src={topArrow} alt="top" />
              ) : (
                <img src={bottomArrow} alt="bottom" />
              )}
            </CurrentCurrency>
            {/* <AvailableCurrencies /> */}
          </div>
          <CartLogo onClick={this.showCartOverlay.bind(this)}>
            <ActionsLogo src={cartLogo} alt="logo" />
            <Badge>{this.props.totalQuantity}</Badge>
          </CartLogo>
        </Actions>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalQuantity: state.cart.totalQuantity,
    currentCurrency: state.cart.priceCurrency,
    currenciesOverlayVisible: state.overlays.currenciesOverlayVisible,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showCartOverlay: () => dispatch(showCartOverlay()),
    showCurrenciesOverlay: () => dispatch(showCurrenciesOverlay()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
