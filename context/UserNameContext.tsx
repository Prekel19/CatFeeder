import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface UserNameContextType {
  userName: string;
  updateUserName: (name: string) => void;
}

const UserNameContext = createContext<UserNameContextType | undefined>(undefined);

export const UserNameProvider = ({ children }: PropsWithChildren) => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const getName = async () => {
      try {
        const name = await AsyncStorage.getItem("name");
        if (name) {
          setUserName(name);
        } else {
          console.log("Name not found in AsyncStorage");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getName();
  }, []);

  const updateUserName = async (name: string) => {
    if (name) {
      setUserName(name);
      try {
        await AsyncStorage.setItem("name", name);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <UserNameContext.Provider value={{ userName, updateUserName }}>
      {children}
    </UserNameContext.Provider>
  );
};

export const useGetUserName = () => {
  const context = useContext(UserNameContext);

  if (!context) {
    throw new Error("useGetUserName must be used within a UserNameProvider");
  }

  return context;
};
