import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const CardContainer = styled.View`
  padding: 50px 24px 50px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  /* position: absolute; */
  width: 100%;
  border-radius: 8px;
`;
