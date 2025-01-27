import { Fragment, useEffect } from "react";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import { Stack, SplashScreen, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useIsOnboarded } from "../hooks/useIsOnboarded";

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
    <Fragment>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(main)"
          options={{ animation: isOnboarded ? "none" : "default" }}
        />
        <Stack.Screen name="index" options={{ animation: "fade" }} />
      </Stack>
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
    </Fragment>
  );
}
