import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Container } from "../components/Container";
import { FormHeader } from "../components/ui/FormHeader";
import { OnboardingForm } from "../components/OnboardingForm";
import ThemeView from "../components/theme/ThemeView";
import { useIsOnboarded } from "../hooks/useIsOnboarded";
import { Redirect } from "expo-router";

const App = () => {
  const { loading, isOnboarded } = useIsOnboarded();

  if (loading) {
    return null;
  }

  if (isOnboarded) {
    return <Redirect href="/home" />;
  }

  return (
    <ThemeView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Container flex={0}>
            <FormHeader />
            <OnboardingForm />
          </Container>
        </View>
      </TouchableWithoutFeedback>
    </ThemeView>
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
