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
 display:grid;
 grid-template-columns: auto auto auto;
  margin: 6rem 0;

  @media (max-width: 1000px) {
    grid-template-columns: auto auto ;

  }
  
  @media (max-width: 750px) {
    grid-template-columns: auto  ;

  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content:flex-start ;
  padding: 10px;
  margin-right: 15px;
  margin-top: 25px;
  width:330px;
  position: relative;
  animation: ${scale_ON} 800ms ease-out;
  /* padding: 10px;
margin: 6px; */
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 5px #eee;
    transition: .5s; 
}
${({ inStock }) => !inStock && `
    opacity: 0.5;
  `}

  .link{
    text-decoration: none;
    color: inherit;
  }
`;

const ProductImage = styled.img`
  height: 300px;
  width: 90%;
  object-fit: cover;
  object-position:top;
  margin-bottom: 20px;
  padding: 8px;
`;

const Title = styled.span`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  letter-spacing: 2px;
`;
const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const CartLogo = styled.img`
width:60px;
height:60px;
border-radius: 50%;
position:absolute;
bottom:80px;
right: 40px;
&:hover{
  transform: scale(1.1) ;
}
`
const Stock = styled.span`
  position:absolute ;
  top:50%;
  left:25%;
  font-size:25px ;
  font-weight:700;
  color:#a3a3a3;
`
const ImageContainer = styled.div`
position:relative;
`
const Container = styled.div`
  display:flex;
  flex-direction: column;
`
export {Container, Price, Title, ProductImage, ProductCard, ProductsContainer, CartLogo, ImageContainer, Stock };
