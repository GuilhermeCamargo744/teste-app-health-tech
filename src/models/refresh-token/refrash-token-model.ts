import { api } from "@/src/server/config";
import { logout } from "@/src/utils/refrash-token-validation/login-token";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const refreshAccessToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    if (!refreshToken) {
      logout();
      throw new Error("Refresh token não encontrado");
    }

    const response = await api.post("/auth/refresh", {
      refreshToken,
      credentials: "include",
    });

    const { accessToken } = response.data;
    await AsyncStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Erro ao tentar refresh do token:", error);
    logout();
    throw error;
  }
};
