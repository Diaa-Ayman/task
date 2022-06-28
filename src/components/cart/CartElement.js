import React, { Component } from 'react';
import { StyledSpan } from '../styles/Global';
import AttributeElement from '../AttributeElement';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cart-slice';

import {
  Image,
  ActionButton,
  Element,
  ElementData,
  ElementGallery,
  AttributeContainer,
  PriceContainer,
  Amount,
  Actions,
} from '../styles/cart.style';

class CartElement extends Component {
  increaseHandler() {
    this.props.increase();
  }
  decreaseHandler() {
    this.props.decrease();
  }
  render() {
    // console.log(this.props.product);
    const { name, id, gallery, prices, amount, attributes } =
      this.props?.product;
    const PRICE = prices.find(
      (price) => price.currency.label === this.props.curCurrency
    );
    const TotalPrice = (PRICE.amount * amount).toFixed(2);

    console.log(attributes);
    return (
      <div>
        <Element>
          <ElementData>
            {/* Title Of Cart Product  */}
            <StyledSpan
              fontFamily='raleway'
              fontWeight='600'
              fontSize='1.6rem'
              margin='0 0 7px 0'
            >
              {name}
            </StyledSpan>

            {/* Price Container... */}
            <PriceContainer>
              <StyledSpan fontWeight='900' fontSize='14px' margin='0 0 5px 0'>
                PRICE:
              </StyledSpan>
              <StyledSpan fontWeight='700' fontSize='20px' fontFamily='Arial'>
                {TotalPrice} {PRICE.currency.symbol}
                {/* PRICE */}
              </StyledSpan>
            </PriceContainer>

            {attributes.map((attribute) => (
              <AttributeContainer key={attribute.id}>
                <AttributeElement attribute={attribute} id={attribute.id} />
              </AttributeContainer>
            ))}
          </ElementData>

          {/* Show The Available gallery products */}

          <ElementGallery>
            {/* Buttons to increase and decrease amount of cart element */}
            <Actions>
              <ActionButton onClick={this.increaseHandler.bind(this)}>
                +
              </ActionButton>
              <Amount>{amount}</Amount>
              <ActionButton onClick={this.decreaseHandler.bind(this)}>
                -
              </ActionButton>
            </Actions>

            <Image alt='product gallery' src={gallery[0]} />
          </ElementGallery>
        </Element>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curCurrency: state.price.priceCurrency,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: () =>
      dispatch(
        addToCart({ ...ownProps.product, amount: ownProps.product.amount + 1 })
      ),
    decrease: () => dispatch(removeFromCart(ownProps.product.id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartElement);
