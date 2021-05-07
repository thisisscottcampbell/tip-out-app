import React, { useState } from "react";
import styles from "./styles";
import DropDown from "../DropDown";
import AddButton from "../AddButton";
import { View, TextInput, Text } from "react-native";

import transactions from "../../Data/Transactions";
import employees from "../../Data/Employees";

export default function TipOutRow({ slip }: any) {
  const transaction = transactions.filter((transaction) => {
    return slip.transaction === transaction.id;
  });

  const employeeFrom = employees[transaction[0].from];
  const employeeTo = employees[transaction[0].to];

  return (
    <View style={{ flexDirection: "row" }}>
      {/* <Text style={styles.text}>{employeeFrom.firstName}</Text> */}
      <Text style={styles.text}>{employeeTo.firstName}</Text>
      <Text style={styles.text}>{`$${slip.amount}`}</Text>
    </View>
  );
}
