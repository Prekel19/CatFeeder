import React from "react";
import { Stack } from "expo-router";
import { SettingsIcon } from "../../components/ui/SettingsIcon";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { HeaderTitle } from "../../components/ui/HeaderTitle";

export default function MainLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack
        screenOptions={{
          headerTitle: "",
          headerBackTitle: "Powrót",
          headerBackTitleStyle: {
            fontFamily: "Inter",
            fontSize: 18,
          },
          headerTintColor: Colors[colorScheme ?? "light"].text,
          headerLeft: () => <HeaderTitle />,
          headerRight: () => (
            <SettingsIcon color={Colors[colorScheme ?? "light"].settings} size={30} />
          ),
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? "light"].primary,
          },
        }}
      >
        <Stack.Screen name="home" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
