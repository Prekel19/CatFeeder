import { PropsWithChildren } from "react";
import { DimensionValue, View } from "react-native";

type ContainerProps = PropsWithChildren & {
  height: DimensionValue;
  color: string;
  flexGrow?: boolean;
};

export const Container = ({
  children,
  height,
  color,
  flexGrow = true,
}: ContainerProps) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: "90%",
        maxHeight: height,
        alignItems: "center",
        flex: flexGrow ? 1 : 0,
        padding: 24,
        borderRadius: 12,
        boxShadow:
          "0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00)",
      }}
    >
      {children}
    </View>
  );
};
