import styled, { keyframes } from 'styled-components';

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
  display: flex;
  flex-wrap: wrap;
  margin: 6rem 0;
`;

const ProductCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-right: 15px;
  margin-top: 25px;
  transition: 0.5s;
  animation: ${scale_ON} 800ms ease-out;
  /* padding: 10px;
margin: 6px; */
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
    text-decoration: underline;
  }
`;

const ProductImage = styled.img`
  width: 300px;
  height: 320px;
  object-fit: cover;
  object-position: top;
  margin-bottom: 20px;
  transition: 0.6s;
  &:hover {
    transition: 0.6s;
  }
  @media (max-width: 1300px) {
    width: 340px;
    height: 360px;
  }
  @media (max-width: 970px) {
    width: 270px;
    height: 290px;
  }
  @media (max-width: 750px) {
    width: 300px;
    height: 320px;
  }
`;

const Title = styled.span`
  margin: 10px 0;
  font-size: 19px;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 2px;
`;
const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
export { Price, Title, ProductImage, ProductCard, ProductsContainer };
