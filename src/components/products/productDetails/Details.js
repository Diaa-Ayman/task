import React, { Component } from "react";
import { StyledSpan, Button } from "../../styles/Global";
import AttributeElement from "../../AttributeElement";
import { connect } from "react-redux";
import { addToCart } from "../../../store/cart-slice";
import { withRouter } from "react-router";
import parse from "html-react-parser";

import {
  DetailsColumn,
  AttributesContainer,
  LineDiv,
  Description,
  PriceContainer,
} from "../../styles/productDetails.style";

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      completedOrder: true,
    };
  }

  // Add Item To the Cart and sending attributes as parameter
  addToCartHandler() {
    this.props.addToCart();
  }

  // get cart specific attributes...
  getCartItemAttributes(attributeItem) {
    this.setState({ couter: this.state.counter + 1 });
  }

  render() {
    const { inStock, name, brand, attributes, prices, description } =
      this.props?.product || {};

    const PRICE = prices?.find(
      (price) => price.currency.symbol === this.props.curCurrency
    );

    // console.log(this.props.curCurrency);
    return (
      // This is a right column for Details Page....
      <DetailsColumn>
        <StyledSpan fontWeight="900" fontSize="1.6rem" margin="0 0 10px 0">
          {brand}
          {/* Title of Product */}
        </StyledSpan>
        <StyledSpan fontWeight="500" fontSize="1.6rem" margin="0 0 10px 0">
          {name}
          {/* Title of Product */}
        </StyledSpan>
        <LineDiv />
        {/* All Attributes Of The Product Item */}
        {attributes?.map((attribute) => (
          <AttributesContainer key={attribute.id}>
            <AttributeElement
              highlight
              hoverBg="#0f0f0f"
              hoverColor="#fff"
              getAttributes={this.getCartItemAttributes.bind(this)}
              attribute={attribute}
              id={attribute.id}
            />
          </AttributesContainer>
        ))}

        {/* PRICE */}
        <PriceContainer>
          <StyledSpan fontWeight="900" fontSize="1rem" margin="8px 0">
            PRICE:
          </StyledSpan>
          <StyledSpan fontFamily="arial" fontWeight="700" fontSize="1.2rem">
            {PRICE?.amount} {PRICE?.currency.symbol}
          </StyledSpan>
        </PriceContainer>
        <Button
          onClick={inStock ? this.addToCartHandler.bind(this) : undefined}
          padding="14px 0"
          margin="2rem 0"
          color="#fff"
          width="290px"
          backgroundColor="#5ECE7B"
        >
          ADD TO CART
        </Button>
        {!this.state.completedOrder && (
          <StyledSpan color="red" margin="1rem 0">
            Please Select All Attirubtes!
          </StyledSpan>
        )}
        <Description>
          {parse(description ? description : "<span>loading...</span>")}
        </Description>
      </DetailsColumn>
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
    addToCart: () => {
      const product = ownProps?.product;
      let UID = "";

      product.attributes.forEach((attribute) => {
        let selectedItemOfEach = attribute.items.find((item) => item.selected);
        if (!selectedItemOfEach) {
          attribute.items[0].selected = true;
          selectedItemOfEach = attribute.items.find((item) => item.selected);
        }
        UID += selectedItemOfEach.id.toString();
      });
      UID = UID + "_" + product.name.replace(/ +/g, "");
      dispatch(
        addToCart({
          uid: UID,
          name: product.name,
          id: product.id,
          prices: product.prices,
          amount: 1,
          gallery: product.gallery,
          attributes: product.attributes,
          brand: product.brand,
        })
      );
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
