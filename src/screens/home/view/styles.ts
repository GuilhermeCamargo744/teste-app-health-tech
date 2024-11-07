import { FAB } from "react-native-paper";
import styled from "styled-components/native";

export const FloatingButton = styled(FAB)`
  position: absolute;
  margin: 16px;
  right: 0px;
  bottom: 0px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
