import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/Navigation/AuthStack";

import { Signin, Signup } from "./src/screens";

const App = () => {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Signin />
      </View> */}
      <AuthStack />
    </NavigationContainer>
  );
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
