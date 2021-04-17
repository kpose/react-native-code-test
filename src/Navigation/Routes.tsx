import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as firebase from "firebase";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "./AuthProvider";
import { Spinner } from "Components";

export default function Routes() {
  const { user, setUser, spinner } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user: any) {
    setUser(user);
    /* if (initializing) setInitializing(false);
    setLoading(false); */
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
