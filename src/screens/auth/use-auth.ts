import { isDevelop } from "./../../server/config";
import { useForm } from "react-hook-form";
import { InterfaceFormLogin } from "./interface/interface-form-login";
import { loginApi } from "@/src/models/auth/login";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/src/hooks/use-redux";
import {
  setResetReduxUserData,
  setUserData,
} from "@/src/utils/store/slices/use-data/user-data";
import { setResetReduxCurrentProduct } from "@/src/utils/store/slices/current-product-data/current-product-data";
import { setResetReduxProductsData } from "@/src/utils/store/slices/products-data/products-data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGlobalSearchParams } from "expo-router";

const defaultValues = isDevelop
  ? { username: "emilys", password: "emilyspass" }
  : {};

export const useAuth = () => {
  const [error, setError] = useState(false);
  const params = useGlobalSearchParams();
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

  useEffect(() => {
    if (Number(params.reset) == 1) {
      resetData();
    }
  }, []);

  const resetData = async () => {
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken");
    dispatch(setResetReduxCurrentProduct());
    dispatch(setResetReduxProductsData());
    dispatch(setResetReduxUserData());
  };

  return {
    control,
    onSubmit,
    handleSubmit,
    loading,
    error,
  };
};
