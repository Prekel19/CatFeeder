import { useEffect, useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
import { useThemeColor } from "../context/ThemeContext";
import { ThemeText } from "./theme/ThemeText";

export const SwitchTheme = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const { colorScheme, changeColorScheme } = useThemeColor();

  useEffect(() => {
    colorScheme === "light" ? setIsEnabled(false) : setIsEnabled(true);
  }, []);

  const toggleSwitch = () => {
    colorScheme === "light" ? changeColorScheme("dark") : changeColorScheme("light");
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.switchContainer}>
      <ThemeText style={styles.title}>Zmień motyw</ThemeText>
      <Switch
        trackColor={{ false: "#FB7185", true: "#60A5FA" }}
        thumbColor="#fff"
        ios_backgroundColor="#FFF"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
});
