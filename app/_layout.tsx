import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useIsOnboarded } from "../hooks/useIsOnboarded";
import { ThemeProvider, useThemeColor } from "../context/ThemeContext";
import { useColorScheme } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
  });

  const isOnboarded = useIsOnboarded();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(main)"
          options={{ animation: isOnboarded ? "none" : "default" }}
        />
        <Stack.Screen name="index" options={{ animation: "fade" }} />
      </Stack>
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
    </ThemeProvider>
  );
}
