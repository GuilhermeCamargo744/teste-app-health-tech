import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Alert } from "react-native";

export const logout = async () => {
  Alert.alert("Sua sessão expirou");
  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.removeItem("refreshToken");
  router.replace("/");
};
