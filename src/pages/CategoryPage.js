import React, { Component } from 'react';
import Products from '../components/products/Products';
import styled from 'styled-components';
import { withRouter } from 'react-router';
class CategoryPage extends Component {
  render() {
    const categoryName = this.props.match.params.categoryName.toUpperCase();
    return (
      <CategoryContainer>
        <CategoryHeader>{categoryName}</CategoryHeader>
        <Products categoryName={categoryName} />
      </CategoryContainer>
    );
  }
}

const CategoryHeader = styled.span`
  font-size: 2rem;
  font-weight: 500;
  font-family: 'raleway', sans-serif;
`;

const CategoryContainer = styled.div`
  margin-top: 5rem;
`;
export default withRouter(CategoryPage);
