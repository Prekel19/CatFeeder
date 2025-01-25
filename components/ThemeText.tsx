import { TextProps, Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export const ThemeText = ({ style, children }: TextProps) => {
  const colorScheme = useColorScheme();

  const textColor = {
    color: Colors[colorScheme ?? "light"].text,
  };

  return <Text style={[textColor, style]}>{children}</Text>;
};
