import styled from "styled-components/native";

export const ContentAvatar = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 7%;
`;

export const Avatar = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 150px;
  background-color: ${({ theme }) => theme.colors.gray_100};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_500};
`;
