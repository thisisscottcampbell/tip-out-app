// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SlipScreen, ShiftInfoScreen, ReviewScreen, ConfirmScreen } from "../../../screens";
import { TipOutParamList } from "../../../types";

const TipOutStack = createStackNavigator<TipOutParamList>();

export default function TipOutNavigator() {
  return (
    <TipOutStack.Navigator>
      <TipOutStack.Screen
        name="ShiftInfoScreen"
        component={ShiftInfoScreen}
        options={{ headerTitle: "ShiftInfo" }}
      />
      <TipOutStack.Screen
        name="SlipScreen"
        component={SlipScreen}
        options={{ headerTitle: "Slip Screen" }}
      />
      <TipOutStack.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{ headerTitle: "Review Screen" }}
      />
      <TipOutStack.Screen
        name="ConfirmScreen"
        component={ConfirmScreen}
        options={{ headerTitle: "Confirm Screen" }}
      />
    </TipOutStack.Navigator>
  );
}
