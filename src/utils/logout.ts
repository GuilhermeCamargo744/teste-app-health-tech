import { router } from "expo-router";
import { Alert } from "react-native";

export const logout = async () => {
  Alert.alert("Sua sessão expirou");
  router.replace({
    pathname: "/auth-screen",
    params: { logout: 1 },
  });
};
