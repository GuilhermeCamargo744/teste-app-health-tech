import { FieldError } from "react-hook-form";
import { StyleProp, TextInput, ViewStyle } from "react-native";

export interface IPropsCardLogin
  extends React.ComponentProps<typeof TextInput> {
  title: string;
  onChangeText: (value: string) => void;
  value: string;
  styleContainer?: StyleProp<ViewStyle>;
  error: FieldError | undefined;
  haveIcon?: boolean;
}
