import { useRouter } from "expo-router";
import { PropsWithChildren, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const OnboardNavigator = ({ children }: PropsWithChildren) => {
  const [hasName, setHasName] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkName = async () => {
      try {
        const name = await AsyncStorage.getItem("name");
        if (name) {
          setHasName(true);
          router.push("/home");
        } else {
          setHasName(false);
        }
      } catch (err) {
        console.error(err);
      }
    };

    checkName();
  }, [router]);

  return hasName === false && <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
