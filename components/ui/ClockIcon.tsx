import { StyleSheet, useColorScheme, View } from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { Colors } from "../../constants/Colors";

export const ClockIcon = () => {
  const colorSheme = useColorScheme();

  const clockBackground = {
    backgroundColor: Colors[colorSheme ?? "light"].clockSecondary,
  };

  return (
    <View style={[clockBackground, styles.clockContainer]}>
      <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <G clipPath="url(#clip0_6_165)">
          <Path
            d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8.00001 1.33333C4.31811 1.33333 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
            stroke={Colors[colorSheme ?? "light"].clockPrimary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M8 4V8L10.6667 9.33333"
            stroke={Colors[colorSheme ?? "light"].clockPrimary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_6_165">
            <Rect width="16" height="16" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  clockContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
});
