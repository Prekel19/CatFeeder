import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { TextInput, useColorScheme, View, StyleSheet } from "react-native";
import { ThemeButton } from "./ThemeButton";
import { Colors } from "../constants/Colors";
import { ThemeText } from "./ThemeText";

export const OnboardingForm = () => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const colorScheme = useColorScheme();
  const router = useRouter();

  const handlePress = async () => {
    if (name.length > 0) {
      setError("");
      try {
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("onboarded", "true");
      } catch (err) {
        console.error(err);
      } finally {
        router.replace("/home");
      }
    } else {
      setError("Musisz podać swoje imię.");
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: Colors[colorScheme ?? "light"].border,
            color: Colors[colorScheme ?? "light"].text,
          },
        ]}
        placeholder="Podaj swoje imię"
        value={name}
        onChangeText={setName}
      />
      {error && <ThemeText>{error}</ThemeText>}
      <ThemeButton title="Dalej" onPress={() => handlePress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "100%",
    gap: 30,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});
