
import { gql } from '@apollo/client';


// Queries for CategoryPage Data...
export  const getCategoryProducts = (categoryTitle) => {
const PRODUCTS = gql`
query {
  category(input: {title: "${categoryTitle}"}) {
    name
    products {
      id
      name
      brand
      inStock
      gallery
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
    return PRODUCTS
}

export const GET_CURRENCY = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

// Queries For Product Details Page....

export const getProduct =  (id) => {

  const GET_PRODUCT = gql`
  query {
      product(id: "${id}") {
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
`;

  return GET_PRODUCT
}