import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../server/config";
import { validateAndRefreshToken } from "./validate-and-refresh-token";

export const baseRequest = async (url: string, method: string = "GET") => {
  try {
    const accessToken = await AsyncStorage.getItem("accessToken");
    const response =
      method === "DELETE"
        ? await api.delete(url, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
        : await api.get(url, {
            headers: { Authorization: `Bearer ${accessToken}` },
          });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const newAccessToken = await validateAndRefreshToken();
      if (newAccessToken) {
        const response =
          method === "DELETE"
            ? await api.delete(url, {
                headers: { Authorization: `Bearer ${newAccessToken}` },
              })
            : await api.get(url, {
                headers: { Authorization: `Bearer ${newAccessToken}` },
              });
        return response.data;
      }
    }
    throw error;
  }
};
