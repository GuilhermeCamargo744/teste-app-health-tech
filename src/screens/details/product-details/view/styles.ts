import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ContainerImage = styled.View`
  width: ${Dimensions.get("window").width}px;
`;

export const ImageProduct = styled.Image`
  height: 235px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light_gray};
`;

export const DotsListCards = styled.View<{ isCurrent?: boolean }>`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  background-color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.colors.primary : theme.colors.gray_100};
  margin: 2px;
`;

export const ContentDots = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const ContentDescription = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 14px 14px 0px 20px;
`;

export const TitleItem = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ContentAmount = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
`;

export const AmountText = styled.Text<{ haveDiscount?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme, haveDiscount }) =>
    !haveDiscount ? theme.fontSizes.xl : theme.fontSizes.xxl}px;
  color: ${({ theme }) => theme.colors.background};
  text-decoration-line: ${({ haveDiscount }) =>
    !haveDiscount ? "line-through" : "none"};
`;

export const DiscountText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  color: ${({ theme }) => theme.colors.red};
  margin-right: 8px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.gray_100};
  line-height: 20px;
  margin-top: 8px;
`;

export const ContentButtons = styled.View`
  position: absolute;
  bottom: 35px;
  width: 90%;
  align-items: center;
  justify-content: center;
`;
