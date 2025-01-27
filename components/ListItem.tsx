import { StyleSheet, View } from "react-native";
import { ClockIcon } from "./ui/ClockIcon";
import { ThemeText } from "./theme/ThemeText";
import { Colors } from "../constants/Colors";
import { useThemeColor } from "../context/useThemeColor";

type ListItemProps = {
  name: string;
  time: string;
};

export const ListItem = ({ name, time }: ListItemProps) => {
  const { colorScheme } = useThemeColor();

  return (
    <View
      style={[styles.listItem, { borderColor: Colors[colorScheme ?? "light"].border }]}
    >
      <ClockIcon />
      <ThemeText style={styles.text}>{time}</ThemeText>
      <ThemeText style={styles.text}>{name}</ThemeText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 19,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontWeight: 500,
  },
});
