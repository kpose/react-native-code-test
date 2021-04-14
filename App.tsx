import React from "react";
import { StyleSheet } from "react-native";

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
