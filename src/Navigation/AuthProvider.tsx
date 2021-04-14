import React, { createContext, useState } from "react";
import Firebase from "Firebase/config";
import { useNavigation } from "@react-navigation/native";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [spinner, setSpinner] = useState(false);
  //const navigation = useNavigation();
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        spinner,
        login: async (email: string, password: string) => {
          try {
            setSpinner(true);
            await Firebase.auth()
              .signInWithEmailAndPassword(email, password)
              .then((data) => {
                setSpinner(false);
                //navigation.navigate("Home");
              });
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email: string, password: string) => {
          try {
            setSpinner(true);
            await Firebase.auth()
              .createUserWithEmailAndPassword(email, password)
              .then((data) => {
                setSpinner(false);
                //navigation.navigate("Home");
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await Firebase.auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
