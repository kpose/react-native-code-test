import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { HomeStackParamList } from "./types";

import { Home, Details } from "../screens";

const Stack = createStackNavigator<HomeStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        //gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default AppStack;
