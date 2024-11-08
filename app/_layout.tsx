import { DefaultThemeApp } from "@/src/utils/theme";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "@/src/store/store";
import { QueryClient, QueryClientProvider } from "react-query";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    RobotoRegular: require("../src/assets/fonts/Roboto/Roboto-Regular.ttf"),
    RobotoMedium: require("../src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    RobotoBold: require("../src/assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const queryClient = new QueryClient();

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
