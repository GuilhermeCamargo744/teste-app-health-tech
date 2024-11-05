import { useForm, Controller } from "react-hook-form";
import { InterfaceFormLogin } from "./interface/interface-form-login";
import { loginApi } from "@/src/models/auth/login";
import { useState } from "react";

export const useAuth = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InterfaceFormLogin>();

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
  };
};
