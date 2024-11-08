import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${Dimensions.get("window").width * 0.9}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_100};
  align-items: center;
  justify-content: center;
  padding: 24px;
  padding-bottom: 32px;
`;

export const TitleModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  text-align: left;
  margin-bottom: 24px;
`;
