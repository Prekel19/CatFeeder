import { Stack, useLocalSearchParams } from "expo-router";
import ThemeView from "../../../components/theme/ThemeView";
import { Container } from "../../../components/Container";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";
import { useThemeColor } from "../../../context/ThemeContext";

export default function FeedingItemScreen() {
  const [name, setName] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const { colorScheme } = useThemeColor();
  const { id } = useLocalSearchParams();

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <ThemeView style={styles.themeContainer}>
      <Stack.Screen
        options={{
          headerTitle: "Informacje",
          headerTitleStyle: { fontSize: 20 },
          headerLeft: undefined,
          headerRight: undefined,
        }}
      />
      <Container flex={0} style={styles.formContainer}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
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
        />
        <TextInput
          style={[
            styles.input,
            {
              borderColor: Colors[colorScheme ?? "light"].border,
              color: Colors[colorScheme ?? "light"].text,
            },
          ]}
          placeholder="Tutaj możesz dodać notatkę"
          placeholderTextColor="#CCC"
          value={note}
        />
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
  formContainer: {
    gap: 20,
  },
  input: {
    width: "100%",
    fontSize: 14,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
});
