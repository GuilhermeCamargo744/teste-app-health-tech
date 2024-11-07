import React from "react";
import * as S from "./styles";
import { InputWithTitle } from "../input-with-title/input-with-title";
import { ICardLogin } from "./interface";
import { Controller } from "react-hook-form";
import { ButtonDefault } from "../button-default/button-default";

export const CardLogin = ({
  control,
  handleSubmit,
  onSubmit,
  loading,
  error,
}: ICardLogin) => {
  return (
    <S.CardContainer>
      {error && <S.TitleError>Username ou senha inválidos</S.TitleError>}
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
      <ButtonDefault
        title="Entrar"
        onPress={handleSubmit(onSubmit)}
        loading={loading}
      />
    </S.CardContainer>
  );
};
