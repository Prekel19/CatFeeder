import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { TextInput, useColorScheme, View, StyleSheet } from "react-native";
import { ThemeButton } from "./ThemeButton";
import { Colors } from "../constants/Colors";

export const OnboardingForm = () => {
  const [name, setName] = useState<string>("");
  const colorScheme = useColorScheme();
  const router = useRouter();

  const handlePress = async () => {
    if (name.length > 0) {
      try {
        await AsyncStorage.setItem("name", name);
      } catch (err) {
        console.error(err);
      } finally {
        router.push("/home");
      }
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
