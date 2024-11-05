import { StyleProp, ViewStyle } from "react-native";

export interface IButtonDefault {
  title: string;
  styleContent?: StyleProp<ViewStyle>;
  onPress: () => void;
}
