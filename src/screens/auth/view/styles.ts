import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";

export const ContentKeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ContainerScroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
  },
}))``;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContentTop = styled.View`
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  padding-bottom: 70px;
`;

export const ContentBottom = styled.View`
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: flex-start;
  align-items: center;
`;

export const ContentAbsolute = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 90%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.size.xxxl}px;
  font-family: ${({ theme }) => theme.fonts[700]};
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.size.md}px;
  font-family: ${({ theme }) => theme.fonts[400]};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
`;
