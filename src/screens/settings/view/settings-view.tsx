import { UserAvatar } from "@/src/components/user-avatar/user-avatar";
import * as S from "./styles";
import { ISettings } from "../interface-settings";
import { ButtonDefault } from "@/src/components/buttons/button-default/button-default";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { CustomModal } from "@/src/components/modals/custom-modal/custom-modal";
import { ButtonChevron } from "@/src/components/buttons/button-chevron/button-chevron";
import { DevelopingModal } from "@/src/components/modals/developing-modal/developing-modal";

export const SettingsView = ({
  userData,
  theme,
  openModal,
  setOpenModal,
  openModalDeveloping,
  setOpenModalDeveloping,
}: ISettings) => {
  return (
    <S.Container>
      <S.ContentScroll>
        <S.ContentBody>
          <S.UserName>
            {userData.firstName} {userData.lastName}
          </S.UserName>
          <S.Email>{userData.email}</S.Email>
          <ButtonChevron
            onPress={() => setOpenModalDeveloping(true)}
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
            onPress={() => setOpenModalDeveloping(true)}
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
            onPress={() => setOpenModalDeveloping(true)}
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
            onPress={() => setOpenModal(true)}
            title="Sair da conta"
            styleContent={{
              backgroundColor: theme.colors.red_500,
              marginTop: 32,
            }}
          />
        </S.ContentBody>
      </S.ContentScroll>
      <UserAvatar uri={userData?.image} />
      <CustomModal
        visible={openModal}
        titleHeader="Sair da conta"
        onPressCancel={() => setOpenModal(false)}
        onPressConfirm={() =>
          router.replace({
            pathname: "/auth-screen",
            params: { logout: 1 },
          })
        }
        description="Você tem certeza que deseja sair da conta? "
        titleButton="Sair"
        styleButton={{
          backgroundColor: theme.colors.red_500,
        }}
      />
      <DevelopingModal
        onPressCancel={() => setOpenModalDeveloping(false)}
        visible={openModalDeveloping}
      />
    </S.Container>
  );
};
