import { View, StyleSheet } from "react-native";
import { ThemeText } from "../ThemeText";

export const FormHeader = () => {
  return (
    <View style={styles.formHeader}>
      <ThemeText style={styles.title}>Witaj w Cat Feeder</ThemeText>
      <ThemeText style={styles.subtitle}>
        Podaj swoje imię, żeby każdy wiedział kto karmił kota
      </ThemeText>
    </View>
  );
};

const styles = StyleSheet.create({
  formHeader: {
    alignItems: "center",
    gap: 10,
    paddingBottom: 30,
  },
  title: {
    fontFamily: "Inter",
    fontSize: 26,
    fontWeight: 600,
  },
  subtitle: {
    fontFamily: "Inter",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
});
