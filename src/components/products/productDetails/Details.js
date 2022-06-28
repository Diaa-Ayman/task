import React, { Component } from 'react';
import { StyledSpan, Button } from '../../styles/Global';
import AttributeElement from '../../AttributeElement';
import { connect } from 'react-redux';
import { addToCart } from '../../../store/cart-slice';
import { withRouter } from 'react-router';
import {
  DetailsColumn,
  AttributesContainer,
  LineDiv,
  ProductTitle,
  Description,
  PriceContainer,
} from '../../styles/productDetails.style';

// A FUNCTION TO CONVERT DESCRIPTION        HAS ISSUE
let ConvertStringToHTML = function (str) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, 'text/html');
  return doc.body.firstChild;
};

export class Details extends Component {
  constructor() {
    super();
    this.state = {
      attributes: [],
    };
  }
  addToCartHandler() {
    this.props.addToCart(this.state.attributes);
    this.props.history.push('/my-cart');
  }

  // AN ISSUE
  getCartItemAttributes(attr) {
    const exisitingAttribute = this.state.attributes.find(
      (attribute) => attribute.id === attr.id
    );
    if (!exisitingAttribute) {
      this.setState({
        attributes: [...this.state.attributes, attr],
      });
    }
  }

  componentDidMount() {
    const desc = ConvertStringToHTML(
      this.props.product?.description || <span></span>
    );
    document.getElementById('desc')?.appendChild(desc);
  }
  render() {
    const { name, description, inStock, brand, attributes, prices } =
      this.props?.product || {};

    const PRICE = prices?.find(
      (price) => price.currency.label === this.props.curCurrency
    );

    // console.log(this.props.curCurrency);
    return (
      // This is a right column for Details Page....
      <DetailsColumn>
        <StyledSpan fontWeight='900' fontSize='1.6rem' margin='0 0 10px 0'>
          {name}

          {/* Title of Product */}
        </StyledSpan>

        {/* ON REMOVE */}
        <ProductTitle>
          {/* Brand */}
          <StyledSpan fontWeight='600' fontSize='1rem' color='#ccc'>
            {brand}
          </StyledSpan>
          {/* ON_Stock or NOT */}
          <StyledSpan fontWeight='600' fontSize='1rem'>
            {inStock ? 'In_Stock' : 'Out_Of_Stock'}
          </StyledSpan>
        </ProductTitle>
        {/* Line Div To remove */}
        <LineDiv />

        {/* All Attributes Of The Product Item */}
        {attributes?.map((attribute) => (
          <AttributesContainer key={attribute.id}>
            <AttributeElement
              getAttributes={this.getCartItemAttributes.bind(this)}
              attribute={attribute}
              id={attribute.id}
            />
          </AttributesContainer>
        ))}

        {/* PRICE */}
        <PriceContainer>
          <StyledSpan fontWeight='900' fontSize='1rem' margin='8px 0'>
            PRICE:
          </StyledSpan>
          <StyledSpan fontFamily='arial' fontWeight='700' fontSize='1.2rem'>
            {PRICE?.amount} {PRICE?.currency.symbol}
          </StyledSpan>
        </PriceContainer>
        <Button
          onClick={this.addToCartHandler.bind(this)}
          padding='15px 0'
          margin='2rem 0'
          color='#fff'
          width='100%'
          backgroundColor='#5ECE7B'
        >
          ADD TO CART
        </Button>
        {/* <StyledSpan
          id='desc'
          fontSize='17px'
          fontWeight='500'
          width='100%'
        ></StyledSpan> */}
        {/* <div id='desc'></div> */}
        <Description id='desc'></Description>
      </DetailsColumn>
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
    addToCart: (attributes) => {
      const product = ownProps?.product;
      const currentCurrency = ownProps?.curCurrency;
      dispatch(
        addToCart({
          name: product.name,
          id: product.id,
          prices: product.prices,
          amount: 1,
          gallery: product.gallery,
          attributes: attributes || [],
          currentCurrency: currentCurrency,
        })
      );
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
