import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledSpan, Button } from '../../Global';
import AttributeElement from '../../AttributeElement';
export class Details extends Component {
  render() {
    const attributes = ['L', 'XL', 'SM', 'M', 'XS'];
    const colorsAttributes = ['blue', 'red', 'green', 'pink', ' #080808'];
    return (
      <DetailsColumn>
        <StyledSpan
          fontFamily='raleway'
          fontWeight='900'
          fontSize='2rem'
          width='60%'
          margin='0 0 10px 0'
        >
          Apollo Runner Short
          {/* Title of Product */}
        </StyledSpan>
        <SizeContainer>
          <AttributeElement
            attributes={attributes}
            child='SIZE'
            width='50px'
            height='35px'
            hoveredBackgroundColor='#0f0f0f'
            hoveredColor='#fff'
          />
        </SizeContainer>
        <ColorsContainer>
          <AttributeElement
            attributes={colorsAttributes}
            colors
            child='COLOR'
            width='15px'
            height='15px'
          />
        </ColorsContainer>
        <PriceContainer>
          <StyledSpan fontWeight='900' fontSize='12px'>
            PRICE:
          </StyledSpan>
          <StyledSpan fontWeight='900' fontSize='22px' fontFamily='raleway'>
            50.00$
            {/* PRICE */}
          </StyledSpan>
        </PriceContainer>
        <Button
          padding='15px 0'
          margin='2rem 0'
          color='#fff'
          width='90%'
          backgroundColor='#5ECE7B'
        >
          ADD TO CART
        </Button>
        <StyledSpan
          id='description'
          fontSize='14px'
          fontFamily='raleway'
          width='90%'
        >
          Apollo Diaa Winner hello go there Apollo Diaa Winner hello go there
          Apollo Diaa Winner hello go there Apollo Diaa Winner hello go there
          Apollo Diaa Winner hello go there
          {/* DESCRIPTION OF PRODUCT */}
        </StyledSpan>
      </DetailsColumn>
    );
  }
}

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const AttributesContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;
const SizeContainer = styled.div`
  margin: 1rem 0;
`;
const ColorsContainer = styled.div``;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export default Details;
