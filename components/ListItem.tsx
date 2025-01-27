import { StyleSheet, useColorScheme, View } from "react-native";
import { ClockIcon } from "./ui/ClockIcon";
import { ThemeText } from "./ThemeText";
import { Colors } from "../constants/Colors";

type ListItemProps = {
  name: string;
  time: string;
};

export const ListItem = ({ name, time }: ListItemProps) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[styles.listItem, { borderColor: Colors[colorScheme ?? "light"].border }]}
    >
      <ClockIcon />
      <ThemeText>{time}</ThemeText>
      <ThemeText>{name}</ThemeText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 21,
    paddingHorizontal: 17,
    borderWidth: 1,
    borderRadius: 10,
  },
});
