import { Stack, router } from "expo-router";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function LayoutDetails() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  );
}
