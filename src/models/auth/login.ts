import { InterfaceFormLogin } from "@/src/screens/auth/interface/interface-form-login";
import { api } from "@/src/server/config";
import { ILoginApi } from "./interface-login-api";
import { storeTokens } from "@/src/utils/async-storage/store-token";
import { router } from "expo-router";

export const loginApi = async ({ body, setError, setLoading }: ILoginApi) => {
  setLoading(true);

  return await api
    .post("/auth/login", body)
    .then((resp) => {
      storeTokens(resp.data.accessToken, resp.data.refreshToken);
      return router.replace("/(screens)/(tabs)");
    })
    .catch((err) => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
};
