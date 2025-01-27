import { TextProps, Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

type ThemeTextProps = TextProps & {
  type?: "default" | "special";
};

export const ThemeText = ({ style, children, type = "default" }: ThemeTextProps) => {
  const colorScheme = useColorScheme();

  const text = {
    fontFamily: "Inter",
  };

  const defaultColor = {
    color: Colors[colorScheme ?? "light"].text,
  };

  const special = {
    color: Colors[colorScheme ?? "light"].secondary,
  };

  return (
    <Text
      style={[
        text,
        style,
        type === "default" && defaultColor,
        type === "special" && special,
      ]}
    >
      {children}
    </Text>
  );
};
