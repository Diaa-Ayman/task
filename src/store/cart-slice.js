import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  priceCurrency: '$',
  totalAmount: 0,
};
const CartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    // Add Item To Cart if it's already in the cart or not
    addToCart(state, action) {
      const newItem = action.payload;
      state.totalQuantity = state.totalQuantity + 1;
      const exisitingItem = state.items.find((item) => item.uid === newItem.uid);
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          uid: newItem.uid,
          name: newItem.name,
          prices: newItem.prices,
          amount: newItem.amount,
          attributes: newItem.attributes,
          gallery: newItem.gallery,
          brand: newItem.brand,
        });
      }
     
      else{ 
        exisitingItem.amount++;
      }

      state.totalAmount = 0;
      state.items.forEach(item => {
        const currentPrice = item.prices.find(price => price.currency.symbol === state.priceCurrency)
        state.totalAmount = state.totalAmount + currentPrice.amount * item.amount
      })
    },

    //  remove From Cart
    removeFromCart(state, action) {
      state.totalQuantity--;
      const uid = action.payload;
      const exisitingItem = state.items.find((item) => item.uid === uid);
      if (exisitingItem.amount === 1) {
        state.items = state.items.filter((item) => item.uid !== uid);
      } else {
        exisitingItem.amount--;
      }
        const currentPrice = exisitingItem.prices.find(price => price.currency.symbol === state.priceCurrency)
        state.totalAmount = state.totalAmount - currentPrice.amount 
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
