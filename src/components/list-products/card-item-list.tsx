import { money } from "@/src/utils/money";
import { IData } from "./interface-list-products";
import {
  ImageItem,
  ItemContainer,
  ItemDescription,
  ItemDetails,
  ItemPrice,
  ItemTitle,
} from "./styles";
import { useAppDispatch } from "@/src/hooks/use-redux";
import { setCurrentProduct } from "@/src/utils/store/slices/current-product-data/current-product-data";
import { router } from "expo-router";

interface ICardItemList {
  item: IData;
}

export const CardItemList = ({ item }: ICardItemList) => {
  const dispatch = useAppDispatch();

  const handleClickCard = () => {
    dispatch(setCurrentProduct(item));
    router.navigate("/(details)/product-detail");
  };

  return (
    <ItemContainer onPress={handleClickCard}>
      <ImageItem source={{ uri: item?.thumbnail }} resizeMode="contain" />
      <ItemDetails>
        <>
          <ItemTitle>{item?.title}</ItemTitle>
          <ItemDescription>{item?.description}</ItemDescription>
        </>
        <ItemPrice>{money(item?.price.toFixed(2))}</ItemPrice>
      </ItemDetails>
    </ItemContainer>
  );
};
