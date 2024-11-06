import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { ReactElement } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface IButtonDefault {
  title: string;
  styleContent?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  onPress: () => void;
  loading?: boolean;
  Icon?: React.ComponentType<IconProps>;
}
