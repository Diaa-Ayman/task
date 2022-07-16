import { createSlice } from '@reduxjs/toolkit';

const OverlaysSlice = createSlice({
    name: 'ui',
    initialState: {
        cartOverlayVisible: false,
        currenciesOverlayVisible: false,
    },
    reducers: {

        // For Cart Overlay...
        showCartOverlay(state) {
            state.cartOverlayVisible = true;
          },
          hideCartOverlay(state) {
            state.cartOverlayVisible = false;
          },

          // For currencies Overlay...
          showCurrenciesOverlay(state) {
            state.currenciesOverlayVisible = true;
          },
          hideCurrenciesOverlay(state) {
            state.currenciesOverlayVisible = false;
          },
    }
})


export const {showCartOverlay, hideCartOverlay, showCurrenciesOverlay, hideCurrenciesOverlay} = OverlaysSlice.actions
export default OverlaysSlice