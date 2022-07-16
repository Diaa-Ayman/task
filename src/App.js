import { Component } from 'react';
import Layout from './components/layout/Layout';
import CategoryPage from './pages/CategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './components/styles/Global';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/all' />
            </Route>
            <Route path='/my-cart'>
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
      </Provider>
    );
  }
}

