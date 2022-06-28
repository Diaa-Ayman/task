import { Component } from 'react';
import fetchData from '../../api/fetchFun';
import { gql } from '@apollo/client';
import { connect } from 'react-redux';
import { changeCurrency } from '../../store/price-slice';
import { Select, Option } from '../styles/currencies.style';
// import { Button } from './Global';
const GET_CURRENCY = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

class AvailableCurrencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      currentCurrency: '',
    };
  }

  getCurrencyHandler(event) {
    this.props.changeCurrency(event.target.value);
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
      <Select onChange={this.getCurrencyHandler.bind(this)}>
        {this.state.currencies.map((currency) => (
          <Option
            value={currency.label}
            key={currency.symbol}
            // onClick={this.clickCurrency.bind(this)}
          >
            {' '}
            {currency.symbol + ' '}
            {currency.label}
          </Option>
        ))}
      </Select>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrency: (currency) => dispatch(changeCurrency(currency)),
  };
};

export default connect(null, mapDispatchToProps)(AvailableCurrencies);
