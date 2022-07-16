import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartLogo from '../../assets/greenCartLogo.png'
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart-slice';
import { withRouter } from 'react-router';

import {
  ProductCard,
  ProductImage,
  Title,
  Price,
  ImageContainer,
  CartLogo,
  Stock,
  Container,
} from '../styles/category.style';

class Product extends Component {

  state = {
    showCartLogo: false,
  }

  hoverCardHandler() {
    this.setState({
      showCartLogo: true
    })
  }
  mouseLeaveCardHandler() {
    this.setState({
      showCartLogo: false
    })
  }

  addToCartHandler() {
    this.props.addToCart();
  }
  render() {
    const {inStock, name, brand ,price, image, id } = this.props;

  

    const PRICE = `${price.amount.toFixed(2)} ${price.currency.symbol}`;

    return (
        <ProductCard inStock={inStock} onMouseEnter={this.hoverCardHandler.bind(this)} onMouseLeave={this.mouseLeaveCardHandler.bind(this)}>
         <Link className='link' to={`/products/${id}`}>
            <ImageContainer>
              {!inStock && <Stock>OUT OF STOCK</Stock>}
            <ProductImage src={image} alt='image' />
            </ImageContainer>
            <Container>
            <Title>{brand}{' '}{name}</Title>
            <Price>{PRICE}</Price>
            </Container>
          </Link>
          {this.state.showCartLogo && <CartLogo src={cartLogo} alt="cart logo" onClick={inStock ? this.addToCartHandler.bind(this): undefined }/>}
        </ProductCard>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => {

      const {name, id, prices, gallery, attributes, brand} = ownProps
      let UID = ''
      const cartAttributes =  attributes.map(attribute => {
        const updatedItems = attribute.items.map((item, index) => {

          if(index === 0) return {...item, selected:true}

          else return {...item, selected:false}
        })

        return {...attribute, items: updatedItems}
      }) 

      cartAttributes.forEach(attribute => {
        let selectedItemOfEach = attribute.items.find(item => item.selected)
        if(!selectedItemOfEach){
          attribute.items[0].selected = true;
          selectedItemOfEach = attribute.items.find(item => item.selected)
        }
          UID += selectedItemOfEach.id
      })
      UID = UID +'_'+name.replace(/ +/g, "")

      dispatch(
        addToCart({
          name:name,
          uid: UID,
          id:id,
          prices:prices,
          amount: 1,
          gallery: gallery,
          attributes: cartAttributes,
          brand:brand,
        })
      );
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Product));
