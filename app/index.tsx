import { StyleSheet, useColorScheme } from "react-native";
import { Container } from "../components/Container";
import { Colors } from "../constants/Colors";
import { FormHeader } from "../components/ui/FormHeader";
import { OnboardingForm } from "../components/OnboardingForm";
import { OnboardNavigator } from "../components/OnboardNavigator";

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <OnboardNavigator>
      <Container
        height="100%"
        flexGrow={false}
        color={Colors[colorScheme ?? "light"].primary}
      >
        <FormHeader />
        <OnboardingForm />
      </Container>
    </OnboardNavigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
