import { Dimensions } from "react-native";
import { Modal } from "react-native-paper";
import styled from "styled-components/native";

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
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xxxl}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black_600};
  margin-top: 24px;
`;
