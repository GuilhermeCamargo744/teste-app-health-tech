import { CardLogin } from "@/src/components/card-login/card-login";
import {
  Container,
  ContainerScroll,
  ContentAbsolute,
  ContentBottom,
  ContentKeyboardView,
  ContentTop,
  Description,
  Title,
} from "./styles";
import { IAuthView } from "../interface/interface-auth-view";

export const AuthView = ({
  control,
  handleSubmit,
  onSubmit,
  loading,
  error,
}: IAuthView) => {
  return (
    <ContentKeyboardView behavior="padding">
      <ContainerScroll>
        <Container>
          <ContentTop />
          <ContentBottom />
          <ContentAbsolute>
            <Title>Bem-vindo de volta!</Title>
            <Description>
              Insira seus dados para entrar na sua conta.
            </Description>
            <CardLogin
              control={control}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              loading={loading}
              error={error}
            />
          </ContentAbsolute>
        </Container>
      </ContainerScroll>
    </ContentKeyboardView>
  );
};
