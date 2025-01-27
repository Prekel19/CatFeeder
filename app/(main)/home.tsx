import { StyleSheet, View } from "react-native";
import { ThemeButton } from "../../components/ThemeButton";
import { CatStatus } from "../../components/CatStatus";
import { CatFeedings } from "../../components/CatFeedings";
import ThemeView from "../../components/ThemeView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addDoc, collection, doc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { useGetDate } from "../../hooks/useGetDate";

export default function HomeScreen() {
  const [userName, setUserName] = useState<string>("");
  const feedingsCollection = collection(db, "feedings");
  const catStatusDoc = doc(db, "catStatus", "aURcv4VRGxG0zmC6giuL");

  useEffect(() => {
    const getName = async () => {
      const name: string | null = await AsyncStorage.getItem("name");
      if (name) {
        setUserName(name);
      }
    };

    getName();
  }, []);

  const feedCat = async () => {
    const date: Date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const time: string = hours + ":" + minutes;
    const currentDate: string = useGetDate();

    try {
      await addDoc(feedingsCollection, {
        name: userName,
        note: "",
        time: time,
        todaysDate: currentDate,
        fullDate: Timestamp.now(),
      });

      await updateDoc(catStatusDoc, {
        isHungry: false,
        lastFed: Date.now(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeView style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.mainContainer}>
        <CatStatus />
        <CatFeedings />
      </View>
      <View style={[styles.buttonContainer]}>
        <ThemeButton title="Nakarm kotka" size="large" onPress={feedCat} />
      </View>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "85%",
    width: "100%",
    alignItems: "center",
    gap: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  buttonContainer: {
    height: "15%",
    width: "92.5%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
});
