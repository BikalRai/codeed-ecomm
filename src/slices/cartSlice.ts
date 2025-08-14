import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../utilities/cartTypes";

type CartState = {
  items: Product[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    addToCart(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    deleteFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeAllfromCart(state) {
      state.items = [];
    },
  },
});

export const { setCart, addToCart, deleteFromCart, removeAllfromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
