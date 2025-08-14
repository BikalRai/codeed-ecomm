import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../utilities/cartTypes';

type CartState = {
  items: Product[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
