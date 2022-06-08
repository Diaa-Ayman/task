import { Component } from 'react';
// import { Query } from '@apollo/client/react/components';
import Layout from './components/layout/Layout';
// import styled from 'styled-components';
import CategoryPage from './pages/CategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { store } from './store/store';
// import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/all' />
          </Route>
          <Route path='/cart'>
            <CartPage />
          </Route>
          <Route path='/:categoryName' exact>
            <CategoryPage />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetailsPage />
          </Route>
        </Switch>
      </Layout>
      // </Provider>
    );
  }
}

// const Container = styled.div`
//   margin-top: 4rem;
// `;
