import { StyleProp, ViewStyle } from "react-native";

export interface ICustomModal {
  visible: boolean;
  titleHeader: string;
  description: string;
  onPressCancel: () => void;
  onPressConfirm: () => void;
  titleButton: string;
  styleButton?: StyleProp<ViewStyle>;
  styleContainer?: StyleProp<ViewStyle>;
}
