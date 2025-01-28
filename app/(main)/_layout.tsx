import { Stack } from "expo-router";
import { SettingsIcon } from "../../components/ui/SettingsIcon";
import { useThemeColor } from "../../context/ThemeContext";
import { Colors } from "../../constants/Colors";
import { HeaderTitle } from "../../components/ui/HeaderTitle";
import { UserNameProvider } from "../../context/UserNameContext";
import { StatusBar } from "expo-status-bar";

export default function MainLayout() {
  const { colorScheme } = useThemeColor();

  return (
    <UserNameProvider>
      <Stack
        screenOptions={{
          headerTitle: "",
          headerBackTitle: "Wróć",
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
        <Stack.Screen name="feeding/[id]" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
    </UserNameProvider>
  );
}
