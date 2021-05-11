// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../../screens";
import { AccountParamList } from "../../../types";

const AccountStack = createStackNavigator<AccountParamList>();

export default function AccountNavigator() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerTitle: "Account" }}
      />
    </AccountStack.Navigator>
  );
}
