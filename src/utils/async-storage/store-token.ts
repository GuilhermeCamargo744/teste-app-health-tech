import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeTokens = async (
  accessToken: string,
  refreshToken: string
) => {
  try {
    await AsyncStorage.setItem("accessToken", accessToken);
    await AsyncStorage.setItem("refreshToken", refreshToken);
  } catch (error) {
    console.error("Erro ao armazenar tokens:", error);
  }
};
