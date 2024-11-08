import LottieView from "lottie-react-native";
import { IDevelopingModal } from "./interface-developing-modal";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import * as S from "./styles";

export const DevelopingModal = ({
  visible,
  onPressCancel,
}: IDevelopingModal) => {
  const theme = useTheme();

  return (
    <S.ModalProduct visible={visible} onDismiss={onPressCancel}>
      <S.Container>
        <S.Header>
          <TouchableOpacity onPress={() => onPressCancel()}>
            <AntDesign name="close" size={24} color={theme.colors.gray_100} />
          </TouchableOpacity>
        </S.Header>
        <LottieView
          autoPlay
          style={{
            width: 220,
            height: 220,
            backgroundColor: theme.colors.primary,
            borderRadius: 220,
          }}
          source={require("@/src/lottie/developing.json")}
        />
        <S.Description>Área em desenvolvimento</S.Description>
      </S.Container>
    </S.ModalProduct>
  );
};
