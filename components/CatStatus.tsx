import { useEffect, useState } from "react";
import { Container } from "./Container";
import { ThemeText } from "./ThemeText";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

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
        const docData = snapshot.data();
        const updatedStatus = {
          id: snapshot.id,
          isHungry: docData.isHungry,
          lastFed: docData.lastFed,
        } as ICatStatus;

        setCatStatus(updatedStatus);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (catStatus) {
      const now = Date.now();
      const hoursSinceFed = (now - catStatus.lastFed) / (1000 * 60 * 60); // Konwersja milisekund na godziny

      if (!catStatus.isHungry && hoursSinceFed >= 6) {
        updateCatStatus(true);
      }
    }
  }, [catStatus]);

  const updateCatStatus = async (newStatus: boolean) => {
    try {
      await updateDoc(catStatusDoc, {
        isHungry: newStatus,
      });
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
