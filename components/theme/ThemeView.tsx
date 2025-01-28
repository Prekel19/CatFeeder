import { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Colors } from "../../constants/Colors";
import { useThemeColor } from "../../context/ThemeContext";

type ThemeViewProps = PropsWithChildren & { style?: StyleProp<ViewStyle> };

const ThemeView = ({ children, style }: ThemeViewProps) => {
  const { colorScheme } = useThemeColor();

  const themeColor =
    colorScheme === "light" ? Colors.light.background : Colors.dark.background;

  return (
    <View style={[style, { backgroundColor: themeColor, flex: 1 }]}>{children}</View>
  );
};

export default ThemeView;
