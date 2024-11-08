import styled from "styled-components/native";

export const ContentButton = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  border-radius: 4px;
`;

export const TitleButton = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;

export const ContentIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
