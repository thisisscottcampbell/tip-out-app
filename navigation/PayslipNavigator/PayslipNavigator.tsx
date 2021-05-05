// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PayslipScreen, ShiftInfoScreen } from "../../screens";
import { PayslipParamList } from "../../types";

const PayslipStack = createStackNavigator<PayslipParamList>();

export default function PayslipNavigator() {
  return (
    <PayslipStack.Navigator>
      <PayslipStack.Screen
        name="ShiftInfoScreen"
        component={ShiftInfoScreen}
        options={{ headerTitle: "ShiftInfo" }}
      />
      <PayslipStack.Screen
        name="PayslipScreen"
        component={PayslipScreen}
        options={{ headerTitle: "Payslip Screen" }}
      />
    </PayslipStack.Navigator>
  );
}
