import { money } from "@/src/utils/money";
import { IData } from "./interface-list-products";
import {
  ContentAmount,
  DiscountText,
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
import { calculatePercent } from "@/src/utils/calculate-percent";

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
        <ContentAmount>
          {item?.discountPercentage && (
            <DiscountText numberOfLines={1}>
              {money(calculatePercent(item?.price, item?.discountPercentage))}
            </DiscountText>
          )}
          <ItemPrice haveDiscount={!item?.discountPercentage} numberOfLines={1}>
            {money(item?.price.toFixed(2))}
          </ItemPrice>
        </ContentAmount>
      </ItemDetails>
    </ItemContainer>
  );
};
