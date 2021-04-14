import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/Navigation/AuthStack";

import { Signin, Signup } from "./src/screens";
import Providers from "Navigation";

const App = () => {
  return <Providers />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    textAlign: "center",
  },
});
