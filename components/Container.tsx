import { PropsWithChildren } from "react";
import { DimensionValue, View, ViewStyle } from "react-native";
import { Colors } from "../constants/Colors";
import { useThemeColor } from "../context/useThemeColor";

type ContainerProps = PropsWithChildren & {
  height?: DimensionValue;
  flex?: number;
  style?: ViewStyle;
};

export const Container = ({
  children,
  height = "100%",
  flex = 1,
  style,
}: ContainerProps) => {
  const { colorScheme } = useThemeColor();

  return (
    <View
      style={[
        style,
        {
          backgroundColor: Colors[colorScheme ?? "light"].primary,
          width: "90%",
          maxHeight: height,
          alignItems: "center",
          flex: flex,
          padding: 24,
          borderColor: colorScheme === "dark" ? Colors.dark.border : "unset",
          borderWidth: colorScheme === "dark" ? 1 : 0,
          borderRadius: 12,
          boxShadow: Colors[colorScheme ?? "light"].boxShadow,
        },
      ]}
    >
      {children}
    </View>
  );
};
