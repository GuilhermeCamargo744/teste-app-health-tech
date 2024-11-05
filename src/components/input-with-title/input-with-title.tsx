import {
  ButtonEye,
  Container,
  ContentInput,
  Input,
  TextError,
  Title,
} from "./styles";
import { IPropsCardLogin } from "./interface";
import { Ionicons } from "@expo/vector-icons";
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
    <Container style={styleContainer}>
      <Title>{title}</Title>
      <ContentInput>
        <Input
          value={value}
          onChangeText={onChangeText}
          {...rest}
          isError={error ? true : false}
          secureTextEntry={haveIcon ? !showPassword : false}
        />

        {haveIcon && (
          <ButtonEye onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={16}
              color={theme.colors.background}
            />
          </ButtonEye>
        )}
      </ContentInput>
      {error && <TextError>{error?.message}</TextError>}
    </Container>
  );
};
