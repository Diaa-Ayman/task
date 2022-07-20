import React, { Component } from "react";
import Product from "./Product";
import fetchData from "../../api/fetchFun";
import { withRouter } from "react-router";
import { ProductsContainer } from "../styles/category.style";
import { connect } from "react-redux";
import { getCategoryProducts } from "../../api/queries";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: false,
      firstRender: true,
    };
  }

  async componentDidMount() {
    if (this.state.firstRender) {
      try {
        const PRODUCTS = getCategoryProducts(
          this.props.match.params.categoryName
        );
        const data = await fetchData(PRODUCTS);
        this.setState({
          products: data.data.category,
          loading: data.loading,
        });
      } catch (error) {
        console.log("ERORR!!");
      }
      this.setState({ firstRender: false });
    }
  }
  async componentDidUpdate(prevProps) {
    if (
      this.props.match.params.categoryName !==
      prevProps.match.params.categoryName
    ) {
      try {
        const PRODUCTS = getCategoryProducts(
          this.props.match.params.categoryName
        );
        const data = await fetchData(PRODUCTS);
        this.setState({
          products: data.data.category,
          loading: data.loading,
        });
      } catch (error) {
        console.log("ERORR!!");
      }
    }
  }

  render() {
    // const products = this.state.products.find(
    //   (product) => product.name === this.props.match.params.categoryName
    // );

    // console.log(this.props.match.params.categoryName)
    // console.log(this.state.products.products)
    // const products = []
    return (
      <ProductsContainer>
        {this.state.products.products?.map((product) => {
          const price = product?.prices.find(
            (price) => price.currency.symbol === this.props.curCurrency
          );

          return (
            <Product
              image={product.gallery[0] || product.gallery[1]}
              name={product.name}
              brand={product.brand}
              price={price}
              prices={product.prices}
              inStock={product.inStock}
              id={product.id}
              key={product.id}
              attributes={product.attributes}
              gallery={product.gallery}
            />
          );
        })}
      </ProductsContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    curCurrency: state.cart.priceCurrency,
  };
};

export default withRouter(connect(mapStateToProps)(Products));
