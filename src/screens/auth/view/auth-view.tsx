import { CardLogin } from "@/src/components/card-login/card-login";
import * as S from "./styles";
import { IAuthView } from "../interface/interface-auth-view";

export const AuthView = ({
  control,
  handleSubmit,
  onSubmit,
  loading,
  error,
}: IAuthView) => {
  return (
    <S.ContentKeyboardView behavior="padding">
      <S.ContainerScroll>
        <S.Container>
          <S.ContentTop />
          <S.ContentBottom />
          <S.ContentAbsolute>
            <S.Title>Bem-vindo de volta!</S.Title>
            <S.Description>
              Insira seus dados para entrar na sua conta.
            </S.Description>
            <CardLogin
              control={control}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              loading={loading}
              error={error}
            />
          </S.ContentAbsolute>
        </S.Container>
      </S.ContainerScroll>
    </S.ContentKeyboardView>
  );
};
