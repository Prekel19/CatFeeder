import { StyleSheet, View } from "react-native";
import { ClockIcon } from "./ui/ClockIcon";
import { ThemeText } from "./theme/ThemeText";
import { Colors } from "../constants/Colors";
import { useThemeColor } from "../context/ThemeContext";
import { Link } from "expo-router";

type ListItemProps = {
  id: string;
  name: string;
  time: string;
};

export const ListItem = ({ id, name, time }: ListItemProps) => {
  const { colorScheme } = useThemeColor();

  return (
    <Link
      href={`feeding/${id}`}
      style={[
        styles.listItemContainer,
        { borderColor: Colors[colorScheme ?? "light"].border },
      ]}
    >
      <View style={styles.listItem}>
        <ClockIcon />
        <ThemeText style={styles.text}>{time}</ThemeText>
        <ThemeText style={styles.text}>{name}</ThemeText>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontWeight: 500,
  },
});
