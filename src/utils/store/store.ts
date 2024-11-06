import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products-data/products-data";
import currentProductReducer from "./slices/current-product-data/current-product-data";

export const store = configureStore({
  reducer: {
    productsData: productsReducer,
    currentProduct: currentProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
