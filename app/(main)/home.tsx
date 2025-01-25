import { Text } from "react-native";
import ThemeView from "../../components/ThemeView";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsIcon } from "../../components/ui/SettingsIcon";

export default function HomeScreen() {
  return (
    <ThemeView>
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <Text>Home</Text>
      </SafeAreaView>
    </ThemeView>
  );
}
