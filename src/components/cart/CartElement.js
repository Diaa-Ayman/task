import React, { Component } from "react";
import { StyledSpan } from "../styles/Global";
import AttributeElement from "../AttributeElement";
import { connect } from "react-redux";
import leftArrow from "../../assets/left.png";
import rightArrow from "../../assets/right.png";

import {
  addToCart,
  removeFromCart,
  // getCartItemCurrentPrice,
} from "../../store/cart-slice";

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
  Title,
  ImageContainer,
  ArrowsContainer,
  Arrow,
} from "../styles/cart.style";

class CartElement extends Component {
  state = {
    imageIndexCount: 0,
  };
  // increase item amount by 1
  increaseHandler() {
    this.props.increase();
  }

  // decrease item amount by 1
  decreaseHandler() {
    this.props.decrease();
  }

  //  show all available images of product...
  nextImageHandler(gallery) {
    if (this.state.imageIndexCount < gallery.length - 1) {
      this.setState({
        imageIndexCount: this.state.imageIndexCount + 1,
      });
    }
  }
  prevImageHandler() {
    if (this.state.imageIndexCount > 0) {
      this.setState({
        imageIndexCount: this.state.imageIndexCount - 1,
      });
    }
  }

  render() {
    const { name, gallery, brand, prices, amount, attributes } =
      this.props?.product;
    const PRICE = prices.find(
      (price) => price.currency.symbol === this.props.curCurrency
    );

    return (
      <div>
        <Element>
          <ElementData>
            {/* Title Of Cart Product  */}
            <Title>
              <StyledSpan
                fontFamily="raleway"
                fontWeight={this.props.overlay ? "500" : "900"}
                fontSize={this.props.overlay ? "1.1rem" : "1.6rem"}
                margin="0 0 7px 0"
              >
                {brand}
              </StyledSpan>
              <StyledSpan
                fontFamily="raleway"
                fontWeight={this.props.overlay ? "500" : "900"}
                fontSize={this.props.overlay ? "1.1rem" : "1.4rem"}
                margin="0 0 7px 0"
              >
                {name}
              </StyledSpan>
            </Title>
            {/* Price Container... */}
            <PriceContainer>
              <StyledSpan fontWeight="700" fontSize="20px" fontFamily="raleway">
                {PRICE.amount} {PRICE.currency.symbol}
                {/* PRICE */}
              </StyledSpan>
            </PriceContainer>

            {attributes.map((attribute) => (
              <AttributeContainer key={attribute.id}>
                <AttributeElement
                  overlay={this.props.overlay}
                  attribute={attribute}
                  id={attribute.id}
                />
              </AttributeContainer>
            ))}
          </ElementData>

          {/* Show The Available gallery products */}

          <ElementGallery>
            {/* Buttons to increase and decrease amount of cart element */}
            <Actions>
              <ActionButton
                overlay={this.props.overlay}
                onClick={this.increaseHandler.bind(this)}
              >
                +
              </ActionButton>
              <Amount>{amount}</Amount>
              <ActionButton
                overlay={this.props.overlay}
                onClick={this.decreaseHandler.bind(this)}
              >
                -
              </ActionButton>
            </Actions>

            <ImageContainer>
              <Image
                alt="product gallery"
                src={gallery[this.state.imageIndexCount]}
              />
              {!this.props.overlay && (
                <ArrowsContainer>
                  <Arrow
                    src={leftArrow}
                    onClick={this.prevImageHandler.bind(this)}
                  />
                  <Arrow
                    src={rightArrow}
                    onClick={this.nextImageHandler.bind(this, gallery)}
                  />
                </ArrowsContainer>
              )}
            </ImageContainer>
          </ElementGallery>
        </Element>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curCurrency: state.cart.priceCurrency,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: () => dispatch(addToCart({ ...ownProps.product, amount: 1 })),
    decrease: () => dispatch(removeFromCart(ownProps.product.uid)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartElement);
