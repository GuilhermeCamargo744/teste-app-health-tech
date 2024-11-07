import { ActivityIndicator } from "react-native";
import { IButtonDefault } from "./interface";
import * as S from "./styles";
import { useTheme } from "styled-components";

export const ButtonDefault = ({
  styleContent,
  title,
  onPress,
  loading,
  Icon,
  styleTitle,
}: IButtonDefault) => {
  const them = useTheme();
  return (
    <S.ContentButton style={styleContent} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator size={16} color={them.colors.white} />
      ) : (
        <S.ContentIcon>
          <S.TitleButton style={styleTitle}>{title}</S.TitleButton>
          {Icon && <Icon />}
        </S.ContentIcon>
      )}
    </S.ContentButton>
  );
};
