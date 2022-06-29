import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  priceCurrency: '$',
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

      // const currentPrice = newItem.prices.find(
      //   (price) => price.currency.symbol === state.priceCurrency
      // );

      // state.totalAmount =
      //   state.totalAmount + newItem.amount * currentPrice.amount;
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
          currentPrice: newItem.currentPrice,
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

      // const currenctPrice = exisitingItem.prices.find(
      //   (price) => price.currency.symbol === state.priceCurrency
      // );

      // state.totalAmount = state.totalAmount - currenctPrice.amount;
      if (exisitingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.amount--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
    },

    showCartOverlay(state) {
      state.cartOverlayVisible = true;
    },
    hideCartOverlay(state) {
      state.cartOverlayVisible = false;
    },

    changeCurrency(state, action) {
      state.priceCurrency = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  hideCartOverlay,
  showCartOverlay,
  changeCurrency,
} = CartSlice.actions;
export default CartSlice;
