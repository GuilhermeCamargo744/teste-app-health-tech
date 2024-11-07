import * as S from "./styles";
import { IPropsCardLogin } from "./interface";
import { useState } from "react";
import { useTheme } from "styled-components";
import Feather from "@expo/vector-icons/Feather";

export const InputWithTitle = ({
  onChangeText,
  title,
  value,
  styleContainer,
  error,
  haveIcon,
  ...rest
}: IPropsCardLogin) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  return (
    <S.Container style={styleContainer}>
      <S.Title>{title}</S.Title>
      <S.ContentInput>
        <S.Input
          value={value}
          onChangeText={onChangeText}
          {...rest}
          isError={error ? true : false}
          secureTextEntry={haveIcon ? !showPassword : false}
        />

        {haveIcon && (
          <S.ButtonEye onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={16}
              color={theme.colors.background}
            />
          </S.ButtonEye>
        )}
      </S.ContentInput>
      {error && <S.TextError>{error?.message}</S.TextError>}
    </S.Container>
  );
};
