import { Component } from 'react';
import fetchData from '../../api/fetchFun';
import { connect } from 'react-redux';
import { changeCurrency } from '../../store/cart-slice';
import { CurrenciesContanier, Currency } from '../styles/currencies.style';
import {GET_CURRENCY} from '../../api/queries'
import Modal from '../Modal';
import {hideCurrenciesOverlay} from '../../store/overlays-slice'

 class AvailableCurrencies extends Component {

    constructor() {
    super();
    this.state = {
      currencies: [],
    };
  }

    getCurrencyHandler(currency) {
    this.props.changeCurrency(currency.symbol);
    this.props.hideCurrenciesOverlay();

  }

  hideCurrenciesOverlay() {
    this.props.hideCurrenciesOverlay();
  }
  async componentDidMount() {
    try {
      const currencies = await fetchData(GET_CURRENCY);
      this.setState({
        currencies: currencies.data.currencies,
      });
    } catch (error) {
      console.log('ERORR!!');
    }
  }
  render() {
    return (
      <Modal padding='0rem' top='4rem' left='81%' boxShadow = '1px 0px 5px 2px #eee' onClick={this.hideCurrenciesOverlay.bind(this)}>
      <CurrenciesContanier>
        {this.state.currencies.map((currency) => <Currency key={currency.symbol} onClick={this.getCurrencyHandler.bind(this, currency)}>
          {currency.symbol}{' '}{currency.label}
        </Currency>)}
      </CurrenciesContanier>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: (currency) => dispatch(changeCurrency(currency)),
    hideCurrenciesOverlay: () => dispatch(hideCurrenciesOverlay()),
  };
};

export default connect(null, mapDispatchToProps)(AvailableCurrencies);
