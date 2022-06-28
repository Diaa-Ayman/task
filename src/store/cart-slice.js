import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0, // Need Some Fix to find the Current Price
  cartOverlayVisible: false,
};
const CartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.totalQuantity = state.totalQuantity + 1;

      const currentPrice = newItem.prices.find(
        (price) => price.currency.label === 'USD'
      );

      // state.totalAmount = state.totalAmount + newItem.amount * currentPrice;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          prices: newItem.prices,
          amount: newItem.amount,
          attributes: newItem.attributes,
          //   desc: newItem.desc,
          //   countInStock: newItem.countInStock,
          gallery: newItem.gallery,
          currentCurrency: newItem.currentCurrency,
        });
      } else {
        exisitingItem.amount++;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice + exisitingItem.price;
      }
    },
    removeFromCart(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      // state.totalAmount = state.totalAmount - exisitingItem.price;

      if (exisitingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.amount--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
    },
    // clearCart(state) {
    //   state = initialCartState;
    // },
    // removeCartItem(state, action) {
    //   const id = action.payload;
    //   state.items = state.items.filter((item) => item.id !== id);
    // },
    showCartOverlay(state) {
      state.cartOverlayVisible = true;
    },
    hideCartOverlay(state) {
      state.cartOverlayVisible = false;
    },
  },
});

export const { addToCart, removeFromCart, hideCartOverlay, showCartOverlay } =
  CartSlice.actions;
export default CartSlice;
