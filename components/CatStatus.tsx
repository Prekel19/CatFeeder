import { useEffect, useState } from "react";
import { Container } from "./Container";
import { ThemeText } from "./theme/ThemeText";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { AppState } from "react-native";

interface ICatStatus {
  id: string;
  isHungry: boolean;
  lastFed: number;
}

export const CatStatus = () => {
  const [catStatus, setCatStatus] = useState<ICatStatus>();
  const catStatusDoc = doc(db, "catStatus", "aURcv4VRGxG0zmC6giuL");

  useEffect(() => {
    const unsubscribe = onSnapshot(catStatusDoc, (snapshot) => {
      if (snapshot.exists()) {
        setCatStatus({
          id: snapshot.id,
          isHungry: snapshot.data().isHungry,
          lastFed: snapshot.data().lastFed,
        });
      }
    });

    checkCatStatus();

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        checkCatStatus();
      }
    });

    return () => subscription.remove();
  }, [catStatus]);

  const checkCatStatus = async () => {
    if (catStatus) {
      const now = Date.now();
      const hoursSinceFed = (now - catStatus.lastFed) / (1000 * 60 * 60);
      if (!catStatus.isHungry && hoursSinceFed >= 6) {
        updateCatStatus();
      }
    }
  };

  const updateCatStatus = async () => {
    try {
      await updateDoc(catStatusDoc, { isHungry: true });
    } catch (error) {
      console.error("Błąd aktualizacji statusu kota:", error);
    }
  };

  return (
    <Container flex={1} style={{ justifyContent: "flex-end" }}>
      <ThemeText type="special" style={{ fontSize: 22, fontWeight: 500 }}>
        {catStatus?.isHungry ? "Kot jest głodny 😿" : "Kot jest najedzony 😺"}
      </ThemeText>
    </Container>
  );
};
