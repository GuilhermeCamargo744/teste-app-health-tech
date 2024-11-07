import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { IProductDetails } from "../interface-product-details";
import {
  AmountText,
  Container,
  ContainerImage,
  ContentAmount,
  ContentButtons,
  ContentDescription,
  ContentDots,
  Description,
  DiscountText,
  DotsListCards,
  ImageProduct,
  ScrollContainer,
  TitleItem,
} from "./styles";
import { calculatePercent } from "@/src/utils/calculate-percent";
import { money } from "@/src/utils/money";
import { ButtonDefault } from "@/src/components/button-default/button-default";
import Feather from "@expo/vector-icons/Feather";
import { ModalEditCreateProduct } from "@/src/components/modal-edit-product/modal-edit-product";
import { router } from "expo-router";

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
    <Container>
      <ScrollContainer>
        {detailsProduct?.images ? (
          <FlatList
            data={detailsProduct?.images}
            renderItem={({ item }) => (
              <ContainerImage>
                <ImageProduct source={{ uri: item }} resizeMode="contain" />
              </ContainerImage>
            )}
            keyExtractor={(item, index) => String(index)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          />
        ) : (
          <ContainerImage>
            <ImageProduct
              source={{ uri: detailsProduct?.thumbnail }}
              resizeMode="contain"
            />
          </ContainerImage>
        )}

        {detailsProduct?.images && (
          <ContentDots>
            {detailsProduct?.images.map((item, index) => {
              return (
                <DotsListCards key={index} isCurrent={index == currentIndex} />
              );
            })}
          </ContentDots>
        )}
        <ContentDescription>
          <TitleItem>{detailsProduct.title}</TitleItem>
          <ContentAmount>
            {detailsProduct?.discountPercentage && (
              <DiscountText>
                {money(
                  calculatePercent(
                    detailsProduct?.price,
                    detailsProduct?.discountPercentage
                  )
                )}
              </DiscountText>
            )}
            <AmountText haveDiscount={!detailsProduct?.discountPercentage}>
              {money(detailsProduct?.price)}
            </AmountText>
          </ContentAmount>
          <Description>{detailsProduct?.description}</Description>
        </ContentDescription>
      </ScrollContainer>
      <ContentButtons>
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
      </ContentButtons>
      <ModalEditCreateProduct
        visible={openModal}
        titleHeader="Excluir produto"
        isDelete={true}
        onPressCancel={() => setOpenModal(false)}
        onPressConfirm={() => handleDeleteItem(detailsProduct?.id)}
      />
    </Container>
  );
};
