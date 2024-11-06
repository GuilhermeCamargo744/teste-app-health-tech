import { createSlice } from "@reduxjs/toolkit";
import { IProductsData } from "../products-data/interface-products-data";

export interface IProductsState {
  currentProduct: IProductsData;
}

const initialState: IProductsState = {
  currentProduct: {},
};

export const currentProduct = createSlice({
  name: "currentProdut",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { setCurrentProduct } = currentProduct.actions;

export default currentProduct.reducer;
