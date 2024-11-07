import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../server/config";
import { validateAndRefreshToken } from "./validate-and-refresh-token";

export const baseRequest = async (
  url: string,
  method: string = "GET",
  data: any = null
) => {
  try {
    const accessToken = await AsyncStorage.getItem("accessToken");

    const config: any = {
      method,
      url,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    if (data && method !== "DELETE") {
      config.data = data;
    }

    const response = await api.request(config);
    return response.data;
  } catch (error) {
    if (error.response && error.status === 401) {
      const newAccessToken = await validateAndRefreshToken();
      if (newAccessToken) {
        const config: any = {
          method,
          url,
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        };

        if (data && method !== "DELETE") {
          config.data = data;
        }

        const response = await api.request(config);
        return response.data;
      }
    }
    throw error;
  }
};
