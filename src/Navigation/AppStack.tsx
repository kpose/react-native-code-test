import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { HomeStackParamList } from "./types";

import { Home, Details } from "../screens";

const Stack = createStackNavigator<HomeStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default AppStack;
