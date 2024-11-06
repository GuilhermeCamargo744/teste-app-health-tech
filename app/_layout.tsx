import { DefaultThemeApp } from "@/src/utils/theme";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "@/src/utils/store/store";
import { StatusBar } from "expo-status-bar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    RobotoRegular: require("../src/fonts/Roboto/Roboto-Regular.ttf"),
    RobotoMedium: require("../src/fonts/Roboto/Roboto-Medium.ttf"),
    RobotoBold: require("../src/fonts/Roboto/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <ThemeProvider theme={DefaultThemeApp}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="(screens)" />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="index" />
          </Stack>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
