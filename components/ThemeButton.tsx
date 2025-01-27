import { Text, TouchableOpacity, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

type ThemeButtonProps = {
  title: string;
  size?: "small" | "medium" | "large";
  onPress: () => void;
};

export const ThemeButton = ({ title, onPress, size = "medium" }: ThemeButtonProps) => {
  const colorScheme = useColorScheme();

  const buttonStyle = {
    backgroundColor: Colors[colorScheme ?? "light"].button,
  };

  return (
    <TouchableOpacity
      style={[
        buttonStyle,
        styles.button,
        size === "small" && styles.small,
        size === "medium" && styles.medium,
        size === "large" && styles.large,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "100%",
    padding: 15,
    borderRadius: 8,
  },
  small: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  medium: {
    padding: 15,
  },
  large: {
    padding: 20,
  },
  text: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 500,
    color: "#fff",
  },
});
