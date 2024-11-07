import { UserAvatar } from "@/src/components/user-avatar/user-avatar";
import * as S from "./styles";
import { ISettings } from "../interface-settings";
import { ButtonDefault } from "@/src/components/button-default/button-default";
import { ButtonChevron } from "@/src/components/button-chevron/button-chevron";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { logout } from "@/src/utils/logout";
import { router } from "expo-router";

export const SettingsView = ({ userData, theme }: ISettings) => {
  return (
    <S.Container>
      <S.ContentScroll>
        <S.ContentBody>
          <S.UserName>
            {userData.firstName} {userData.lastName}
          </S.UserName>
          <S.Email>{userData.email}</S.Email>
          <ButtonChevron
            onPress={() => {}}
            title="Meus dados"
            Icon={() => (
              <MaterialIcons
                name="person"
                size={24}
                color={theme.colors.gray_400}
              />
            )}
          />
          <ButtonChevron
            onPress={() => {}}
            title="Notificações"
            Icon={() => (
              <MaterialIcons
                name="notifications"
                size={24}
                color={theme.colors.gray_400}
              />
            )}
          />
          <ButtonChevron
            onPress={() => {}}
            title="Termos de uso"
            Icon={() => (
              <MaterialIcons
                name="edit-document"
                size={24}
                color={theme.colors.gray_400}
              />
            )}
          />
          <ButtonDefault
            onPress={() =>
              router.replace({
                pathname: "/auth-screen",
                params: { logout: 1 },
              })
            }
            title="Sair da conta"
            styleContent={{
              backgroundColor: theme.colors.red_500,
              marginTop: 32,
            }}
          />
        </S.ContentBody>
      </S.ContentScroll>
      <UserAvatar uri={userData?.image} />
    </S.Container>
  );
};
