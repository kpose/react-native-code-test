import React, { createContext, useState } from "react";
import Firebase from "Firebase/config";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState("");

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        spinner,
        error,
        login: async (email: string, password: string) => {
          setSpinner(true);
          try {
            await Firebase.auth()
              .signInWithEmailAndPassword(email, password)
              .then((data) => {
                console.log(data);
              });
          } catch (e) {
            setSpinner(false);
            setError(e.message);
            //console.log(e.message);
          }
        },
        register: async (email: string, password: string) => {
          setSpinner(true);
          try {
            await Firebase.auth().createUserWithEmailAndPassword(
              email,
              password
            );
          } catch (e) {
            setSpinner(false);
            setError(e.message);
            //console.log(e);
          }
        },
        logout: async () => {
          try {
            await Firebase.auth()
              .signOut()
              .then(() => {
                setSpinner(false);
              });
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
