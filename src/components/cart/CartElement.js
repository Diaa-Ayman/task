import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledSpan, Button } from '../Global';
import AttributeElement from '../AttributeElement';
import testImage from '../../assets/testImage.png';

class CartElement extends Component {
  render() {
    const attributes = ['L', 'XL', 'SM', 'M', 'XS']; //test
    const colorsAttributes = ['blue', 'red', 'green', 'pink', ' #080808']; // test
    return (
      <div>
        <Element>
          <ElementData>
            {/* Title  */}

            <StyledSpan
              fontFamily='raleway'
              fontWeight='600'
              fontSize='1.6rem'
              margin='0 0 7px 0'
            >
              Apollo Runner Short
              {/* Title of Product */}
            </StyledSpan>

            {/* Price Container... */}

            <PriceContainer>
              <StyledSpan fontWeight='900' fontSize='10px'>
                PRICE:
              </StyledSpan>
              <StyledSpan fontWeight='900' fontSize='20px' fontFamily='raleway'>
                50.00$
                {/* PRICE */}
              </StyledSpan>
            </PriceContainer>

            {/* Size Container... */}
            <SizeContainer>
              <AttributeElement
                attributes={attributes}
                child='SIZE'
                width='35px'
                height='27px'
                hoveredBackgroundColor='#0f0f0f'
                hoveredColor='#fff'
              />
            </SizeContainer>

            {/* Colors Container... */}
            <ColorsContainer>
              <AttributeElement
                attributes={colorsAttributes}
                colors
                child='COLOR'
                width='12px'
                height='12px'
              />
            </ColorsContainer>
          </ElementData>

          {/* Show The Available gallery products */}

          <ElementGallery>
            {/* Buttons to increase and decrease amount of cart element */}
            <Actions>
              <Button
                width='40px'
                backgroundColor='transparent'
                hoveredBackgroundColor='#0f0f0f'
                hoveredColor='#fff'
                color='#000'
                padding='8px'
                fontSize='15px'
                border='1px solid #ccc'
              >
                +
              </Button>
              <Amount>2</Amount>
              <Button
                width='40px'
                backgroundColor='transparent'
                hoveredBackgroundColor='#0f0f0f'
                hoveredColor='#fff'
                color='#000'
                padding='8px'
                fontSize='15px'
                border='1px solid #ccc'
              >
                -
              </Button>
            </Actions>

            <Image
              alt='product gallery'
              src={testImage}
              width={260}
              height={280}
            />
          </ElementGallery>
        </Element>
      </div>
    );
  }
}

const Image = styled.img``;
const Element = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
`;
const ElementData = styled.div`
  width: 30%;
`;
const ElementGallery = styled.div`
  display: flex;
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

const Amount = styled.h5`
  font-size: 20px;
  padding: 8px;
  width: 30px;
  /* background-color: #0f0f0f;
  color: #fff; */
  text-align: center;
`;
const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;
export default CartElement;
