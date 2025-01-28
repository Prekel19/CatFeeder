import { Stack } from "expo-router";
import { StyleSheet, TextInput, View } from "react-native";
import { Container } from "../../components/Container";
import { SwitchTheme } from "../../components/SwitchTheme";
import { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { useThemeColor } from "../../context/useThemeColor";
import ThemeView from "../../components/theme/ThemeView";
import { ThemeButton } from "../../components/theme/ThemeButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeText } from "../../components/theme/ThemeText";

export default function SettingsScreen() {
  const [name, setName] = useState<string>("");
  const { colorScheme } = useThemeColor();

  useEffect(() => {
    const setDefaultName = async () => {
      try {
        const fetchedName = await AsyncStorage.getItem("name");
        if (fetchedName) {
          setName(fetchedName);
        }
      } catch (err) {
        console.log(err);
      }
    };

    setDefaultName();
  }, []);

  const handlePress = async () => {
    if (name.length > 0) {
      try {
        await AsyncStorage.setItem("name", name);
      } catch (err) {
        console.log(err);
      }
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
      <Container height="60%" style={styles.settingsContainer}>
        <SwitchTheme />
        <View style={styles.inputContainer}>
          <ThemeText style={styles.title}>Imię</ThemeText>
          <TextInput
            onChangeText={setName}
            value={name}
            style={[
              styles.input,
              {
                // borderColor: Colors[colorScheme ?? "light"].border,
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
