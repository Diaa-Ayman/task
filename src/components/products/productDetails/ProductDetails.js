import React, { Component } from 'react';
// import testImage from '../../../assets/testImage.png';
import Details from './Details';
import { gql } from '@apollo/client';
import fetchData from '../../../api/fetchFun';
import {
  DetailsContainer,
  ProductGallery,
  GalleryImage,
  Availables,
  Image,
} from '../../styles/productDetails.style';

// A Dynamic Page...

const GET_PRODUCT = gql`
  query {
    category {
      name
      products {
        id
        name
        brand
        gallery
        description
        inStock
        attributes {
          name
          id
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
`;

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      loading: false,
      imageShowen: null,
    };
  }

  showImageHandler(src) {
    this.setState({ ...this.state, imageShowen: src });
  }

  async componentDidMount() {
    try {
      const data = await fetchData(GET_PRODUCT);
      this.setState({
        products: data.data.category,
        loading: data.loading,
      });
    } catch (error) {
      console.log('ERORR!!');
    }
  }
  render() {
    // const productGallery = [testImage, testImage, testImage];
    // console.log(this.state.products?.products);
    const product = this.state.products.products?.find(
      (product) => product.id === this.props.id
    );
    return (
      <DetailsContainer>
        <ProductGallery>
          <Availables>
            {product?.gallery.map((image, index) => (
              <GalleryImage
                src={image}
                key={index}
                onClick={this.showImageHandler.bind(this, image)}
              />
            ))}
          </Availables>
          <Image
            src={
              !this.state.imageShowen
                ? product?.gallery[0]
                : this.state.imageShowen
            }
          />
        </ProductGallery>
        <Details product={product} />
      </DetailsContainer>
    );
  }
}

export default ProductDetails;
