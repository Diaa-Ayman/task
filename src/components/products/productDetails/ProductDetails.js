import React, { Component } from 'react';
import styled from 'styled-components';
import testImage from '../../../assets/testImage.png';
import Details from './Details';
// A Dynamic Page...
class ProductDetails extends Component {
  render() {
    const productGallery = [testImage, testImage, testImage];
    return (
      <DetailsContainer>
        <ProductGallery>
          <Availables>
            {productGallery.map((image, index) => (
              <GalleryImage src={image} width={80} height={80} key={index} />
            ))}
          </Availables>
          <Image src={testImage} />
        </ProductGallery>
        <Details />
      </DetailsContainer>
    );
  }
}

const DetailsContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin: 3rem 0;
`;
const ProductGallery = styled.div`
  display: flex;
`;
const GalleryImage = styled.img`
  object-fit: cover;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 2px;
  &:hover {
    background-color: #eee;
  }
`;

const Availables = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  margin: 0 3.5rem 0 1rem;
  width: 600px;
  height: 500px;
  object-fit: cover;
`;

export default ProductDetails;
