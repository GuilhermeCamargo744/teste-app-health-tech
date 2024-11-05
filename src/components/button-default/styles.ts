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
  font-size: ${({ theme }) => theme.size.md}px;
  font-family: ${({ theme }) => theme.fonts[600]};
  color: ${({ theme }) => theme.colors.white};
`;
