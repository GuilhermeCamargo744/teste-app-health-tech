import { useTheme } from "styled-components";

import * as S from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { IModalEditCreateProduct } from "./interface-modal-edit-create-product";
import { ButtonDefault } from "../button-default/button-default";
import { TouchableOpacity } from "react-native";

export const ModalEditCreateProduct = ({
  visible,
  titleHeader,
  isDelete,
  onPressCancel,
  onPressConfirm,
}: IModalEditCreateProduct) => {
  const theme = useTheme();
  return (
    <S.ModalProduct visible={visible} onDismiss={onPressCancel}>
      <S.Container>
        <S.Header>
          <S.TitleHeader>{titleHeader}</S.TitleHeader>
          <TouchableOpacity onPress={() => onPressCancel()}>
            <AntDesign name="close" size={24} color={theme.colors.gray_100} />
          </TouchableOpacity>
        </S.Header>
        <S.Body>
          <S.Description>
            {isDelete
              ? "Você tem certeza que deseja excluir esse produto? Essa ação não poderá ser desfeita."
              : "Você tem certeza que deseja editar esse produto? Essa ação não poderá ser desfeita."}
          </S.Description>
        </S.Body>
        <S.ContentBottom>
          <ButtonDefault
            onPress={() => onPressCancel()}
            title="Cancelar"
            styleContent={{
              width: "auto",
              marginRight: 8,
              paddingHorizontal: 16,
              backgroundColor: theme.colors.white,
              borderWidth: 1,
              borderColor: theme.colors.gray_200,
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
        </S.ContentBottom>
      </S.Container>
    </S.ModalProduct>
  );
};
