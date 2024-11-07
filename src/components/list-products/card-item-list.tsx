import { money } from "@/src/utils/money";
import { IData } from "./interface-list-products";
import { useAppDispatch } from "@/src/hooks/use-redux";
import { calculatePercent } from "@/src/utils/calculate-percent";
import { setCurrentProduct } from "@/src/utils/store/slices/current-product-data/current-product-data";
import { router } from "expo-router";
import * as S from "./styles";

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
    <S.ItemContainer onPress={handleClickCard}>
      <S.ImageItem source={{ uri: item?.thumbnail }} resizeMode="contain" />
      <S.ItemDetails>
        <>
          <S.ItemTitle>{item?.title}</S.ItemTitle>
          <S.ItemDescription>{item?.description}</S.ItemDescription>
        </>
        <S.ContentAmount>
          {item?.discountPercentage && (
            <S.DiscountText numberOfLines={1}>
              {money(calculatePercent(item?.price, item?.discountPercentage))}
            </S.DiscountText>
          )}
          <S.ItemPrice
            haveDiscount={!item?.discountPercentage}
            numberOfLines={1}
          >
            {money(item?.price.toFixed(2))}
          </S.ItemPrice>
        </S.ContentAmount>
      </S.ItemDetails>
    </S.ItemContainer>
  );
};
