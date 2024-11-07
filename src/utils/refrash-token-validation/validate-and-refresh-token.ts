import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "./login-token";
import { refreshAccessToken } from "@/src/models/refresh-token/refrash-token-model";

export const validateAndRefreshToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    if (!refreshToken) {
      await logout();
      return null;
    }
    const response = refreshAccessToken();

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
