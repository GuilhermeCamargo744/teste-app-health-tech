import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useTheme } from "styled-components";
import { Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? theme.colors.primary : theme.colors.gray}
            />
          ),
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: theme.size.xs,
                  fontFamily: theme.fonts[600],
                  color: focused ? theme.colors.primary : theme.colors.gray,
                }}
              >
                Início
              </Text>
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Configurações",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={focused ? theme.colors.primary : theme.colors.gray}
            />
          ),
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  fontSize: theme.size.xs,
                  fontFamily: theme.fonts[600],
                  color: focused ? theme.colors.primary : theme.colors.gray,
                }}
              >
                Configurações
              </Text>
            );
          },
        }}
      />
    </Tabs>
  );
}
