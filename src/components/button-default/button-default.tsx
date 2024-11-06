import { ActivityIndicator } from "react-native";
import { IButtonDefault } from "./interface";
import { ContentButton, ContentIcon, TitleButton } from "./styles";
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
    <ContentButton style={styleContent} onPress={onPress} disabled={loading}>
      {loading ? (
        <ActivityIndicator size={16} color={them.colors.white} />
      ) : (
        <ContentIcon>
          <TitleButton style={styleTitle}>{title}</TitleButton>
          {Icon && <Icon />}
        </ContentIcon>
      )}
    </ContentButton>
  );
};
