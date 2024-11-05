import { Control, UseFormHandleSubmit } from "react-hook-form";
import { InterfaceFormLogin } from "./interface-form-login";

export interface IAuthView {
  control: Control<InterfaceFormLogin, any>;
  handleSubmit: UseFormHandleSubmit<InterfaceFormLogin, undefined>;
  onSubmit: (data: InterfaceFormLogin) => void;
}
