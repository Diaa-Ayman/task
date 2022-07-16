import styled from 'styled-components';


const  CurrenciesContanier = styled.div`
display:flex ;
  flex-direction: column;
  `
const Currency = styled.span`
  font-weight: 800;
  font-size:17px;
  padding:8px 20px;
  font-family: 'raleway', sans-serif;
  &:hover{
    background-color:#eee;
    cursor:pointer ;
  }
`
export { Currency, CurrenciesContanier };
