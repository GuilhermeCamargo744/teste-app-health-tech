import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks/use-redux";
import { Dimensions } from "react-native";
import { useTheme } from "styled-components";
import { deleteProducts } from "@/src/models/product/delete-products";
import { router } from "expo-router";
import { setDeletedProduct } from "@/src/utils/store/slices/products-data/products-data";

export const useProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const detailsProduct = useAppSelector(
    (state) => state.currentProduct.currentProduct
  );
  const dispatch = useAppDispatch();
  const { width } = Dimensions.get("window");
  const theme = useTheme();

  const handleDeleteItem = async (id: number) => {
    await deleteProducts(id).then((resp) => {
      dispatch(setDeletedProduct(resp));
      if (resp) {
        router.replace({
          pathname: "/",
          params: { canRequest: 0 },
        });
      }
    });
  };

  return {
    detailsProduct,
    setCurrentIndex,
    currentIndex,
    theme,
    width,
    setOpenModal,
    openModal,
    handleDeleteItem,
  };
};
