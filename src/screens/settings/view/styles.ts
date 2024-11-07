import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 30%;
  align-items: center;
  justify-content: center;
`;

export const ContentScroll = styled.ScrollView`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 0px 20px 0px 20px;
`;

export const ContentBody = styled.View`
  padding-top: 20%;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Email = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  color: ${({ theme }) => theme.colors.gray_500};
  margin-top: 8px;
  margin-bottom: 16px;
`;
