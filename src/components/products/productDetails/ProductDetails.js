import React, { Component } from 'react';
// import testImage from '../../../assets/testImage.png';
import Details from './Details';
import fetchData from '../../../api/fetchFun';
import {
  DetailsContainer,
  ProductGallery,
  GalleryImage,
  Availables,
  Image,
} from '../../styles/productDetails.style';
import { getProduct } from '../../../api/queries';

// A Dynamic Page...


class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
      loading: false,
      imageShowen: null,
    };
  }

  showImageHandler(src) {
    this.setState({ ...this.state, imageShowen: src });
  }

  async componentDidMount() {
    try {
      const data = await fetchData(getProduct(this.props.id));

      const updatedProductAttributes = data.data.product.attributes.map(attribute => {
        const updatedItems  = attribute.items.map(item => {
        return {...item, selected: false}
        })
        return {...attribute, items: updatedItems }
      })
      const updatedProduct = {...data.data.product, attributes: updatedProductAttributes}
      // console.log(updatedProduct)

      this.setState({
        product: updatedProduct,
        loading: data.loading,
      });
    } catch (error) {
      console.log('ERORR!!');
    }
  }
  render() {
       return (
      <DetailsContainer>
        <ProductGallery>
          <Availables>
            {this.state.product.gallery?.map((image, index) => (
              <GalleryImage
                src={image}
                key={index}
                onClick={this.showImageHandler.bind(this, image)}
              />
            ))}
          </Availables>
          <Image
            src={
              !this.state.imageShowen && this.state.product.gallery
                ? this.state.product?.gallery[0]
                : this.state.imageShowen
            }
          />
        </ProductGallery>
        <Details product={this.state.product && this.state.product} />
      </DetailsContainer>
    );
  }
}

export default ProductDetails;
