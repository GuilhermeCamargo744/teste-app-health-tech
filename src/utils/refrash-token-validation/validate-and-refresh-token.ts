import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "./login-token";
import { api } from "@/src/server/config";

export const validateAndRefreshToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    if (!refreshToken) {
      await logout();
      return null;
    }

    const response = await api.post("/auth/refresh", {
      refreshToken,
    });

    if (response.data.accessToken) {
      await AsyncStorage.setItem("accessToken", response.data.accessToken);
      return response.data.accessToken;
    } else {
      await logout();
      return null;
    }
  } catch (error) {
    await logout();
    return null;
  }
};
