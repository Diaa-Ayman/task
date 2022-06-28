import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './cart-slice';
import PriceSlice from './price-slice';
const store = configureStore({
  reducer: { cart: CartSlice.reducer, price: PriceSlice.reducer },
});
export default store;
