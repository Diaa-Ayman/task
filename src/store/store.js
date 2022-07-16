import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './cart-slice';
import OverlaysSlice from './overlays-slice';
const store = configureStore({
  reducer: { cart: CartSlice.reducer, overlays: OverlaysSlice.reducer },
});
export default store;
