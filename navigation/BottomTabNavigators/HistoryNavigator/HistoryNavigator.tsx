// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HistoryScreen } from "../../../screens";
import { HistoryParamList } from "../../../types";

const HistoryStack = createStackNavigator<HistoryParamList>();

export default function HistoryNavigator() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ headerTitle: "History" }}
      />
    </HistoryStack.Navigator>
  );
}
