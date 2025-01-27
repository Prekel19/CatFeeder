import { StyleSheet } from "react-native";
import { ThemeText } from "../theme/ThemeText";

export const HeaderTitle = () => {
  return <ThemeText style={styles.title}>Cat Feeder</ThemeText>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Inter",
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
});
