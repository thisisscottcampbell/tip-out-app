import React, { useState } from "react";
import styles from "./styles";
import DropDown from "../DropDown";
import AddButton from "../AddButton";
import { View, TextInput, Text } from "react-native";

import transactions from "../../Data/Transactions";
import employees from "../../Data/Employees";

export default function TipOutRow({ slip }: any) {
  console.log("tansactions --> ", transactions);

  const test = transactions.filter((transaction) => {
    console.log("slip trans --> ", slip.transaction);
    console.log("trans.id --> ", transaction.id);
    return slip.transaction === transaction.id;
  });

  console.log("test --> ", test);
  console.log("test.from --> ", test[0].from);
  console.log("test.to --> ", test[0].to);

  return (
    <View style={{ flexDirection: "row" }}>
      <Text>{`From: ${employees[test[0].from].firstName} |`}</Text>
      <Text>{`To: ${employees[test[0].to].lastName} |`}</Text>
      <Text>{`Amount: ${slip.amount}`}</Text>
    </View>
  );
}
