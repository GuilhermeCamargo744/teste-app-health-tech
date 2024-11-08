import { TouchableOpacity } from "react-native";
import { ICustomModal } from "./interface-custom-modal";
import * as S from "./styles";
import { useTheme } from "styled-components";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ButtonDefault } from "../../buttons/button-default/button-default";

export const CustomModal = ({
  visible,
  titleHeader,
  onPressCancel,
  onPressConfirm,
  description,
  titleButton,
  styleButton,
}: ICustomModal) => {
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
          <S.Description>{description}</S.Description>
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
            title={titleButton}
            styleContent={[
              {
                width: "auto",
                paddingHorizontal: 16,
                backgroundColor: theme.colors.primary,
              },
              styleButton,
            ]}
          />
        </S.ContentBottom>
      </S.Container>
    </S.ModalProduct>
  );
};
