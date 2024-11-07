import { useQuery } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshAccessToken } from "@/src/models/refresh-token/refrash-token-model";
import { logout } from "../logout";

const fetchAccessToken = async () => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  if (accessToken) {
    return accessToken;
  } else {
    logout();
  }
};

const useRefreshToken = () => {
  return useQuery("refresh-token", refreshAccessToken, {
    refetchInterval: 60 * 60 * 1000, // Por padrão o token recebe seu refrash em 1h
    // refetchInterval: 30 * 1000, Deixei já pronto o tempo de 30 segundos caso queiram testar o refrash token
    refetchIntervalInBackground: true,
    retry: false,
    onError: (error) => {
      console.error("Erro ao tentar atualizar o token", error);
    },
  });
};

export { fetchAccessToken, useRefreshToken };
