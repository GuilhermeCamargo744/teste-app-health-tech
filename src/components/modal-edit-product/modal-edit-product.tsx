import { useTheme } from "styled-components";
import {
  Body,
  Container,
  ContentBottom,
  Description,
  Header,
  ModalProduct,
  TitleHeader,
} from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { IModalEditProduct } from "./interface-modal-edit-product";
import { ButtonDefault } from "../button-default/button-default";
import { TouchableOpacity } from "react-native";

export const ModalEditProduct = ({
  visible,
  titleHeader,
  isDelete,
  onPressCancel,
  onPressConfirm,
}: IModalEditProduct) => {
  const theme = useTheme();
  return (
    <ModalProduct visible={visible} onDismiss={onPressCancel}>
      <Container>
        <Header>
          <TitleHeader>{titleHeader}</TitleHeader>
          <TouchableOpacity onPress={() => onPressCancel()}>
            <AntDesign name="close" size={24} color={theme.colors.gray} />
          </TouchableOpacity>
        </Header>
        <Body>
          <Description>
            {isDelete
              ? "Você tem certeza que deseja excluir esse produto? Essa ação não poderá ser desfeita."
              : ""}
          </Description>
        </Body>
        <ContentBottom>
          <ButtonDefault
            onPress={() => onPressCancel()}
            title="Cancelar"
            styleContent={{
              width: "auto",
              marginRight: 8,
              paddingHorizontal: 16,
              backgroundColor: theme.colors.white,
              borderWidth: 1,
              borderColor: theme.colors.gray,
            }}
            styleTitle={{
              color: theme.colors.gray_500,
            }}
          />
          <ButtonDefault
            onPress={() => onPressConfirm()}
            title={isDelete ? "Excluir" : "Editar"}
            styleContent={{
              width: "auto",
              paddingHorizontal: 16,
              backgroundColor: isDelete
                ? theme.colors.red
                : theme.colors.primary,
            }}
          />
        </ContentBottom>
      </Container>
    </ModalProduct>
  );
};
