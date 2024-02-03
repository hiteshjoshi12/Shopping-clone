import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {

    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        // If item already exists, increase quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },

    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const selectedItem = state.items.find(item => item.id === itemId);
      if (selectedItem) {
        selectedItem.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const selectedItem = state.items.find(item => item.id === itemId);
      if (selectedItem && selectedItem.quantity > 1) {
        selectedItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;


export const selectCartItems = (state) => state.cart.items;


const persistConfig = {
  key: 'cart',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);

export default persistedReducer;
