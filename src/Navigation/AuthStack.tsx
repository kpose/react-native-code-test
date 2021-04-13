import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "./types";

import { Signin, Signup } from "../screens";
import AppStack from "./AppStack";

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="AppStack" component={AppStack} />
    </Stack.Navigator>
  );
}

export default AuthStack;
