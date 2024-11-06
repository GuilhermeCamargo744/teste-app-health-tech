import { isDevelop } from "./../../server/config";
import { useForm } from "react-hook-form";
import { InterfaceFormLogin } from "./interface/interface-form-login";
import { loginApi } from "@/src/models/auth/login";
import { useState } from "react";

const defaultValues = isDevelop
  ? { username: "emilys", password: "emilyspass" }
  : {};

export const useAuth = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm<InterfaceFormLogin>({
    defaultValues,
  });

  const onSubmit = (body: InterfaceFormLogin) => {
    void loginApi({
      body,
      setError,
      setLoading,
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
