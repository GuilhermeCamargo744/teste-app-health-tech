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
      router.replace("/(screens)/(tabs)");
      return resp.data;
    })
    .catch((err) => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
};
