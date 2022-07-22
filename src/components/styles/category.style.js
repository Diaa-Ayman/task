import styled, { keyframes } from "styled-components";

const scale_ON = keyframes`
   from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 6rem 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: flex-start;
  padding: 10px;
  margin-right: 15px;
  margin-bottom: 30px;
  position: relative;
  animation: ${scale_ON} 800ms ease-out;
  /* padding: 10px;
margin: 6px; */
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 5px #eee;
    transition: 0.5s;
  }
  ${({ inStock }) =>
    !inStock &&
    `
    opacity: 0.5;
  `}

  .link {
    text-decoration: none;
    color: inherit;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: contain;
`;

const Title = styled.span`
  margin: 5px 0;
  font-size: 18px;
  font-weight: 500;
  width: 70%;
  line-height: 1.3;
  text-transform: capitalize;
  letter-spacing: 1.5px;
`;
const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const CartLogo = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: absolute;
  bottom: 65px;
  right: 30px;
  &:hover {
    transform: scale(1.1);
  }
`;
const Stock = styled.span`
  position: absolute;
  top: 50%;
  left: 25%;
  font-size: 25px;
  font-weight: 700;
  color: #a3a3a3;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export {
  Container,
  Price,
  Title,
  ProductImage,
  ProductCard,
  ProductsContainer,
  CartLogo,
  ImageContainer,
  Stock,
};
