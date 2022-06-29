import styled, { keyframes } from 'styled-components';

const slide_Down = keyframes`
   from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 550;
  color: #1d1f22;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  z-index: 100;
  animation: ${slide_Down} 800ms ease-out forwards;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  @media (max-width: 700px) {
    display: none;
  }
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

const CartLogo = styled.div`
  position: relative;
  cursor: pointer;
`;
const Badge = styled.span`
  position: absolute;
  top: -7px;
  right: -7px;
  width: 22px;
  height: 22px;
  background-color: #0f0f0f;
  font-size: 13px;
  font-weight: 800;
  color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: 0.5s;
  &:hover {
    transform: scale(2);
  }
`;

export {
  HeaderContainer,
  Logo,
  Nav,
  NavItem,
  ActionsLogo,
  Actions,
  CartLogo,
  Badge,
};
