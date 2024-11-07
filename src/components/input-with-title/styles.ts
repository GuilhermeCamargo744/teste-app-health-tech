import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const Input = styled.TextInput<{ isError?: boolean }>`
  height: 37px;
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme, isError }) =>
    isError ? theme.colors.red : theme.colors.gray_200};
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 34px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 6px;
`;

export const TextError = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.red};
`;

export const ContentInput = styled.View`
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

export const ButtonEye = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 7px;
  padding: 6px;
`;
