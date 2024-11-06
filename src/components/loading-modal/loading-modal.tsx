import { Modal } from "react-native-paper";
import { ILoadingModal } from "./interface-loading-modal";
import { Container, TitleModal } from "./styles";
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
      <Container>
        <TitleModal>Carregando...</TitleModal>
        <ActivityIndicator color={theme.colors.primary} size={60} />
      </Container>
    </Modal>
  );
};
