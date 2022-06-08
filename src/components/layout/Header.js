import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import cartLogo from '../../assets/cartLogo.png';
import dollar from '../../assets/dollar.png';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const active = `
color: #5ece7b;
border-bottom: 2px solid #5ece7b;
font-weight: 700;
`;
class Header extends Component {
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
        <img src={logo} alt='logo' />
        <Actions>
          <ActionsLogo src={dollar} alt='logo' />
          <ActionsLogo src={cartLogo} alt='logo' />
        </Actions>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 550;
  color: #1d1f22;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.span`
  margin-right: 30px;
  padding-bottom: 15px;
  cursor: pointer;
  &:hover {
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
    font-weight: 700;
  }
`;

const ActionsLogo = styled.img`
  margin-left: 15px;
  padding: 5px;
  cursor: pointer;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
