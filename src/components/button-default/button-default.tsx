import { IButtonDefault } from "./interface";
import { ContentButton, TitleButton } from "./styles";

export const ButtonDefault = ({
  styleContent,
  title,
  onPress,
}: IButtonDefault) => {
  return (
    <ContentButton style={styleContent} onPress={onPress}>
      <TitleButton>{title}</TitleButton>
    </ContentButton>
  );
};
