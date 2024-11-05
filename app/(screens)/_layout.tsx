import { Stack } from "expo-router";

export default function LayoutStack() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
