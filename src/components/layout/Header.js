import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import cartLogo from '../../assets/cartLogo.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { gql } from '@apollo/client';
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
import fetchData from '../../api/fetchFun';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};
const GET_CATEGORIES_NAME = gql`
  query {
    categories {
      name
    }
  }
`;
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
  async componentDidMount() {
    try {
      const data = await fetchData(GET_CATEGORIES_NAME);
      this.setState({
        categories: data.data.categories,
      });
    } catch (error) {
      console.log('ERORR!!');
    }
  }
  render() {
    return (
      <HeaderContainer>
        <Nav>
          {this.state.categories.map((category) => (
            <NavItem key={category.name}>
              <NavLink style={linkStyle} to={`/${category.name}`}>
                {category.name.toUpperCase()}
              </NavLink>
            </NavItem>
          ))}
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
