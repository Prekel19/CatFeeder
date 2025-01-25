import { useEffect } from "react";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ThemeView from "../components/ThemeView";

SplashScreen.preventAutoHideAsync();

export default function MainLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
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
    <ThemeView>
      <Slot />
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
    </ThemeView>
  );
}
