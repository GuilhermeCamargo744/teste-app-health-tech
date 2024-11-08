import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks/use-redux";
import { Dimensions } from "react-native";
import { useTheme } from "styled-components";
import { deleteProductsModel } from "@/src/models/product/delete-products-model";
import { router } from "expo-router";
import { setDeleteAndUpdateProduct } from "@/src/store/slices/products-data/products-data";
import { getGenderFromCategory } from "@/src/utils/get-gender-from-category";

export const useProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const detailsProduct = useAppSelector(
    (state) => state.currentProduct.currentProduct
  );
  const gender = getGenderFromCategory(detailsProduct.category);
  const dispatch = useAppDispatch();
  const { width } = Dimensions.get("window");
  const theme = useTheme();

  const handleDeleteItem = async (id: number) => {
    await deleteProductsModel(id)
      .then((resp) => {
        if (resp) {
          dispatch(setDeleteAndUpdateProduct({ updatedProduct: resp, gender }));
          router.replace({
            pathname: "/",
            params: { canRequest: 0 },
          });
        }
      })
      .catch((err) => {
        if (err.status === 404) {
          dispatch(
            setDeleteAndUpdateProduct({
              updatedProduct: { ...detailsProduct, isDeleted: true },
              gender,
            })
          );
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
