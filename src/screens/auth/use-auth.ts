import { isDevelop } from "./../../server/config";
import { useForm } from "react-hook-form";
import { InterfaceFormLogin } from "./interface/interface-form-login";
import { loginApi } from "@/src/models/auth/login";
import { useState } from "react";
import { useAppDispatch } from "@/src/hooks/use-redux";
import { setUserData } from "@/src/utils/store/slices/use-data/user-data";
import { AxiosDefaults, AxiosResponse } from "axios";

const defaultValues = isDevelop
  ? { username: "emilys", password: "emilyspass" }
  : {};

export const useAuth = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<InterfaceFormLogin>({
    defaultValues,
  });

  const onSubmit = (body: InterfaceFormLogin) => {
    void loginApi({
      body,
      setError,
      setLoading,
    }).then((resp) => {
      dispatch(setUserData(resp));
    });
  };

  return {
    control,
    onSubmit,
    handleSubmit,
    loading,
    error,
  };
};
