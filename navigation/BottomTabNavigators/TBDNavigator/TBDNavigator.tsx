// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TBDScreen } from "../../../screens";
import { TBDParamList } from "../../../types";

const TBDStack = createStackNavigator<TBDParamList>();

export default function TBDNavigator() {
  return (
    <TBDStack.Navigator>
      <TBDStack.Screen
        name="TBDScreen"
        component={TBDScreen}
        options={{ headerTitle: "TBD" }}
      />
    </TBDStack.Navigator>
  );
}
