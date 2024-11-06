import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
`;

export const ButtonTab = styled.TouchableOpacity<{ currentIndex?: boolean }>`
  width: 50%;
  backgroundcolor: red;
  padding: 17px 0px 17px 0px;
  padding-top: ${Platform.OS == "android" ? 24 : 17}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  border-bottom-width: ${({ theme, currentIndex }) => (currentIndex ? 2 : 0)}px;
`;

export const TitleTab = styled.Text`
  font-size: ${({ theme }) => theme.size.xs}px;
  font-family: ${({ theme }) => theme.fonts[600]};
  color: ${({ theme }) => theme.colors.black};
`;
