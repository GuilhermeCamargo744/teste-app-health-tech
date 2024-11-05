import React from "react";
import { CardContainer } from "./styles";
import { InputWithTitle } from "../input-with-title/input-with-title";
import { ICardLogin } from "./interface";
import { Controller } from "react-hook-form";
import { ButtonDefault } from "../button-default/button-default";

export const CardLogin = ({ control, handleSubmit, onSubmit }: ICardLogin) => {
  return (
    <CardContainer>
      <Controller
        control={control}
        name="username"
        rules={{
          required: "Nome de usuário é obrigatório",
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputWithTitle
            onChangeText={onChange}
            title="User name"
            value={value}
            onBlur={onBlur}
            error={error}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: "Senha é obrigatória",
        }}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <InputWithTitle
            onChangeText={onChange}
            title="Senha"
            value={value}
            styleContainer={{ marginTop: 24 }}
            onBlur={onBlur}
            error={error}
            haveIcon
          />
        )}
      />
      <ButtonDefault title="Entrar" onPress={handleSubmit(onSubmit)} />
    </CardContainer>
  );
};
