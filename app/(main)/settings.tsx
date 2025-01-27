import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import ThemeView from "../../components/theme/ThemeView";
import { Container } from "../../components/Container";
import { SwitchTheme } from "../../components/SwitchTheme";

export default function SettingsScreen() {
  return (
    <ThemeView style={styles.themeContainer}>
      <Stack.Screen
        options={{
          headerTitle: "Ustawienia",
          headerTitleStyle: { fontSize: 20 },
          headerLeft: undefined,
          headerRight: undefined,
        }}
      />
      <Container height="60%" style={styles.settingsContainer}>
        <SwitchTheme />
      </Container>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  themeContainer: {
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 40,
  },
  settingsContainer: {},
});
