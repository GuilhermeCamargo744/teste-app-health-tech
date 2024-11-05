import { InterfaceFormLogin } from "@/src/screens/auth/interface/interface-form-login";
import { api } from "@/src/server/config";
import { ILoginApi } from "./interface-login-api";

export const loginApi = async ({ body, setError, setLoading }: ILoginApi) => {
  return await api
    .post("/auth/login", body)
    .then((resp) => {
      console.log("resp.data", JSON.stringify(resp.data));
    })
    .catch((err) => {
      console.log("error", err);
    })
    .finally(() => {
      console.log("loading", false);
    });
};
