import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";

interface ThemeContextType {
  colorScheme: ColorSchemeName;
  changeColorScheme: (theme: ColorSchemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const systemColorScheme: ColorSchemeName = useColorScheme() ?? "light";
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(systemColorScheme);

  useEffect(() => {
    const loadThemeColor = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("theme");
        if (storedTheme === "light" || storedTheme === "dark") {
          setColorScheme(storedTheme);
        }
      } catch (err) {
        console.error(err);
      }
    };

    loadThemeColor();
  }, []);

  const changeColorScheme = async (theme: ColorSchemeName) => {
    if (theme) {
      try {
        await AsyncStorage.setItem("theme", theme);
        setColorScheme(theme);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, changeColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeColor = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeColor must be used within a ThemeProvider");
  }
  return context;
};
