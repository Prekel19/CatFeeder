import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useIsOnboarded = (): { isOnboarded: boolean; loading: boolean } => {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkOnboard = async () => {
      try {
        const onboard = await AsyncStorage.getItem("onboarded");
        setIsOnboarded(onboard === "true");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    checkOnboard();
  }, []);

  return { isOnboarded, loading };
};
