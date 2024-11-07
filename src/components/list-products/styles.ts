import styled from "styled-components/native";

export const ContentList = styled.View`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: bold;
  color: #007bff;
  padding: 10px;
  text-transform: uppercase;
`;

export const ItemContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_200};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageItem = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 5px;
`;

export const ItemDetails = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px;
  border-top-width: 0.5px;
  width: 100%;
  border-top-color: ${({ theme }) => theme.colors.gray_200};
  flex: 1;
`;

export const ItemTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
`;
export const ItemDescription = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  color: ${({ theme }) => theme.colors.background};
  text-align: left;
`;

export const ContentAmount = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 8px;
  width: 100%;
  overflow: scroll;
`;

export const ItemPrice = styled.Text<{ haveDiscount?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme, haveDiscount }) =>
    !haveDiscount ? theme.fontSizes.sm : theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.background};
  text-decoration-line: ${({ haveDiscount }) =>
    !haveDiscount ? "line-through" : "none"};
`;

export const DiscountText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.red};
  margin-right: 8px;
`;
