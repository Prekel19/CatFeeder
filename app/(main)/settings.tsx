import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function SettingsScreen() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Ustawienia",
          headerLeft: undefined,
          headerRight: undefined,
        }}
      />
      <Text>Settings</Text>
    </View>
  );
}
