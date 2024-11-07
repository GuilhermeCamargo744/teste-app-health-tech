import { useTheme } from "styled-components";
import { IButtonChevron } from "./interface-button-chevron";
import * as S from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ButtonChevron = ({ onPress, title, Icon }: IButtonChevron) => {
  const theme = useTheme();
  return (
    <S.Button onPress={onPress}>
      <S.ContentLeft>
        {Icon && <Icon />}
        <S.TitleButton>{title}</S.TitleButton>
      </S.ContentLeft>
      <S.ContentRight>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={theme.colors.gray_400}
        />
      </S.ContentRight>
    </S.Button>
  );
};
