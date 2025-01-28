import { Stack } from "expo-router";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import { Container } from "../../components/Container";
import { SwitchTheme } from "../../components/SwitchTheme";
import { useState } from "react";
import { Colors } from "../../constants/Colors";
import { useThemeColor } from "../../context/ThemeContext";
import ThemeView from "../../components/theme/ThemeView";
import { ThemeButton } from "../../components/theme/ThemeButton";
import { ThemeText } from "../../components/theme/ThemeText";
import { useGetUserName } from "../../context/UserNameContext";

export default function SettingsScreen() {
  const { userName, updateUserName } = useGetUserName();
  const [name, setName] = useState<string>(userName);
  const { colorScheme } = useThemeColor();

  const handlePress = async () => {
    if (name.length > 0) {
      updateUserName(name);
      Keyboard.dismiss();
    }
  };

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
      <Container height="40%" style={styles.settingsContainer}>
        <SwitchTheme />
        <View style={styles.inputContainer}>
          <ThemeText style={styles.title}>Imię</ThemeText>
          <TextInput
            onChangeText={setName}
            value={name}
            style={[
              styles.input,
              {
                color: Colors[colorScheme ?? "light"].text,
              },
            ]}
          />
        </View>
        <ThemeButton title="Zapisz zmiany" onPress={() => handlePress()} />
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
  settingsContainer: {
    gap: 20,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "auto",
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  input: {
    fontSize: 18,
    padding: 12,
    borderRadius: 8,
  },
});
