import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import cartLogo from '../../assets/cartLogo.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { showCartOverlay } from '../../store/cart-slice';
import AvailableCurrencies from './Currencies';
import {
  HeaderContainer,
  Nav,
  NavItem,
  ActionsLogo,
  Actions,
  CartLogo,
  Badge,
  Logo,
} from '../styles/header.style';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

class Header extends Component {
  showCartOverlay() {
    this.props.showCartOverlay();
  }
  render() {
    return (
      <HeaderContainer>
        <Nav>
          <NavItem>
            <NavLink style={linkStyle} to='/all'>
              ALL
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={linkStyle} to='/clothes'>
              CLOTHES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={linkStyle} to='/tech'>
              TECH
            </NavLink>
          </NavItem>
        </Nav>
        <Logo src={logo} alt='logo' />
        <Actions>
          <div>
            {/* <ActionsLogo src={dollar} alt='logo' /> */}
            <AvailableCurrencies />
          </div>
          <CartLogo onClick={this.showCartOverlay.bind(this)}>
            <ActionsLogo src={cartLogo} alt='logo' />
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showCartOverlay: () => dispatch(showCartOverlay()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
