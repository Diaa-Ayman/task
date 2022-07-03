import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  priceCurrency: '$',
  totalAmount: 0,
  cartOverlayVisible: false,
};
const CartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    // Add Item To Cart if it's already in the cart or not
    addToCart(state, action) {
      const newItem = action.payload;
      state.totalQuantity = state.totalQuantity + 1;

      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          prices: newItem.prices,
          amount: newItem.amount,
          attributes: newItem.attributes,
          gallery: newItem.gallery,
        });
      } else {
        exisitingItem.amount++;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice + exisitingItem.price;
      }
    },

    //  remove From Cart
    removeFromCart(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      if (exisitingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.amount--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
    },

    getTotalAmount(state, action) {
      state.totalAmount = action.payload;
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
  getTotalAmount,
} = CartSlice.actions;
export default CartSlice;
