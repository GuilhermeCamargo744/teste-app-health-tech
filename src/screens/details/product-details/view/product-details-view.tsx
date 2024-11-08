import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { IProductDetails } from "../interface-product-details";

import * as S from "./styles";
import { calculatePercent } from "@/src/utils/calculate-percent";
import { money } from "@/src/utils/money";
import { ButtonDefault } from "@/src/components/buttons/button-default/button-default";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { CustomModal } from "@/src/components/modals/custom-modal/custom-modal";

export const ProdutcDetailsView = ({
  detailsProduct,
  currentIndex,
  setCurrentIndex,
  theme,
  width,
  openModal,
  setOpenModal,
  handleDeleteItem,
}: IProductDetails) => {
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  return (
    <S.Container>
      <S.ScrollContainer>
        {detailsProduct?.images ? (
          <FlatList
            data={detailsProduct?.images}
            renderItem={({ item }) => (
              <S.ContainerImage>
                <S.ImageProduct source={{ uri: item }} resizeMode="contain" />
              </S.ContainerImage>
            )}
            keyExtractor={(item, index) => String(index)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          />
        ) : (
          <S.ContainerImage>
            <S.ImageProduct
              source={{ uri: detailsProduct?.thumbnail }}
              resizeMode="contain"
            />
          </S.ContainerImage>
        )}

        {detailsProduct?.images && (
          <S.ContentDots>
            {detailsProduct?.images.map((item, index) => {
              return (
                <S.DotsListCards
                  key={index}
                  isCurrent={index == currentIndex}
                />
              );
            })}
          </S.ContentDots>
        )}
        <S.ContentDescription>
          <S.TitleItem>{detailsProduct.title}</S.TitleItem>
          <S.ContentAmount>
            {detailsProduct?.discountPercentage && (
              <S.DiscountText>
                {money(
                  calculatePercent(
                    detailsProduct?.price,
                    detailsProduct?.discountPercentage
                  )
                )}
              </S.DiscountText>
            )}
            <S.AmountText haveDiscount={!detailsProduct?.discountPercentage}>
              {money(detailsProduct?.price)}
            </S.AmountText>
          </S.ContentAmount>
          <S.Description>{detailsProduct?.description}</S.Description>
        </S.ContentDescription>
      </S.ScrollContainer>
      <S.ContentButtons>
        <ButtonDefault
          onPress={() => router.navigate("/(details)/edit-create-product")}
          title="Editar"
          Icon={() => (
            <Feather
              name="edit"
              size={14}
              color={theme.colors.white}
              style={{ marginLeft: 9 }}
            />
          )}
        />
        <ButtonDefault
          onPress={() => setOpenModal(true)}
          title="Excluir"
          styleContent={{ backgroundColor: theme.colors.red, marginTop: 8 }}
          Icon={() => (
            <Feather
              name="trash"
              size={14}
              color={theme.colors.white}
              style={{ marginLeft: 9 }}
            />
          )}
        />
      </S.ContentButtons>
      <CustomModal
        visible={openModal}
        titleHeader="Excluir produto"
        onPressCancel={() => setOpenModal(false)}
        onPressConfirm={() => handleDeleteItem(detailsProduct?.id)}
        description="Você tem certeza que deseja excluir esse produto? Essa ação não poderá ser desfeita."
        titleButton="Excluir"
        styleButton={{
          backgroundColor: theme.colors.red,
        }}
      />
    </S.Container>
  );
};
