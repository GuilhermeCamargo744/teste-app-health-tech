import { Modal } from "react-native-paper";
import { ILoadingModal } from "./interface-loading-modal";
import * as S from "./styles";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

export const LoadingModal = ({ visible }: ILoadingModal) => {
  const theme = useTheme();
  return (
    <Modal
      visible={visible}
      dismissable={false}
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <S.Container>
        <S.TitleModal>Carregando...</S.TitleModal>
        <ActivityIndicator color={theme.colors.primary} size={60} />
      </S.Container>
    </Modal>
  );
};
