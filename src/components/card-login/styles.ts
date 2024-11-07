import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const CardContainer = styled.View`
  padding: 50px 24px 50px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_100};
  width: 100%;
  border-radius: 8px;
`;

export const TitleError = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;
