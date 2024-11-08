import { IDataFormEditCreateProduct } from "@/src/components/form-edit-create-product/interface-form-edit-create-product";
import { useAppSelector } from "@/src/hooks/use-redux";
import { addProductsModel } from "@/src/models/product/add-product-model";
import { editProductModel } from "@/src/models/product/edit-product-model";
import { getGenderFromCategory } from "@/src/utils/get-gender-from-category";
import {
  setAddProduct,
  setDeleteAndUpdateProduct,
} from "@/src/store/slices/products-data/products-data";
import { router, useGlobalSearchParams } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useTheme } from "styled-components/native";

export const useEditCreateProduct = () => {
  const [openModal, setOpenModal] = useState(false);
  const detailsProduct = useAppSelector(
    (state) => state.currentProduct.currentProduct
  );
  const params = useGlobalSearchParams();
  const gender = detailsProduct.category
    ? getGenderFromCategory(detailsProduct.category)
    : Number(params.currentTab) === 0
    ? "men"
    : "women";
  const isAdd = Number(params?.isAdd) == 1;
  const dispatch = useDispatch();
  const defaultValues: IDataFormEditCreateProduct | {} = isAdd
    ? {}
    : {
        title: detailsProduct?.title,
        description: detailsProduct?.description,
        discountPercentage: String(detailsProduct?.discountPercentage) ?? "",
        price: String(detailsProduct?.price),
        thumbnail: detailsProduct?.thumbnail,
      };

  const theme = useTheme();
  const { control, handleSubmit } = useForm<IDataFormEditCreateProduct>({
    defaultValues,
  });

  const onSubmit = async (data: IDataFormEditCreateProduct) => {
    const payload = {
      description: data.description,
      discountPercentage: Number(data.discountPercentage),
      price: Number(data.price),
      thumbnail: data.thumbnail,
      title: data.title,
    };
    if (isAdd) {
      addProductsModel(payload).then((resp) => {
        if (resp) {
          dispatch(
            setAddProduct({
              product: resp,
              gender,
            })
          );
          router.replace({
            pathname: "/",
            params: { canRequest: 0 },
          });
        }
      });
      return;
    }
    editProductModel(detailsProduct.id, payload)
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
        if (err.status == 404) {
          dispatch(
            setDeleteAndUpdateProduct({
              updatedProduct: { ...payload, id: detailsProduct?.id },
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
    control,
    handleSubmit,
    onSubmit,
    theme,
    isAdd,
    setOpenModal,
    openModal,
  };
};
