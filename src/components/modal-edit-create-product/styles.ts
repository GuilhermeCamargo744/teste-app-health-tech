import { Dimensions } from "react-native";
import { Modal } from "react-native-paper";
import styled from "styled-components/native";
import { ButtonDefault } from "../button-default/button-default";

export const ModalProduct = styled(Modal)`
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  width: ${Dimensions.get("window").width * 0.9}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_200};
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
`;

export const TitleHeader = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.black_600};
`;

export const Body = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_500};
  text-align: left;
`;

export const ContentBottom = styled.View`
  padding-top: 12px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
