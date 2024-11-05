import { InterfaceFormLogin } from "@/src/screens/auth/interface/interface-form-login";

export interface ILoginApi {
  body: InterfaceFormLogin;
  setLoading: (loading: boolean) => void;
  setError: (value: boolean) => void;
}
