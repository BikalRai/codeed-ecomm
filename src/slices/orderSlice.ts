import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../utilities/cartTypes";

type OrderType = {
  items: Product[];
};

const initialState: OrderType = {
  items: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    clearOrder(state) {
      state.items = [];
    },
  },
});

export const { placeOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
