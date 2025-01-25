import { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

type ThemeViewProps = PropsWithChildren & { style?: StyleProp<ViewStyle> };

const ThemeView = ({ children, style }: ThemeViewProps) => {
  const colorScheme = useColorScheme();

  const themeColor =
    colorScheme === "light" ? Colors.light.background : Colors.dark.background;

  return (
    <View style={[style, { backgroundColor: themeColor, flex: 1 }]}>{children}</View>
  );
};

export default ThemeView;
