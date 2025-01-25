import { Text, TouchableOpacity, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

type ThemeButtonProps = {
  title: string;
  onPress: () => void;
};

export const ThemeButton = ({ title, onPress }: ThemeButtonProps) => {
  const colorScheme = useColorScheme();

  const buttonStyle = {
    backgroundColor: Colors[colorScheme ?? "light"].button,
  };

  return (
    <TouchableOpacity style={[buttonStyle, styles.button]} onPress={onPress}>
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
  text: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 500,
    color: "#fff",
  },
});
