import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshAccessToken } from "@/src/models/refresh-token/refrash-token-model";
import { logout } from "../logout";

export const validateAndRefreshToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    if (!refreshToken) {
      await logout();
      return null;
    }
    const response = refreshAccessToken();

    if (response) {
      return response;
    } else {
      await logout();
      return null;
    }
  } catch (error) {
    await logout();
    return null;
  }
};
