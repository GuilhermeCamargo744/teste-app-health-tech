import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsData } from "./interface-products-data";

export interface IProductsState {
  manProducts: IProductsData[];
  womanProducts: IProductsData[];
}

const initialState: IProductsState = {
  manProducts: [],
  womanProducts: [],
};

const updateProductList = (
  products: IProductsData[],
  updatedProduct: IProductsData
): IProductsData[] => {
  return products.map((product) =>
    product.id === updatedProduct.id
      ? { ...product, ...updatedProduct }
      : product
  );
};

const addUniqueProducts = (
  currentProducts: IProductsData[],
  newProducts: IProductsData[]
): IProductsData[] => {
  const newUniqueProducts = newProducts.filter(
    (product) =>
      !currentProducts.some(
        (existingProduct) => existingProduct.id === product.id
      )
  );
  return [...currentProducts, ...newUniqueProducts];
};

export const productsDataSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    setManProducts: (state, action: PayloadAction<IProductsData[]>) => {
      state.manProducts = addUniqueProducts(state.manProducts, action.payload);
    },
    setWomanProducts: (state, action: PayloadAction<IProductsData[]>) => {
      state.womanProducts = addUniqueProducts(
        state.womanProducts,
        action.payload
      );
    },
    setDeleteAndUpdateProduct: (
      state,
      action: PayloadAction<{ updatedProduct: IProductsData; gender: string }>
    ) => {
      const { updatedProduct, gender } = action.payload;
      if (gender === "women") {
        state.womanProducts = updateProductList(
          state.womanProducts,
          updatedProduct
        );
      } else if (gender === "men") {
        state.manProducts = updateProductList(
          state.manProducts,
          updatedProduct
        );
      }
    },
    setAddProduct: (
      state,
      action: PayloadAction<{ product: IProductsData; gender: string }>
    ) => {
      const { product, gender } = action.payload;
      const newProduct = { ...product, category: gender };

      if (gender === "women") {
        state.womanProducts.push(newProduct);
      } else if (gender === "men") {
        state.manProducts.push(newProduct);
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
