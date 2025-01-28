import {
  query,
  onSnapshot,
  collection,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { ThemeText } from "./theme/ThemeText";
import { Container } from "./Container";
import { useGetDate } from "../hooks/useGetDate";
import { AppState, FlatList, StyleSheet } from "react-native";
import { ListItem } from "./ListItem";

interface IFeedings {
  id: string;
  name: string;
  note: string;
  time: string;
  todaysDate: string;
  fullDate: Timestamp;
}

export const CatFeedings = () => {
  const [feedingsList, setFeedingsList] = useState<IFeedings[]>([]);
  const [date, setDate] = useState(() => useGetDate());
  const feedingsCollection = collection(db, "feedings");

  useEffect(() => {
    const feedingsQuery = query(
      feedingsCollection,
      where("todaysDate", "==", date),
      orderBy("fullDate", "asc")
    );
    const unsubscribe = onSnapshot(feedingsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          name: docData.name,
          note: docData.note,
          time: docData.time,
          todaysDate: docData.todaysDate,
          fullDate: docData.fullDate,
        } as IFeedings;
      });
      setFeedingsList(data);
    });

    return () => unsubscribe();
  }, [date]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        const currentDate = useGetDate();
        if (date !== currentDate) {
          setDate(currentDate);
        }
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <Container flex={2} style={styles.container}>
      <ThemeText style={styles.title}>Dzisiejsze karmienia</ThemeText>
      <FlatList
        data={feedingsList}
        style={{ width: "100%" }}
        renderItem={({ item }) => (
          <ListItem id={item.id} name={item.name} time={item.time} />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<ThemeText>Brak danych do wyświetlenia</ThemeText>}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  title: {
    width: "100%",
    fontSize: 20,
    fontWeight: 500,
    textAlign: "left",
  },
});
