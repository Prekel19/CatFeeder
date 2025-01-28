import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { ThemeButton } from "./theme/ThemeButton";
import { Colors } from "../constants/Colors";
import { useThemeColor } from "../context/ThemeContext";
import { Text } from "react-native";

export const OnboardingForm = () => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { colorScheme } = useThemeColor();
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
        placeholderTextColor="#CCC"
        value={name}
        onChangeText={setName}
      />
      <Text style={[styles.error, error && { paddingBottom: 10 }]}>{error}</Text>
      <ThemeButton title="Dalej" onPress={() => handlePress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "100%",
    gap: 10,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  error: {
    fontSize: 12,
    color: "#EF4444",
    paddingLeft: 5,
  },
});
