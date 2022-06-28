import { createSlice } from '@reduxjs/toolkit';

const PriceSlice = createSlice({
  name: 'price',
  initialState: {
    priceCurrency: 'USD',
    currentPrice: {},
  },
  reducers: {
    changeCurrency(state, action) {
      state.priceCurrency = action.payload;
    },
    getCurrentPrice(state, action) {
      state.currentPrice = action.payload;
    },
  },
});

export const { changeCurrency } = PriceSlice.actions;
export default PriceSlice;
