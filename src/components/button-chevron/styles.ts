import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 14px;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_200};
  margin-top: 16px;
  border-radius: 8px;
`;

export const ContentLeft = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.gray_400};
  margin-left: 8px;
`;

export const ContentRight = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
