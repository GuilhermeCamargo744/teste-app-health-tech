import { createSlice } from "@reduxjs/toolkit";
import { IProductsData } from "./interface-products-data";

export interface IProductsState {
  manProducts: [] | null | IProductsData[];
  womanProducts: [] | null | IProductsData[];
}

const initialState: IProductsState = {
  manProducts: [],
  womanProducts: [],
};

export const productsDataSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    setManProducts: (state, action) => {
      const newProducts = action.payload.filter((product: IProductsData) => {
        return (
          state.manProducts &&
          !state.manProducts.some(
            (existingProduct) => existingProduct.id === product.id
          )
        );
      });
      state.manProducts = [...state.manProducts, ...newProducts];
    },
    setWomanProducts: (state, action) => {
      const newProducts = action.payload.filter((product: IProductsData) => {
        return (
          state.womanProducts &&
          !state.womanProducts.some(
            (existingProduct) => existingProduct.id === product.id
          )
        );
      });

      state.womanProducts = [...state.womanProducts, ...newProducts];
    },
    setDeleteAndUpdateProduct: (state, action) => {
      const { updatedProduct, gender } = action.payload;
      if (gender === "women") {
        state.womanProducts = state.womanProducts.map((product) => {
          if (product.id === updatedProduct.id) {
            return { ...product, ...updatedProduct };
          }
          return product;
        });
        return;
      }

      if (gender === "men") {
        state.manProducts = state.manProducts.map((product) => {
          if (product.id === updatedProduct.id) {
            return { ...product, ...updatedProduct };
          }
          return product;
        });
      }
      return;
    },
    setAddProduct: (state, action) => {
      const { product, gender } = action.payload;
      if (gender === "women") {
        state.womanProducts = [
          ...state.womanProducts,
          { ...product, category: gender },
        ];
        return;
      }
      if (gender === "men") {
        state.manProducts = [
          ...state.manProducts,
          { ...product, category: gender },
        ];
        return;
      }
    },
  },
});

export const {
  setManProducts,
  setWomanProducts,
  setDeleteAndUpdateProduct,
  setAddProduct,
} = productsDataSlice.actions;

export default productsDataSlice.reducer;
