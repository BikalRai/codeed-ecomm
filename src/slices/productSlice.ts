import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../utilities/cartTypes";
import productsData from "../../products.json";

type ProductState = {
  products: Product[];
  initialized: boolean;
};

const initialState: ProductState = {
  products: productsData,
  initialized: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      state.initialized = true;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products.filter((product) => product.id !== action.payload);
    },
  },
});

export const { setAllProducts, addProduct, updateProduct, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
