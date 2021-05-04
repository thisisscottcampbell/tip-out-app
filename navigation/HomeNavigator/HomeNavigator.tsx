// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../screens";
import { HomeParamList } from "../../types";

const HomeStack = createStackNavigator<HomeParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
    </HomeStack.Navigator>
  );
}
